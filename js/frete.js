// $.get("../node_modules/correios-brasil/dist/index.d.ts", function(data) {
//     // let dataString = JSON.stringify(data);
//     // const dataJson =  JSON.parse(dataString);
//     console.log(data);
// })
console.log('Entrou ' + new Date());



const {consultarCep, calcularPrecoPrazo, rastrearEncomendas} = require('correios-brasil');



let entradaCep = document.querySelector('#entrada-cep').value;
let logradouro = document.querySelector('.logradouro');
let bairro = document.querySelector('.bairro');
let localidade = document.querySelector('.localidade');
let estado = document.querySelector('.uf');
let preco = document.querySelector('.preco');
let prazo = document.querySelector('.prazo');

// Consultando CEP


consultarCep(entradaCep).then((response) => {
    console.log('Consultou cep');
    logradouro.innerHTML = response.logradouro;
    bairro.innerHTML = response.bairro;
    localidade.innerHTML = response.localidade;
    estado.innerHTML = response.uf;
})
// Como calcular preços e prazos

let args = {
    sCepOrigem: '42793005',
    sCepDestino: '29170-037',
    nVlPeso: '1',
    nCdFormato: '1',
    nVlComprimento: '20',
    nVlAltura: '20',
    nVlLargura: '20',
    nCdServico: ['040414', '04510'],
    nVlDiametro: '0',
};

calcularPrecoPrazo(args).then((response) => {
    console.log('Calculou preço e prazo');
    preco.innerHTML = response.Valor;
    prazo.innerHTML = response.PrazoEntrega;
})

// Como rastrear uma encomenda

let codRastreio = ['QH558316807BR', 'QH436041665BR'];

rastrearEncomendas(codRastreio).then((response) => {
    console.log(response);
})

module.exports = [
    consultarCep,
    calcularPrecoPrazo,
    rastrearEncomendas
]