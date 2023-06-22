
const categoria = document.getElementById('categoria');
const unidade1 = document.getElementById('unidade1');
const unidade2 = document.getElementById('unidade2');
const valor_str = document.getElementById('valor');
const divResult = document.getElementById('resultado');
const tabelaHistorico = document.getElementById("historicoTabela");

(function preencherCategoria() {
    for (let i = 0; i < dados.length; i++) {
        const option = document.createElement("option");
        option.text = dados[i].nome;
        categoria.appendChild(option);
    }
})();

(function preencherUnidades() {
    categoria.addEventListener("change", () => {
        const catSelecionada = dados.find((item) => {
            return item.nome == categoria.value;
        });
        unidade1.innerHTML = "";
        unidade2.innerHTML = "";
        for (let i = 0; i < catSelecionada.opcoes.length; i++) {
            const option1 = document.createElement("option");
            const option2 = document.createElement("option");
            option1.text = catSelecionada.opcoes[i].nome;
            option2.text = catSelecionada.opcoes[i].nome;
            unidade1.appendChild(option1);
            unidade2.appendChild(option2);
        }
    })
})();

async function axiosRequest() {
    try {
        const valor = parseFloat(valor_str.value.replace(',', '.'));
        const url = Qs.stringify({
            categoria: categoria.value,
            unidade1: unidade1.value,
            unidade2: unidade2.value,
            valor: valor
        });
        const request = await axios.get(`http://localhost:3000/medidas?${url}`);
        exibirResposta(request.data);
    } catch (error) {
        if (error.response && error.response.data && error.response.data.message) {
            alert(error.response.data.message);
        } else {
            alert("Ocorreu um erro inesperado. Por favor, tente novamente mais tarde.")
        }
    }
};

function exibirResposta(resposta) {
    const { origemSimbolo, valorBase, destinoSimbolo, resultado } = resposta;
    let resultadoFormatado;
    if (Math.abs(resultado) < 0.001) {
        resultadoFormatado = resultado.toExponential(2);
    } else {
        resultadoFormatado = resultado.toLocaleString('pt-BR');
    }
    divResult.innerHTML = `${valorBase} ${origemSimbolo} = ${resultadoFormatado} ${destinoSimbolo}`;
    criarTabela(resposta, resultadoFormatado)
};

function criarTabela(resposta, resultadoFormatado) {
    const { categoria, origem, origemSimbolo, valorBase, destino, destinoSimbolo } = resposta;
    const novaLinha = tabelaHistorico.insertRow();
    const colunaOrdem = novaLinha.insertCell(0);
    const colunaCategoria = novaLinha.insertCell(1);
    const colunaUnidade1 = novaLinha.insertCell(2);
    const colunaValor = novaLinha.insertCell(3);
    const colunaUnidade2 = novaLinha.insertCell(4);
    const colunaResultado = novaLinha.insertCell(5);

    colunaOrdem.textContent = tabelaHistorico.rows.length - 1;
    colunaCategoria.textContent = categoria;
    colunaUnidade1.textContent = `${origem} (${origemSimbolo})`;
    colunaValor.textContent = valorBase;
    colunaUnidade2.textContent = `${destino} (${destinoSimbolo})`;
    colunaResultado.textContent = resultadoFormatado;
};