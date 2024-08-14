const Sequelize = require("sequelize");
const Connection = require("../database/database");

const Filme = Connection.define("filmes", {
    titulo: {
        type: Sequelize.STRING,
        allowerNull: false
    },
    genero: {
        type: Sequelize.STRING,
        allowerNull: false
    },
    estudio: {
        type: Sequelize.STRING,
        allowerNull: false
    },
    diretor: {
        type: Sequelize.STRING,
        allowerNull: false
    },
});

module.exports = Filme;