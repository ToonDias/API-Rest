const express = require("express");
const router = express.Router();

const Filme = require("./Filme");

router.get("/filmes", (req, res) => {
    res.send("Teste de envio");
});

module.exports = router;