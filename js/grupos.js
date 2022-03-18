


$.get("json/GRUPOS.json", function(data) {
    let dataString = JSON.stringify(data);
    const dataJson =  JSON.parse(dataString);
/*     console.log(dataJson.data);
 */
    const itemGrupo = document.querySelector("#lista-teste");
    let grupos = "";
    const linkGrupo = dataJson.data.forEach((grupo, x) => grupos += grupo.DESCRI);
    console.log(grupos);

    const nomeGrupos = `<a href="" class="nav-link" onclick="mostrarLista('1')" >${grupos}</a>`
    /* return `<a href="" class="nav-link" onclick="mostrarLista('1')" >${dataJson.data[0].DESCRI}</a>`; */

    

   $("#link-grupo1").html(nomeGrupos);
  })

  

 
  
    
$.get("json/PRODUT.json", function (data) {
  
  function formataValor  (valor) {
    return valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
  } 


  let dataProdutoString = JSON.stringify(data);
  const dataJsonProduto = JSON.parse(dataProdutoString);
  let produtos = "";
  let codigos = "";
  let valores = "";

  const produtosArray = dataJsonProduto.data.forEach(produto => {
    produtos += produto.DESCRICAO;
  });
  $(".card-title").append(produtos);

  const codigosArray = dataJsonProduto.data.forEach(codigo => codigos += codigo.CODIGO)
  const valoresArray = dataJsonProduto.data.forEach(valor => valores += valor.VENDA)
  console.log(produtos);
  
  
  $("#codigo").html(`Código: ${codigos}`);
  $(".card-value").html(valores);
})
