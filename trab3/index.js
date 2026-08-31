const express = require("express");
const app = express();
app.use(express.json());

app.post("/soma", (req, res) => {
    const valores = req.body.valores;
    const resultado = valores.reduce((soma, numero) => soma + numero, 0);
    res.json({ resultado: resultado });
});

app.post("/media", (req, res) => {
    const valores = req.body.valores;
    const soma = valores.reduce((soma, numero) => soma + numero, 0);
    const qtd_elementos = valores.length;
    const resultado = soma / qtd_elementos;
    res.json({resultado: resultado});
});

app.post("/minmax", (req, res) => {
    const valores = req.body.valores;
    const maior = Math.max(...valores);
    const menor = Math.min(...valores);
    res.json({maior: maior, menor: menor});
});

app.post("/bhaskara", (req, res) => {
    const a = req.body.a;
    const b = req.body.b;
    const c = req.body.c;
    const delta = b * b - 4 * a * c;
    const raiz_delta = Math.sqrt(delta);
    const raiz1 = (- b + raiz_delta) / (2 * a);
    const raiz2 = (- b - raiz_delta) / (2 * a);
    res.json({x1: raiz1, x2: raiz2});
});

app.post("/fibonacci", (req, res) => {
    const valor = req.body.valor;
    let anterior = 0;
    let atual = 1;
    let proximo = 0;
    for(let i = 0; i < valor; i++) {
        proximo = anterior + atual;
        anterior = atual;
        atual = proximo;}
    res.json({resultado: proximo})
    })

    app.post("/primo", (req, res) => {
    const numero = req.body.numero;
    let primo = true;
    if (numero < 2) {primo = false;}
    for (let i = 2; i < numero; i++) {
        if (numero % i === 0) {
            primo = false; break;}}
    res.json({primo: primo});
});

    app.post("/fatorial", (req, res) => {
    const numero = req.body.numero;
    let resultado = 1;
    for (let i = 1; i <= numero; i++) {
        resultado = resultado * i;}
    res.json({resultado: resultado});
});

    app.post("/inverter", (req, res) => {
    const texto = req.body.texto;
    const resultado = texto.split("").reverse().join("");
    res.json({resultado: resultado});
});

    app.post("/palavras", (req, res) => {
    const texto = req.body.texto;
    const palavras = texto.split(" ");
    const quantidade = palavras.length;
    res.json({quantidade: quantidade});
});

    app.post("/palindromo", (req, res) => {
    const texto = req.body.texto;
    const invertido = texto.split("").reverse().join("");
    const palindromo = texto === invertido;
    res.json({palindromo: palindromo});
});

app.listen(3000);
