const Sequelize = require("sequelize");
const {user, password} = require("./dbcredentials");

const Connection = new Sequelize("api_rest", user, password, {
    host: 'localhost',
    dialect: 'mysql2'

});

module.exports = Connection;