    
$.get("json/PRODUT.json", function (data) {
  
  function formataValor  (valor) {
    return valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
  } 
  function retornaCard(titulo, codigo, valor, imagem) {
    const cardProduto = 
    `
    <div class="col-lg-4">
      <div class="card" >
        <img class="card-img-top img-fluid" height="120px" src="${imagem}" alt="Card image cap">
        <div class="card-body">
          <a href="" name="title" class="card-title">${titulo}</a>
          <span class="codigo">Código: ${codigo}</span>
          <p class="card-text">
            <div class="estrelas">
              <input type="radio" id="cm_star-empty" name="fb" value="" checked/>
              <label for="cm_star-1"><i class="fa"></i></label>
              <input type="radio" id="cm_star-1" name="fb" value="1"/>
              <label for="cm_star-2"><i class="fa"></i></label>
              <input type="radio" id="cm_star-2" name="fb" value="2"/>
              <label for="cm_star-3"><i class="fa"></i></label>
              <input type="radio" id="cm_star-3" name="fb" value="3"/>
              <label for="cm_star-4"><i class="fa"></i></label>
              <input type="radio" id="cm_star-4" name="fb" value="4"/>
              <label for="cm_star-5"><i class="fa"></i></label>
              <input type="radio" id="cm_star-5" name="fb" value="5"/>
            </div>
              
              
          <span>
            ${valor}
          </span>
          <small>
            12x de Valor no Forma de Pagamento
          </small>
          <a href="produto.html" id="${codigo}" class="btn btn-primary">Comprar</a>
        </div>
      </div>
    </div>
    `
    ;
  const cardSecao = document.querySelector("#produtos");

  cardSecao.innerHTML += cardProduto;
  }

  const dataProdutoString = JSON.stringify(data);
  const dataJsonProduto = JSON.parse(dataProdutoString);
  

  const produtosArray = dataJsonProduto.data.forEach((produto) => {
    
    retornaCard(produto.DESCRICAO, produto.CODIGO, produto.VENDA, produto.IMAGEM);
  });

  
  let botaoCompra = document.querySelector(`#${produto}`);
  let produtoCarrinho = [];

  const adicionaCarrinho = (produto) => {
    produto.preventDefault();
    produtoCarrinho.push({produto});
    console.log(produtoCarrinho);
  };

  botaoCompra.addEventListener('click', (event) => {
    event.preventDefault();
    console.log('Acionou');
    adicionaCarrinho(codigo);
  });


})
