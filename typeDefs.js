const { gql } = require('apollo-server');

module.exports = gql`
  type User {
    _id: ID
    firstName: String
    lastName: String
    email: String
    password: String
    date: String
  }

  type Query {
    user(_id: ID!): User
    users: [User!]
  }
`;
