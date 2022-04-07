
const formataValor = (valor) => valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });


let pedidos = JSON.parse(localStorage.getItem("pedidos")) || [];

console.log(pedidos);

let tabelaPedido = document.getElementById('pedidos');

pedidos.forEach(pedido => {

    let numeroPedidoArray = [];
    let decimal = '.';
    let numeroPedido = pedido.numero.toString();
    numeroPedidoArray.push(numeroPedido.split(''));
    numeroPedidoArray[0].splice(1,1);
    let numeroPedidoLetra = numeroPedidoArray.toString();
    let numeroPedidoFormatado = numeroPedidoLetra.replace(/[^0-9]/g, '')
    console.log(numeroPedidoFormatado);
    const pedidosTabela = `
        <tbody>
        <tr>
            <td class="nav-item">
                <a class="nav-link" href="pedido.html">
                    ${numeroPedidoFormatado}
                </a>
            </td>
            <td>
            ${pedido.data}
            </td>
            <td>
            13/03/2022
            </td>
            <td>
            Entregue
            </td>
            <td>
                ${pedido.total}
            </td>
        </tr>
    `;

    tabelaPedido.innerHTML += pedidosTabela;
});