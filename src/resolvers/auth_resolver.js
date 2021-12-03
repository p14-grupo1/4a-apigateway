const usersResolvers = {
    Mutation: {
        logIn: async (_, { credentials }, { dataSources }) => {
            return await dataSources.authAPI.authRequest(credentials);
        },
        signUp: async (_, { signupData }, { dataSources }) => {
            const accountData = {
                username: signupData.username,
                balance: signupData.balance,
                lastChange: (new Date()).toISOString()
            }
            await dataSources.accountAPI.createAccountRequest(accountData);
            const userData = {
                username: signupData.username,
                password1: signupData.password1,
                password2: signupData.password2
            }
           return await dataSources.authAPI.createUserRequest(userData);
        }
    }
}

module.exports = usersResolvers;