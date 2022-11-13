const express = require('express');
const app = express();
app.get("/usuario", (request, response) =>{
    const usuario = {nombre: "Raydelto", apellido: "Hernandez"};
    response.json(usuario);
});

app.listen(8080)