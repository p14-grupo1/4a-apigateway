const fetch = require('node-fetch');
const serverConfig = require('../server');
const { ApolloError } = require('apollo-server');


const authentication = async ({ req }) => {
    const token = req.headers.authorization || '';
    if(token == ''){
        return { usernameToken: null }
    }else{
        console.log("entra")
        try {
            let requestOptions = {
                method: 'GET',
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": "token " + token
                },
                redirect: 'follow'
            }
            let response = await fetch(`${serverConfig.auth_api_url}soporte/user`, requestOptions)
            if(response.status != 200){
                console.log("Fallo", response)
                throw new ApolloError("SESIÓN INACTIVA", 401)
            }
            return { usernameToken: (await response.json()).username}
        }catch (error){
            console.log("Fallo", error)
            throw new ApolloError("ERROR DESCONOCIDO", 500)
        }     
    }
}

module.exports = authentication;