 let medicos = [];

    const getMedicos = () => medicos;
    const setMedicos = (novosMedicos) => {
        medicos = novosMedicos;
    };

    module.exports = {
        getMedicos,
        setMedicos
    };