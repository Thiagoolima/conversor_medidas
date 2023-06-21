const data = require('../data/medidas')

const funcoes = {
    celsiusFahrenheit: (celsius) => {
        const fahrenheit = (celsius * 9 / 5) + 32;
        return fahrenheit;
    },
    fahrenheitCelsius: (fahrenheit) => {
        const celsius = (fahrenheit - 32) * 5 / 9;
        return celsius;
    },
    celsiusKelvin: (celsius) => {
        const kelvin = celsius + 273.15;
        return kelvin;
    },
    kelvinCelsius: (kelvin) => {
        const celsius = kelvin - 273.15;
        return celsius;
    },
    fahrenheitKelvin: (fahrenheit) => {
        const kelvin = (fahrenheit + 459.67) * 5 / 9;
        return kelvin;
    },
    kelvinFahrenheit: (kelvin) => {
        const fahrenheit = (kelvin * 9 / 5) - 459.67;
        return fahrenheit;
    }
};


function converter(req, res) {
    const { categoria, dadosUnd1, dadosUnd2, valor } = req.dados;
    try {
        let resultado;
        if (categoria === 'Temperatura') {
            resultado = (funcoes[dadosUnd1.nome.toLowerCase() + dadosUnd2.nome](parseFloat(valor)).toFixed(2));
        } else {
            resultado = ((valor * dadosUnd1.fator_de_conversao) / dadosUnd2.fator_de_conversao);
        }
        return res.status(200).json({
            categoria,
            origem: dadosUnd1.nome,
            origemSimbolo: dadosUnd1.simbolo,
            valorBase: valor,
            destino: dadosUnd2.nome,
            destinoSimbolo: dadosUnd2.simbolo,
            resultado
        });
    } catch (error) {
        console.log(error);
    }
}

module.exports = {
    converter
}