const { gql } = require('apollo-server');

const accountTypeDef = gql`
    type Account {
        username: String!
        balance: Int!
        lastChange: String!
    }

    type Query {
        accountByUsername(username: String!): Account
    }
`;

module.exports = accountTypeDef;

