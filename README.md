# Trabalho de Lógica de programação

## Dados:

### **Nome:** Thiago Oliveira de Lima
### **Matrícula:** 2314290159
### **Curso:** Análise e desenvolvimento de sistemas

<br><br>
## Para executar a aplicação:
Deploy da aplicação no endereço: https://conversormedidas.netlify.app/

Se preferir: 
Na pasta raiz digite no terminal: ``npm install``, após a instalação das dependências ainda no terminal: ``npm start``. Após o servidor iniciar pode utilizar a aplicação através do arquivo index.html, que se encontra na raiz do projeto.


<br>
## Descrição:

### 1. Conter no mínimo uma estrutura condicional (IF/ELSE ou SWITCH)
**ocorrências:**
- [conversao.js](./back/src/controllers/conversao.js)
- [validacao.js](./back/src/middlewares/validacao.js)
- [script.js](./front/script.js)
<br>
### 2. Conter no mínimo uma estrutura de laço (WHILE ou DO/WHILE ou FOR)
**ocorrências:**
- [script.js](./front/script.js)
<br>
### 3. Complexidade (número de variáveis, utilização de operadores lógicos (&&, ||,!=, ...),  interações – entrada e saída e expressões (x > y ou num != 9999, entre outras)

Sobre a complexidade: Foram criadas validações para retornar erros personalizados no caso do usuário tentar uma solicitação sem escolher algum dos campos, e também caso o usuário entre com um valor inválido no campo de conversão. Por exemplo, um texto. Caso o usuário entre com um valor decimal, usando virgula no lugar do '.' o sistema faz a substituição para que nao seja necessário retornar.
Operadores lógicos tem vários espalhados por todo o código.

### 4. Originalidade, lógica, encadeamento do algoritmo e organização.
Optei por usar funções bem semânticas para que não fosse necessário fazer comentários.