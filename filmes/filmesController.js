const express = require("express");
const router = express.Router();

const Filme = require("./Filme");


// create
router.get("/admin/filmes/novo", (req, res) => {
    res.render("admin/filmes/novo");
});

router.post("/admin/filmes/safe", (req, res) => {
    var {titulo, genero, estudio, diretor} = req.body;
    Filme.create({titulo, genero, estudio, diretor}).then(() => {
        res.redirect("/admin/filmes")
    });
});

// read
router.get("/admin/filmes", (req, res) => {
    res.render("admin/filmes/listar");
});

// update
router.get("/admin/filmes/editar/:id", (req, res) => {
    var id = req.params.id;
    Filme.findByPk(id).then( filme => {
        res.render("admin/filmes/atualizar", {filme});
    });
});

router.post("/admin/filmes/update", (req, res) => {
    var {id, titulo, genero, estudio, diretor} = req.body;
    Filme.update({titulo, genero, estudio, diretor},{where: {id}}).then(() => {
        res.redirect("/admin/filmes")
    });
});

// delete
router.post("/admin/delete", (req, res) => {
    var id = req.body.id;
    Filme.destroy({where: {id}}).then( ()=> {
        res.redirect("/admin/filmes")
    });
});

module.exports = router;