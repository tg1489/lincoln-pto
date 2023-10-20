// const { Model, DataTypes } = require('sequelize');
// const sequelize = require('../config/connection');
// const bcrypt = require('bcrypt');

// class User extends Model {
//   async isCorrectPassword(password) {
//     return bcrypt.compare(password, this.password);
//   }
// }

// User.init(
//   {
//     id: {
//       type: DataTypes.INTEGER,
//       allowNull: false,
//       autoIncrement: true,
//       primaryKey: true,
//     },
//     username: {
//       type: DataTypes.STRING,
//       allowNull: false,
//       validate: {
//         len: [3],
//       },
//     },
//     email: {
//       type: DataTypes.STRING,
//       allowNull: false,
//       unique: false,
//       validate: {
//         isEmail: true,
//       },
//     },
//     password: {
//       type: DataTypes.STRING,
//       allowNull: false,
//       validate: {
//         len: [8],
//       },
//     },
//   },
//   {
//     hooks: {
//       beforeCreate: async (newUserData) => {
//         newUserData.password = await bcrypt.hash(newUserData.password, 10);
//         newUserData.email = await newUserData.email.toLowerCase();
//         return newUserData;
//       },
//       beforeUpdate: async (updatedUserData) => {
//         updatedUserData.password = await bcrypt.hash(
//           updatedUserData.password,
//           10
//         );
//         updatedUserData.email = await updatedUserData.email.toLowerCase();
//         return updatedUserData;
//       },
//     },
//     sequelize,
//     timestamps: false,
//     freezeTableName: true,
//     underscored: true,
//     modelName: 'user',
//   }
// );

// module.exports = User;

const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      match: [/.+@.+\..+/, 'Must use a valid email address'],
    },
    password: {
      type: String,
      required: true,
    },
  },
  // set this to use virtual below
  {
    toJSON: {
      virtuals: true,
    },
  }
);

// hash user password
userSchema.pre('save', async function (next) {
  if (this.isNew || this.isModified('password')) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }

  next();
});

// custom method to compare and validate password for logging in
userSchema.methods.isCorrectPassword = async function (password) {
  return bcrypt.compare(password, this.password);
};

const User = model('User', userSchema);

module.exports = User;
