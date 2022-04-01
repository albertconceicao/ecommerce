
const formataValor = (valor) => valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });


let pedidos = JSON.parse(localStorage.getItem("pedidos")) || [];

console.log(pedidos);

let tabelaPedido = document.getElementById('pedidos');

pedidos.forEach(pedido => {
    const pedidosTabela = `
        <tbody>
        <tr>
            <td class="nav-item">
                <a class="nav-link" href="">
                    ${pedido.numeroPedido}
                </a>
            </td>
            <td>
                Título
            </td>
            
            <td>
                ${formataValor(pedido.totalPedido)}
            </td>
            <td>
                13/03/2022
            </td>
            <td>
                Entregue
            </td>
        </tr>
    `;

    tabelaPedido.innerHTML += pedidosTabela;
});