const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send('Rota principal desse servidor')
});

app.get('/home', (req, res) => {
    res.send('Olá... Bem-vindo ao meu primeiro servidor com express')
});

app.get('/teste', (req, res) => {
    res.send('Aqui está a área de testes do servidor!')
});

app.get('/info', (req, res) => {
    res.send('Muito prazer, meu nome é Luis Renato Haua, tenho 21 anos e estudo desenvolvimento de software com o intuito de me tornar um programador backend de sucesso')
});

app.get('/usuarios', (req, res) => {
    const lista = [
        {id: 11, nome:'joao', idade: 23},
        {id: 2, nome:'maria', idade: 18},
        {id: 4, nome:'ana', idade: 30},
        {id: 1, nome:'rodrigo', idade: 17},
        {id: 123, nome:'rodrigo', idade: 17},
    ]
    res.send(lista)
})

app.listen(3000, () =>{
    console.log('Servidor iniciado na porta 3000')
});