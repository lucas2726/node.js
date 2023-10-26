
// Importa o módulo Express.js
const express = require('express');

// Cria uma instância do aplicativo Express
const app = express();

app.get("/", function(req, res) {
    res.send("<h1>Bem vindo</h1>") //Para devolver uma resposta
})

app.get("/blog", function(req, res) {
    res.send("Bem vindo ao blog do lucas") //Para devolver uma resposta
})

app.get("/canal/youtube", function(req, res) {
    res.send("Bem vindo ao canal do youtube") //Para devolver uma resposta
})

// Inicia o servidor Express na porta especificada
app.listen(4000, function(erro) {
    if(erro) {
        console.log('Ocorreu um erro!')
    } else {
        console.log('Servidor iniciando com sucesso!')
    }
  
})