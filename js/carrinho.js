let produtosCarrinho = document.querySelector('produto');
const produtoCarrinho = document.createElement("tr");
const valor = document.createElement("td");
const produto = document.createElement("td");
const quantidade = document.createElement("td");
const valorTotal = document.createElement("td");

console.log()




form.addEventListener("submit", (event) => {
    event.preventDefault();
    console.log("Entrou")
    let nome = event.target.elements['title'].innerHTML;
    console.log(nome);
    let quantidade = event.target.elements['quantidade'].value;

    criaElemento(nome, quantidade);
})

function criaElemento(produto, quantidade) {

    valor.classList.add("produto-valor");
    produto.classList.add("produto");
    quantidade.classList.add("produto-quantidade");
    valorTotal.classList.add("produto-valor-total");
    produtoCarrinho.classList.add("produto-carrinho");

    produtoCarrinho.appendChild(produto, valor, quantidade, valorTotal);

    console.log(produtoCarrinho);


}