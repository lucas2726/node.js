
// Importa o módulo Express.js
const express = require('express');

// Cria uma instância do aplicativo Express
const app = express();

app.get("/", function(req, res) {
    res.send("<h1>Bem vindo</h1>") //Para devolver uma resposta
})

app.get("/canal/youtube", function(req, res) {
    const canal = req.query["canal"]

    if (canal) {
        res.send(canal) //Para devolver uma resposta 
    } else {
        res.send("Nenhum canal fornecido")
    }  
})

//Parametro opicional
app.get("/blog/:artigo?", function(req, res) {
    const artigo = req.params.artigo
    if (artigo) {
        res.send("<h2>Artigo: " + artigo + " </he>") //Para devolver uma resposta
    } else {
        res.send("Bem vindo ao blog do lucas") //Para devolver uma resposta
    }
})

//Parametro obrigatorio
app.get("/ola/:nome/:empresa", function(req, res) {
    //REQ - DADOS ENVIADOS PELO USUÁRIO
    //RES - DADOS QUE VAI SER ENVIADO PARA O USUÁRIO
    const nome = req.params.nome
    const empresa = req.params.empresa
    res.send("<h1> Olá, " + nome + " da " + empresa + "</h1>") //Para devolver uma resposta. 
})// "params" serve para encontrar o parametro

// Inicia o servidor Express na porta especificada
app.listen(4000, function(erro) {
    if(erro) {
        console.log('Ocorreu um erro!')
    } else {
        console.log('Servidor iniciando com sucesso!')
    }
  
})