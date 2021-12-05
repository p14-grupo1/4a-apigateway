const { gql } = require('apollo-server');

const authTypeDefs = gql`
  input LoginInput {
    username: String!
    password: String!
  }

  input SignUpInput {
    username: String!
    password1: String!
    password2: String!
    email: String!
  }

  type Token {
    key: String!
  }

  extend type Mutation {
    logIn(credentials: LoginInput!): Token!
    signUp(signupData: SignUpInput!): Token!
  }
`;

module.exports = authTypeDefs;
