const turismoResolver = {
  Query: {
    hotels: async (_, __, { dataSources }) => {
      return await dataSources.turismoAPI.getHotels();
    },
    tourists: async (_, __, { dataSources }) => {
      return await dataSources.turismoAPI.getTourists();
    },
    owners: async (_, __, { dataSources }) => {
      return await dataSources.turismoAPI.getOwners();
    },
    ratings: async (_, __, { dataSources }) => {
      return await dataSources.turismoAPI.getRatings();
    },
  },
  Mutation: {
    addOwner: async (_, { owner }, { dataSources }) => {
      return await dataSources.turismoAPI.createOwner(owner);
    },
    addTourist: async (
      _,
      { tourist },
      { dataSources, userToken }
    ) => {
      if (userToken !== tourist.user) {
        return null;
      }
      return await dataSources.turismoAPI.createTourist(tourist);
    },
  },
};

module.exports = turismoResolver;
