const data = require('../data/medidas');

function obterDados(req, res, next) {
    try {
        let { categoria, unidade1, unidade2, valor } = req.query
        const dadosCat = data.find((obj) => obj.nome === categoria).opcoes;
        const dadosUnd1 = dadosCat.find((obj) => obj.nome === unidade1);
        const dadosUnd2 = dadosCat.find((obj) => obj.nome === unidade2);
        req.dados = {
            categoria,
            dadosUnd1,
            dadosUnd2,
            valor
        }
        next();
    } catch (error) {
        console.log(error.message)
    }
}
module.exports = {
    obterDados
}