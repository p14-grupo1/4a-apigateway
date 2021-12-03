const { RESTDataSource } = require('apollo-datasource-rest');
const server = require('../server');
const serverConfig = require('../server');

class AuthAPI extends RESTDataSource{

    constructor(){
        super();
        this.baseURL = serverConfig.auth_api_url;
    }

    async authRequest(credentials){
        return await this.post('/rest-auth/login/', credentials);
    }

    async createUserRequest(user){
        return await this.post('/rest-auth/registration/', user);
    }
}

module.exports = AuthAPI;