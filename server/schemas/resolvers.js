const User = require('../models/User');
const { AuthenticationError } = require('apollo-server-express');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    // Fetch the current user's profile
    me: async (_, __, context) => {
      if (context.user) {
        return User.findOne({
          where: { id: context.user.id },
        });
      } else {
        throw new AuthenticationError('You need to be logged in!');
      }
    },
  },

  Mutation: {
    // User registration
    register: async (parent, { username, email, password }) => {
      try {
        const newUser = await User.create({
          username: username,
          email: email,
          password: password,
        });

        const token = signToken(newUser);

        return { token: token, user: newUser };
      } catch (err) {
        throw new AuthenticationError(
          'Registration failed. Please try again later'
        );
      }
    },

    // User login
    login: async (parent, { username, password }) => {
      try {
        console.log('Attempting login with username:', username);
        const user = await User.findOne({
          where: { username },
        });

        if (!user || !(await user.isCorrectPassword(password))) {
          console.log('Login failed: Incorrect credentials');
          throw new AuthenticationError('Incorrect credentials');
        }

        const token = signToken(user);

        console.log('Login Successful');

        return { token, user };
      } catch (err) {
        console.error(`Error: ${err}`);
        throw new Error('Login failed');
      }
    },
  },
};

module.exports = resolvers;
