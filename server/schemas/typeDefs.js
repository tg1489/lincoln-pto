const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    id: ID!
    username: String
    email: String
  }

  type AuthPayload {
    token: ID!
    user: User
  }
  type Query {
    me: User
  }
  type Mutation {
    register(username: String!, email: String!, password: String!): AuthPayload
    login(username: String!, password: String!): AuthPayload
  }
`;

module.exports = typeDefs;
