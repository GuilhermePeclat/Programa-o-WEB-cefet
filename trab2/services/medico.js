//O Service é o cérebro da aplicação. 
//É nele que ficam as regras de negócio e validações.

const repository = require('../repositories/medico');

const cadastrarmedico = (dadosmedico) => {
    if(!dadosmedico.nome || !dadosmedico.especializacao) {
        throw new Error("Nome e especialização obrigatórios!!")
    }
    const medicovalidado = repository.cadastrarmedico(dadosmedico);
    return medicovalidado;
};

module.exports = {
    cadastrarmedico
};