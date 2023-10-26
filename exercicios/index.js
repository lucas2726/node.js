
// Importa o módulo Express.js
const express = require('express');

// Cria uma instância do aplicativo Express
const app = express();

app.get("/", function(req, res) {
    
})

// Inicia o servidor Express na porta especificada
app.listen(4000, function(erro) {
    if(erro) {
        console.log('Ocorreu um erro!')
    } else {
        console.log('Servidor iniciando com sucesso!')
    }
  
})