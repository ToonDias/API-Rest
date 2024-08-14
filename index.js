const express = require("express");

const app = express();




app.listen(8081, (error) => {
    if(error == undefined){
        console.log("Servidor rodando! URL: http://localhost:8081");
    }else{
        console.log(error);
    }
});