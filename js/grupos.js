


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

  function criaCard(titulo, codigo, valor) {
    

    const cardBody = document.querySelector(".card-body");
    
    const cardSecao = document.querySelector("#produtos");


    const cardLinhas = document.createElement("div");
    cardLinhas.classList.add("row");

    const cardLinhaProdutos = document.createElement("div");
    cardLinhaProdutos.classList.add("col-md-4");
   

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
    cardBotao.innerHTML = "Teste Comprar"

    console.log(titulo);
    console.log(codigo);
    console.log(valor);

    
    cardBody.appendChild(cardTitulo);
    cardBody.appendChild(cardCodigo);
    cardBody.appendChild(cardValor);
    cardBody.appendChild(cardFormaPagamento);
    cardBody.appendChild(cardBotao);

    card.innerHTML = cardBody;
/* 
    cardLinhaProdutos.appendChild(card); */
    /* cardLinhas.appendChild(cardLinhaProdutos);
    cardSecao.appendChild(cardLinhas); */

    
    
  }

  const dataProdutoString = JSON.stringify(data);
  const dataJsonProduto = JSON.parse(dataProdutoString);
  let produtos = "";
  let codigos = "";
  let valores = "";

  const produtosArray = dataJsonProduto.data.forEach((produto) => {
    produtos += produto.DESCRICAO;
    codigos += produto.CODIGO;
    valores += produto.VENDA;
    criaCard(produtos, codigos, valores);
  });

})
