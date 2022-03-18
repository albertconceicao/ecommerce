


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
    console.log(titulo);
    console.log(codigo);
    console.log(valor);

    /* const cardBody = querySelector(".card-body"); */

    const card = document.createElement("div");
    card.classList.add("card");

    const cardTitulo = document.createElement("a");
    cardTitulo.classList.add("card-title");
    cardTitulo.innerHTML = titulo;
    

    const cardCodigo = document.createElement("span");
    cardCodigo.classList.add("codigo");
    cardCodigo.innerHTML = codigo;

    const cardValor = document.createElement("span");
    cardValor.classList.add("card-value");
    cardValor.innerHTML = valor;


    card.appendChild(cardTitulo);
    cardTitulo.appendChild(cardValor);
    /* card.append(cardBody); */
    
    
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
/* 
  $(".card-title").append(produtos);

  const codigosArray = dataJsonProduto.data.forEach(codigo => codigos += codigo.CODIGO)
  const valoresArray = dataJsonProduto.data.forEach(valor => valores += valor.VENDA)
  console.log(produtos);
  
  
  $("#codigo").html(`Código: ${codigos}`);
  $(".card-value").html(valores); */
})
