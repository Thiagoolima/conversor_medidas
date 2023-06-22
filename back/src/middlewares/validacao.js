
const validarInput = (req, res, next) => {
    const { categoria, valor } = req.query
    try {
        if (!categoria) {
            throw new Error('Por favor selecione uma categoria!');
        }
        if (!isNaN(parseFloat(valor))) {
            next();
        } else {
            throw new Error('O campo valor não pode ficar em branco e o valor informado deve ser um número!');
        }
    } catch (error) {
        return res.status(400).json({ message: error.message });
    }
};

module.exports = {
    validarInput
}