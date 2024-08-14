const Sequelize = require("sequelize");
const {user, password} = require("./dbcredentials");

const Connection = new Sequelize("base_rest", user, password, {
    host: 'localhost',
    dialect: 'mysql2'

});

module.exports = Connection;