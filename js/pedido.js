const formataValor = (valor) => valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });


let pedidos = JSON.parse(localStorage.getItem("pedidos")) || [];


let tabelaPedido = document.getElementById('pedido');

pedidos.forEach(pedido => {
    for (let item in pedido[0]) {
        console.log(item)
    }
    let numeroPedidoArray = [];
    let decimal = '.';
    let numeroPedido = pedido.numero.toString();
    numeroPedidoArray.push(numeroPedido.split(''));
    numeroPedidoArray[0].splice(1,1);
    let numeroPedidoLetra = numeroPedidoArray.toString();
    let numeroPedidoFormatado = numeroPedidoLetra.replace(/[^0-9]/g, '');
    let totalProduto = pedido[0].quantidade * pedido[0].valor;
    // console.log(numeroPedidoFormatado);
    // console.log(pedido);
    const pedidosTabela = `
        <tbody>
            <tr class="produto-carrinho" id="">
                <td class="produto">
                    ${pedido[0].produto}
                </td>
                
                <td class="produto-valor">
                    ${pedido[0].valor}
                </td>
                <td class="produto-quantidade">
                    <input min="0" value="${pedido[0].quantidade}"  type="number" name="" class="quantidade-" placeholder="Qtd" disabled>
                    </button>
                </td> 
                <td class="produto-valor-total-">
                    ${formataValor(totalProduto)}
                </td>
            </tr>
        </tbody>
    `;

    tabelaPedido.innerHTML += pedidosTabela;
});