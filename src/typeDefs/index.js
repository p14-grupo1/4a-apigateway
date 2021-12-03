const accountTypeDef = require('./account_type_def');
const authTypeDefs = require('./auth_type_def');
const transactionTypeDefs = require('./transaction_type_def');


const schemasArrays = [accountTypeDef, authTypeDefs, transactionTypeDefs];

module.exports = schemasArrays;