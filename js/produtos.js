    
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
          <a href=""  name="title" class="card-title">${titulo}</a>
          <span  class="codigo">Código: ${codigo}</span>
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
              
              
          <span data-valor="${valor}" >
            ${valor}
          </span>
          <small>
            12x de Valor no Forma de Pagamento
          </small>
          <a href="#" data-codigo="${codigo}" data-titulo="${titulo}" id="${codigo}-botao" data-valor="${valor}" class="btn btn-primary">Comprar</a>
        </div>
      </div>
    </div>

    <div class="modal fade" id="${codigo}" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"   aria-hidden="true">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Produto já adicionado ao carrinho</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <p>
              ${titulo} já foi adicionado ao carrinho
            </p>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Voltar para página</button>
          </div>
        </div>
      </div>
    </div>
    `
    ;
    const cardSecao = document.querySelector("#produtos");

    cardSecao.innerHTML += cardProduto;
    

    const adicionaCarrinho = (produto, codigo, valor) => {
      event.preventDefault();
      let produtosCarrinho = JSON.parse(localStorage.getItem('produtos')) || [];

      let codigoProdutosCarrinho = produtosCarrinho.filter(item=> item.codigo === codigo);

      console.log(codigoProdutosCarrinho);

      if(codigoProdutosCarrinho.length === 0){
        produtosCarrinho.push({
          id:  Math.random() * (10-0) + 0,
          produto: produto, 
          codigo: codigo, 
          valor: valor,
          quantidade: 1
        });
        localStorage.setItem('produtos', JSON.stringify(produtosCarrinho));

        window.location.href = 'carrinho.html'
      }
      else {
        console.log('Produto existente no carrinho');
        $(`#${codigo}`).modal({
          show: true
        });
      }
      console.log(produtosCarrinho);
    };
    
    // let botaoCompra = 
    // let botaoCompra = document.getElementById('010109-botao');
    let botaoCompraProdutos = document.getElementById(`${codigo}-botao`);
    

    // console.log(botaoCompra, botaoCompraProdutos);
    

    botaoCompraProdutos.addEventListener('click', (event) => {
      console.log('Clicou');
      let tituloProduto = botaoCompraProdutos.getAttribute("data-titulo");
      let codigoProduto = botaoCompraProdutos.getAttribute("data-codigo");
      // let codigoProduto = document.getElementById(`${codigo}`).id;
      let valorProduto = botaoCompraProdutos.getAttribute("data-valor");
      
      adicionaCarrinho(tituloProduto, codigoProduto, valorProduto);
    });

   


  
  }

  const dataProdutoString = JSON.stringify(data);
  const dataJsonProduto = JSON.parse(dataProdutoString);
  
  let linhaProdutos = [];
  
  let i = 0;
  const produtosArray = dataJsonProduto.data.forEach((produto) => {
    linhaProdutos.push(produto);
    while(linhaProdutos.length <=6) {
      retornaCard(produto.DESCRICAO, produto.CODIGO, produto.VENDA, produto.IMAGEM);
      break;
    }
    
  });

  
  
  


})
