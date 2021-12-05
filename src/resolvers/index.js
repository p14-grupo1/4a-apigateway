const turismoResolver = require('./turismo_resolver');
const authResolver = require('./auth_resolver');

const lodash = require('lodash');

const resolvers = lodash.merge(authResolver, turismoResolver);

module.exports = resolvers;
