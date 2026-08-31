const express = require('express');
const medicocontroller = require('./controllers/medico');
const app = express();
app.use(express.json());

app.post('/medicos', medicocontroller.criar);

app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
}); 