//O papel do Repository é puramente lidar com o armazenamento. 
// Ele não faz validação de regras de negócio (isso é papel do Service). 
// Ele apenas recebe os dados prontos e salva.

const db = require('../db');

let idmedico = 1;

const cadastrarmedico = (dadosmedico) => {
    const medicos = db.getMedicos();
    const novomedico = {
        id: idmedico++,
        ...dadosmedico
    };
    medicos.push(novomedico);
    db.setMedicos(medicos);
    return novomedico;
};

module.exports = {cadastrarmedico}
