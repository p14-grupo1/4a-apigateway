const { gql } = require('apollo-server');

const turismoTypeDef = gql`
  type Owner {
    id: ID!
    nit: Int!
    name: String!
    size: String!
  }

  type Hotel {
    owner: Int!
    type: String!
    address: String!
    qualification: Int!
    name: String!
  }

  type Tourist {
    id: ID!
    age: Int!
    name: String!
    user: Int!
  }

  type Rating {
    id: ID!
    rating: Int!
    hotel: Int!
    tourist: Int!
  }
  input OwnerInput {
    nit: Int!
    name: String!
    size: String!
  }
  input TouristInput {
    age: Int!
    name: String!
    user: Int!
  }

  input HotelInput {
    owner: Int!
    type: String!
    address: String!
    qualification: Int!
    name: String!
  }

  type Query {
    hotels: [Hotel]
    tourists: [Tourist]
    ratings: [Rating]
    owners: [Owner]
  }

  type Mutation {
    addOwner(owner: OwnerInput!): Owner!
    addTourist(tourist: TouristInput!): Tourist
  }
`;

module.exports = turismoTypeDef;
