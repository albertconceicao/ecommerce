


$.get("json/GRUPOS.json", function(data) {
    let dataString = JSON.stringify(data);
    const dataJson =  JSON.parse(dataString);
/*     console.log(dataJson.data);
 */
    const itemGrupo = document.querySelector("#lista-teste");
    let grupos = "";
    const linkGrupo = dataJson.data.forEach((grupo, x) => grupos += grupo.DESCRI);
/*     console.log(grupos);
 */
    const nomeGrupos = `<a href="" class="nav-link" onclick="mostrarLista('1')" >${grupos}</a>`
    /* return `<a href="" class="nav-link" onclick="mostrarLista('1')" >${dataJson.data[0].DESCRI}</a>`; */

    

   $("#link-grupo1").html(nomeGrupos);
  })

  

 
  
    
$.get("json/PRODUT.json", function (data) {
  
  function formataValor  (valor) {
    return valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
  } 

  function criaCard(titulo, codigo, valor, imagem) {
    
/*     const cardImage = `img class="card-img-top img-fluid" height="120px" src="${imagem}" alt="Card image cap">` */
    
    const cardImage = document.createElement("img");
    cardImage.classList.add("card-img-top", "img-fluid");
    cardImage.src = imagem;
    cardImage.alt = `${titulo}`;
    cardImage.style.height = '120px';

    const cardBody = document.querySelector(".card-body");
    cardBody.style.backgroundColor = 'red';
    
    const cardSecao = document.querySelector("#produtos");


    const cardLinhas = document.createElement("div");
    cardLinhas.classList.add("row");

    
   

    const card = document.querySelector(".card");
/*     card.classList.add("card");
 */    
    

    const cardTitulo = document.createElement("a");
    cardTitulo.classList.add("card-title");
    cardTitulo.innerHTML = titulo;
    

    
    const cardCodigo = document.createElement("span");
    cardCodigo.classList.add("codigo");
    cardCodigo.innerHTML = `Código: ${codigo}`;

    const cardValor = document.createElement("span");
    cardValor.classList.add("card-value");
    cardValor.innerHTML = `R$${valor}`;

    const cardFormaPagamento = document.createElement("small");
    cardFormaPagamento.classList.add("forma-pagamento");
    cardFormaPagamento.innerHTML = "Teste";

    const cardBotao = document.createElement("a");
    cardBotao.classList.add("btn", "btn-primary");
    cardBotao.innerHTML = "Comprar";

    const cardProduto = document.createElement("div");
    cardProduto.classList.add("col-md-4");

    



    
    cardBody.appendChild(cardTitulo);
    cardBody.appendChild(cardCodigo);
    cardBody.appendChild(cardValor);
    cardBody.appendChild(cardFormaPagamento);
    cardBody.appendChild(cardBotao);

    card.appendChild(cardImage);
    card.appendChild(cardBody);
    /* cardProduto.appendChild(card);
    cardLinhas.innerHTML(cardProduto); */

    console.log(card);

    
/* 
    cardLinhaProdutos.appendChild(card); */
    /* cardLinhas.appendChild(cardLinhaProdutos);
    cardSecao.appendChild(cardLinhas); */

    
    
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
          <a href="produto.html" class="btn btn-primary">Comprar</a>
        </div>
      </div>
    </div>
    `
    ;
  const cardSecao = document.querySelector("#produtos");
  const cardLinha = document.querySelector(".row");
  const cardColuna = document.querySelector(".card-body");

  /* cardSecao.appendChild(cardLinha);
  cardLinha.appendChild(cardProduto); */
  cardSecao.innerHTML += cardProduto;
/*   cardColuna.appendChild(cardLinha);
 */
  console.log(cardColuna);
  
  }

  const dataProdutoString = JSON.stringify(data);
  const dataJsonProduto = JSON.parse(dataProdutoString);
  

  const produtosArray = dataJsonProduto.data.forEach((produto) => {
    
    retornaCard(produto.DESCRICAO, produto.CODIGO, produto.VENDA, produto.IMAGEM);
  });

})
