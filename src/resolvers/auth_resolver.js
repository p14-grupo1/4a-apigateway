const usersResolvers = {
  Mutation: {
    logIn: async (_, { credentials }, { dataSources }) => {
      return await dataSources.authAPI.authRequest(credentials);
    },
    signUp: async (_, { signupData }, { dataSources }) => {
      const userData = {
        username: signupData.username,
        password1: signupData.password1,
        password2: signupData.password2,
        email: signupData.email,
      };
      return await dataSources.authAPI.createUserRequest(userData);
    },
  },
};

module.exports = usersResolvers;
