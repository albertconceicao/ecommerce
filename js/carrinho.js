
function formataValor  (valor) {
    return valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
} 


let produtosLocalStorage = JSON.parse(localStorage.getItem("produtos"));
console.log(produtosLocalStorage);
produtosLocalStorage.forEach(produto => {
    // return console.log(Object.values(produtosLocalStorage))
})

let tabelaCarrinho = document.getElementById('produtos-carrinho');

let arrayTotalCompras = [];


let totalCompra = document.querySelector('.total-valor');
let subtotalCompra = document.querySelector('.subtotal-valor');
let totalBoleto = document.querySelector('.total-valor-boleto');
let totalPix = document.querySelector('.total-valor-pix');


produtosLocalStorage.forEach(produto => {
    function adicionaQuantidade () {
        return document.querySelector(`.quantidade-${codigoProduto}`).valueAsNumber += 1;
    }
    let tituloProduto = produto.produto;
    let codigoProduto = produto.codigo;
    let valorProduto = produto.valor;
    let quantidadeProduto = 1;
    let totalProduto = produto.quantidade * valorProduto;
    
    let indexador = 1;
    
   
    const corpoTabelaCarrinho = `
        <tbody>
        <tr class="produto-carrinho">
            <td class="produto">
                ${tituloProduto}
            </td>
            
            <td class="produto-valor">
                ${valorProduto}
            </td>
             <td class="produto-quantidade">
                <button 
                type="button" class="increment-decrement" onclick="somaQuantidade(-1)"
                value="-">-
                </button>
                <input min="0" value="1" valueAsNumber="1" type="number" name="" class="quantidade-${codigoProduto}" placeholder="Qtd" disabled>
                <button 
                type="button" class="increment-decrement" onclick="somaQuantidade(1)"
                value="+">+
                </button>
            </td> 
            <td class="produto-valor-total">
                ${formataValor(totalProduto)}
            </td>
        </tr>
    </tbody>
    `;
    function somaQuantidade(quantidade) {

        document.querySelector(`quantidade-${codigoProduto}`).valueAsNumber += quantidade;
        
        let quantidadeStorage = JSON.parse(localStorage.getItem("produtos"));
        

        quantidadeStorage.forEach(produto => {
            localStorage.setItem("produtos", produto.quantidade += quantidade)
        })

    }
    tabelaCarrinho.innerHTML += corpoTabelaCarrinho;
    arrayTotalCompras.push(totalProduto);
    
     
    
    
    
});
// let quantidadeProdutoInput = Number(document.querySelector('.quantidade-010109').value);
// console.log(quantidadeProdutoInput);



//Método para pegar os produtos do carrinho e adicionar a quantidade




const aumentaQuantidade = (quantidade) => {
    console.log(valor);
    return quantidade = quantidade + 1;
};

    const diminuiQuantidade = () => {
    console.log('Diminuiu');
    return quantidadeProdutoInput.innerHTML = quantidade--;
    };

const somaTotalCompras = arrayTotalCompras.reduce((acc, valorAtual) => {
    return acc + valorAtual;
}, 0);


subtotalCompra.innerHTML = formataValor(somaTotalCompras);
totalCompra.innerHTML = formataValor(somaTotalCompras);
totalBoleto.innerHTML = formataValor(somaTotalCompras);
totalPix.innerHTML = formataValor(somaTotalCompras);

let produtosCarrinho = JSON.parse(localStorage.getItem("produtos"));

const limpaCarrinho = () => localStorage.removeItem("produtos");
const adicionaPedido = (pedido) => {
    localStorage.setItem("pedidos", JSON.stringify(pedido));
    limpaCarrinho();
};


const adicionaFormaPagamento = (formaPagamento) => {
    // const pedidoCarrinho = produtosCarrinho.map(produto => {
    //     return {...produto, totalPedido: somaTotalCompras ,formaPagamento: formaPagamento};
    // })
    let pedidosCarrinho = JSON.parse(localStorage.getItem("pedidos")) || [];

    pedidosCarrinho.push({
        numeroPedido: Math.random(),
        ...produtosCarrinho,
        totalPedido: somaTotalCompras,
        formaPagamento: formaPagamento
    })

    adicionaPedido(pedidosCarrinho);
    console.log(pedidosCarrinho)

}