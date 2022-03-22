


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
    cardImage.src = `${imagem}`;
    cardImage.alt = `${titulo}`;
    cardImage.style.height = '120px';

    const cardBody = document.querySelector(".card-body");
    cardBody.style.backgroundColor = 'red';
    
    const cardSecao = document.querySelector("#produtos");


    const cardLinhas = document.createElement("div");
    cardLinhas.classList.add("row");

    
   

    const card = document.createElement("div");
    card.classList.add("card");
    
    

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
    cardProduto.appendChild(card);
    cardLinhas.appendChild(cardProduto);

    console.log(cardLinhas);

    
/* 
    cardLinhaProdutos.appendChild(card); */
    /* cardLinhas.appendChild(cardLinhaProdutos);
    cardSecao.appendChild(cardLinhas); */

    
    
  }

  function espacoCards(cards) {

  }

  const dataProdutoString = JSON.stringify(data);
  const dataJsonProduto = JSON.parse(dataProdutoString);
  

  const produtosArray = dataJsonProduto.data.forEach((produto) => {
    
    criaCard(produto.DESCRICAO, produto.CODIGO, produto.VENDA, produto.IMAGEM);
  });

})
