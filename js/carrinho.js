


function formataValor  (valor) {
    return valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
} 



let produtosLocalStorage = JSON.parse(localStorage.getItem("produtos"));
produtosLocalStorage.forEach(produto => {
    // return console.log(Object.values(produtosLocalStorage))
})
console.log(JSON.parse(localStorage.getItem("produtos"))[0].quantidade);

let tabelaCarrinho = document.getElementById('produtos-carrinho');

let arrayTotalCompras = [];


let totalCompra = document.querySelector('.total-valor');
let subtotalCompra = document.querySelector('.subtotal-valor');
let totalBoleto = document.querySelector('.total-valor-boleto');
let totalPix = document.querySelector('.total-valor-pix');


produtosLocalStorage.forEach(produto => {

    let tituloProduto = produto.produto;
    let valorProduto = produto.valor;
    let quantidadeProduto = 1;
    let totalProduto = valorProduto * quantidadeProduto;

    

    const corpoTabelaCarrinho = `
        <tbody>
        <tr class="produto-carrinho">
            <td class="produto">
                ${tituloProduto}
            </td>
            
            <td class="produto-valor">
                ${valorProduto}
            </td>
             <td class="quantidade">
                <button 
                type="button" class="increment-decrement" onclick="diminuiQuantidade()"
                value="-">-
                </button>
                <input value="" max="5" type="number" name="" class="quantidade" placeholder="Qtd">
                <button 
                type="button" class="increment-decrement" onclick="aumentaQuantidade()"
                value="+">+
                </button>
            </td> 
            <td class="produto-valor-total">
                ${formataValor(totalProduto)}
            </td>
        </tr>
    </tbody>
    `;
    
    tabelaCarrinho.innerHTML += corpoTabelaCarrinho;
    arrayTotalCompras.push(totalProduto);
    let quantidadeProdutoInput = document.getElementById('quantidade');

    const aumentaQuantidade = () => {
    console.log(quantidade);
    return quantidadeProdutoInput.value.innerHTML = quantidade++;
    };

    const diminuiQuantidade = () => {
    console.log('Diminuiu');
    return quantidadeProdutoInput.innerHTML = quantidade--;
    };
});



const somaTotalCompras = arrayTotalCompras.reduce((acc, valorAtual) => {
    return acc + valorAtual;
}, 0);


subtotalCompra.innerHTML = formataValor(somaTotalCompras);
totalCompra.innerHTML = formataValor(somaTotalCompras);
totalBoleto.innerHTML = formataValor(somaTotalCompras);
totalPix.innerHTML = formataValor(somaTotalCompras);


