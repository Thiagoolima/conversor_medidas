const dados = [
    {
        nome: "Comprimento",
        referencia: 1,
        opcoes: [
            {
                nome: 'Metro',
                simbolo: 'm',
                fator_de_conversao: 1
            },
            {
                nome: 'Quilômetro',
                simbolo: 'km',
                fator_de_conversao: 1000
            },
            {
                nome: 'Centímetro',
                simbolo: 'cm',
                fator_de_conversao: 0.01
            },
            {
                nome: 'Milímetro',
                simbolo: 'mm',
                fator_de_conversao: 0.001
            },
            {
                nome: 'Polegada',
                simbolo: 'in',
                fator_de_conversao: 0.0254
            },
            {
                nome: 'Pé',
                simbolo: 'ft',
                fator_de_conversao: 0.3048
            },
            {
                nome: 'Milha',
                simbolo: 'mi',
                fator_de_conversao: 1609.34
            }
        ]
    },
    {
        nome: "Massa",
        referencia: 1,
        opcoes: [
            {
                nome: 'Quilograma',
                simbolo: 'kg',
                fator_de_conversao: 1
            },
            {
                nome: 'Grama',
                simbolo: 'g',
                fator_de_conversao: 0.001
            },
            {
                nome: 'Tonelada',
                simbolo: 't',
                fator_de_conversao: 1000
            },
            {
                nome: 'Miligrama',
                simbolo: 'mg',
                fator_de_conversao: 0.000001
            },
            {
                nome: 'Micrograma',
                simbolo: 'µg',
                fator_de_conversao: 0.000000001
            }
        ]
    },
    {
        nome: "Temperatura",
        opcoes: [
            {
                nome: 'Kelvin',
                simbolo: '°K'
            },
            {
                nome: 'Celsius',
                simbolo: '°C'
            },
            {
                nome: 'Fahrenheit',
                simbolo: '°F'
            }
        ]
    },
    {
        nome: "Armazenamento",
        referencia: 2,
        opcoes: [
            {
                nome: 'Bit',
                simbolo: 'bit',
                fator_de_conversao: 0.125
            },
            {
                nome: 'Byte',
                simbolo: 'B',
                fator_de_conversao: 1
            },
            {
                nome: 'Kilobyte',
                simbolo: 'KB',
                fator_de_conversao: 1024
            },
            {
                nome: 'Megabyte',
                simbolo: 'MB',
                fator_de_conversao: Math.pow(1024, 2)
            },
            {
                nome: 'Gigabyte',
                simbolo: 'GB',
                fator_de_conversao: Math.pow(1024, 3)
            },
            {
                nome: 'Terabyte',
                simbolo: 'TB',
                fator_de_conversao: Math.pow(1024, 4)
            },
            {
                nome: 'Petabyte',
                simbolo: 'PB',
                fator_de_conversao: Math.pow(1024, 5)
            }
        ]
    },
    {
        nome: "Energia Mecanica",
        referencia: 1,
        opcoes: [
            {
                nome: 'Joule',
                simbolo: 'J',
                fator_de_conversao: 1
            },
            {
                nome: 'Quilojoule',
                simbolo: 'kJ',
                fator_de_conversao: 1000
            },
            {
                nome: 'Megajoule',
                simbolo: 'MJ',
                fator_de_conversao: 1000000
            },
            {
                nome: 'Gigajoule',
                simbolo: 'GJ',
                fator_de_conversao: 1000000000
            },
            {
                nome: 'Caloria',
                simbolo: 'cal',
                fator_de_conversao: 4.184
            },
            {
                nome: 'Kilocaloria',
                simbolo: 'kcal',
                fator_de_conversao: 4184
            }
        ]
    },
    {
        nome: "Frequencia",
        referencia: 1,
        opcoes: [
            {
                nome: 'Hertz',
                simbolo: 'Hz',
                fator_de_conversao: 1
            },
            {
                nome: 'Kilohertz',
                simbolo: 'kHz',
                fator_de_conversao: 1000
            },
            {
                nome: 'Megahertz',
                simbolo: 'MHz',
                fator_de_conversao: 1000000
            },
            {
                nome: 'Gigahertz',
                simbolo: 'GHz',
                fator_de_conversao: 1000000000
            }
        ]
    },
    {
        nome: "Pressao",
        referencia: 1,
        opcoes: [
            {
                nome: 'Pascal',
                simbolo: 'Pa',
                fator_de_conversao: 1
            },
            {
                nome: 'Quilopascal',
                simbolo: 'kPa',
                fator_de_conversao: 1000
            },
            {
                nome: 'Megapascal',
                simbolo: 'MPa',
                fator_de_conversao: 1000000
            },
            {
                nome: 'Gigapascal',
                simbolo: 'GPa',
                fator_de_conversao: 1000000000
            }
        ]
    }
];

if (typeof module !== 'undefined') {
    module.exports = dados;
}
