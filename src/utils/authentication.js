const fetch = require('node-fetch');
const serverConfig = require('../server');
const { ApolloError } = require('apollo-server');

const authentication = async ({ req }) => {
  const token = req.headers.authorization || '';
  if (token == '') {
    return { userToken: null };
  } else {
    try {
      let requestOptions = {
        headers: {
          method: 'GET',
          'Content-Type': 'application/json',
          Authorization: 'Token ' + token,
        },
        redirect: 'follow',
      };
      let response = await fetch(
        `${serverConfig.django_url}rest_auth/user/`,
        requestOptions
      );
      console.log(response);
      if (response.status != 200) {
        console.log('Fallo', response);
        throw new ApolloError('SESIÓN INACTIVA', 401);
      }
      return { userToken: await response.json() };
    } catch (error) {
      console.log('Fallo', error);
      throw new ApolloError('ERROR DESCONOCIDO', 500);
    }
  }
};

module.exports = authentication;
