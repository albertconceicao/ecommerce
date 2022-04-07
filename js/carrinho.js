
function formataValor  (valor) {
    return valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
} 


let produtosLocalStorage = JSON.parse(localStorage.getItem("produtos"));
console.log(produtosLocalStorage);

let tabelaCarrinho = document.getElementById('produtos-carrinho');

let arrayTotalCompras = [];





produtosLocalStorage.forEach(produto => {
    function adicionaQuantidade () {
        return document.querySelector(`.quantidade-${codigoProduto}`).valueAsNumber += 1;
    }
    let tituloProduto = produto.produto;
    let codigoProduto = produto.codigo;
    let valorProduto = produto.valor;
    let quantidade = produto.quantidade;
    let totalProduto = produto.quantidade * valorProduto;
    
    let indexador = 1;
    
   
    const corpoTabelaCarrinho = `
        <tbody>
        <tr class="produto-carrinho" id="${codigoProduto}">
            <td class="produto">
                ${tituloProduto}
            </td>
            
            <td class="produto-valor">
                ${valorProduto}
            </td>
             <td class="produto-quantidade">
                <button 
                type="button" class="increment-decrement" onclick="somaQuantidade(-1, '${codigoProduto}')"
                value="-">-
                </button>
                <input min="0" value="${quantidade}"  type="number" name="" class="quantidade-${codigoProduto}" placeholder="Qtd" disabled>
                <button 
                type="button" class="increment-decrement" onclick="somaQuantidade(1, '${codigoProduto}')"
                value="+">+
                </button>
            </td> 
            <td class="produto-valor-total-${codigoProduto}">
                ${formataValor(totalProduto)}
                <img src="./img/window-close-solid.svg" data-toggle="modal" data-target="#modal-remove-item" class="remove-item" alt="Remover produto" onclick="removeItem('${codigoProduto}')">
            </td>
        </tr>
    </tbody>
    `;
    
    tabelaCarrinho.innerHTML += corpoTabelaCarrinho;
    arrayTotalCompras.push(totalProduto);
    console.log(totalProduto);
    
     
    
    
    
});

let totalCompra = document.querySelector('.total-valor');
let subtotalCompra = document.querySelector('.subtotal-valor');
let totalBoleto = document.querySelector('.total-valor-boleto');
let totalPix = document.querySelector('.total-valor-pix');

function atualizaTotais () {
    
    let totalPedido = 0;
    produtosLocalStorage.forEach(item => {
        totalPedido += item.quantidade*item.valor
    })
    subtotalCompra.innerHTML = formataValor(totalPedido);
    totalCompra.innerHTML = formataValor(totalPedido);
    totalBoleto.innerHTML = formataValor(totalPedido);
    totalPix.innerHTML = formataValor(totalPedido);
}
atualizaTotais();
function somaQuantidade(quantidade, codigoProduto) {

    document.querySelector(`.quantidade-${codigoProduto}`).valueAsNumber += quantidade;
    
    let quantidadeProduto = produtosLocalStorage.find(item=> item.codigo == codigoProduto);
    if(quantidadeProduto.quantidade + quantidade == 0){
        removeItem(codigoProduto);
        console.log('Removeu');
    }else {
        quantidadeProduto.quantidade += quantidade;
        localStorage.setItem("produtos", JSON.stringify(produtosLocalStorage));
        
        let calculoTotalProduto = document.querySelector(`.produto-valor-total-${codigoProduto}`);
    
        calculoTotalProduto.innerHTML = `${formataValor(quantidadeProduto.quantidade*quantidadeProduto.valor)} <img src="./img/window-close-solid.svg" data-toggle="modal" data-target="#modal-remove-item" class="remove-item" alt="Remover produto" onclick="removeItem('${codigoProduto}')"> `;
    }
    atualizaTotais();


}

function removeItem(codigoProduto) {

    
    let quantidadeProduto = produtosLocalStorage.find(item=> item.codigo === codigoProduto);
    let indiceProduto = produtosLocalStorage.indexOf(quantidadeProduto);
    produtosLocalStorage.splice(indiceProduto, 1);
    localStorage.setItem("produtos", JSON.stringify(produtosLocalStorage));

    document.getElementById(`${codigoProduto}`).remove();
    atualizaTotais();
}



//Método para pegar os produtos do carrinho e adicionar a quantidade






const limpaCarrinho = () => localStorage.removeItem("produtos");
const adicionaPedido = (pedido) => {
    localStorage.setItem("pedidos", JSON.stringify(pedido));
    limpaCarrinho();
};

// Datas disponíveis

let Hoje = new Date();
Hoje.setDate(Hoje.getDate());
//string apenas de data em um formato determinado pelo browser
let Today = Hoje.toDateString();
// string apenas de data no formato localizado do seu sistema
let Today2 = Hoje.toLocaleDateString();

let dataTracinho = Today2.replace(new RegExp("/","g"), "-"); 

console.log (Today);
console.log (Today2);
console.log (dataTracinho);


const adicionaFormaPagamento = (formaPagamento) => {
    let nomes = [];
    
    produtosLocalStorage.forEach(produto => {
        nomes.push(produto.produto)
    });
    
    let somaTotalCompras = document.querySelector('.total-valor').innerText;
    let pedidosCarrinho = JSON.parse(localStorage.getItem("pedidos")) || [];

  

    pedidosCarrinho.push({
        numero: Math.random() * (10-0) + 1,
        total: somaTotalCompras,
        formaPagamento: formaPagamento,
        nomeProdutos: nomes,
        data: Today2,
        ...produtosLocalStorage
    })

    adicionaPedido(pedidosCarrinho);
    console.log(pedidosCarrinho)
    // window.location.href="pedidos.html"

}