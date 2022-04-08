const formataValor = (valor) => valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });


let pedidos = JSON.parse(localStorage.getItem("pedidos")) || [];

let queryString = window.location.search.slice(1).split('&');
let parametros = {};

queryString.forEach(item => {
    let item2 = item.split('=');
    parametros[item2[0]] = item2[1];
});

console.log(parametros['pedido'] === undefined);

if(parametros['pedido'] === undefined) {
    alert('Pedido não encontrada');
    window.location.href = 'pedidos.html';
} else {
    let pedidoSelecionado = pedidos.find(pedido => pedido.numero == parametros['pedido']);

    let tabelaPedido = document.getElementById('pedido');

    const produtosPedido = pedidoSelecionado.produtos;

    produtosPedido.forEach(produto => {

        let numeroPedido = produto.numero;
        let itemPedido = produto.produto;
        let valorPedido = produto.valor;
        let quantidadePedido = produto.quantidade;
        let totalPedido = valorPedido * quantidadePedido;
        const pedidosTabela = `
        <tbody>
            <tr class="produto-carrinho" id="${numeroPedido}">
                <td class="produto">
                    ${itemPedido}
                </td>
                
                <td class="produto-valor">
                    ${valorPedido}
                </td>
                <td class="produto-quantidade">
                    <input min="0" value="${quantidadePedido}"  type="number" name="" class="quantidade-" placeholder="Qtd" disabled>
                    </button>
                </td> 
                <td class="produto-valor-total-">
                    ${formataValor(totalPedido)}
                </td>
            </tr>
        </tbody>
        `;
        tabelaPedido.innerHTML += pedidosTabela;
    })
}



// console.log(itens);
