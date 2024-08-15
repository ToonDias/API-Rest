const express = require("express");
const app = express();
const bodyParser = require("body-parser");


const Connection = require("./database/database");
const filmesController = require("./filmes/filmesController");
const Filme = require("./filmes/Filme");

// definindo o EJS
app.set('view engine', 'ejs');

// configurando body-parser
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// definindo public e static
app.use(express.static('public'));

// conexão com o banco
Connection.authenticate()
    .then( () => {
        console.log("Conectado ao banco de dados!!");
    })
    .catch( (error) => {
        console.log("Conexão com o banco falhou! Erro: " + error);
    });

// usando as rotas de filmesController
app.use("/", filmesController);


app.listen(8081, (error) => {
    if(error == undefined){
        console.log("Servidor rodando! URL: http://localhost:8081");
    }else{
        console.log(error);
    }
});