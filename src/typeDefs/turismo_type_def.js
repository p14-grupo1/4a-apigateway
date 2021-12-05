const { gql } = require('apollo-server');

const turismoTypeDef = gql`
  enum Size {
    B
    M
    S
  }

  type Owner {
    id: ID!
    nit: Int!
    name: String!
    size: Size!
  }

  enum RatingEnum {
    ONE
    TWO
    THREE
    FOUR
    FIVE
  }

  type Hotel {
    owner: Int!
    type: String!
    address: String!
    qualification: RatingEnum!
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
    rating: RatingEnum!
    hotel: Int!
    tourist: Int!
  }
  input OwnerInput {
    nit: Int!
    name: String!
    size: Size!
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
    qualification: RatingEnum!
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
