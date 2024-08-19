const express = require("express");
const router = express.Router();
const Filme = require("../filmes/Filme");


router.get("/filmes", (req, res) => {
    Filme.findAll().then( filmes => {
        res.send("todos os filmes");
    });
});

router.post("/filme", (req, res) => {
    var = {titulo, genero, estudio, diretor} = req.body;
    Filme.create({titulo, genero, estudio, diretor}).then(() => {
        res.send("Filme criado");
    });
});

router.delete("/filme/:id", (req, res) => {
    var id = req.params.id;
    Filme.destroy({where: {id}}).then( () => {
        res.send("Filme deletado");
    });
});


module.exports = router;
