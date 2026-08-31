//Controller é o intermediário entre a Web (HTTP) e a lógica (Service).

const medicoservice = require('../services/medico');

const criar = (req, res) => {
    try {
        const dadosmedico = req.body;
        const medicocriado = medicoservice.cadastrarmedico(dadosmedico);
        res.status(201).json(medicocriado);
    } catch (erro) {
        res.status(400).json({mensagem: erro.message});
    }
};

module.exports = {
    criar
};