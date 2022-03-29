$.get("json/GRUPOS.json", function(data) {
    let dataString = JSON.stringify(data);
    const dataJson =  JSON.parse(dataString);


    const retornaGrupos = (grupo, subgrupo, codigo) => {
        //retornar a estrutura HTML do link alterando somente o nome do grupo;
        const containerListaGrupos = `<nav class "navbar"></nav>`
        const listaGrupos = `
        <div id="conteudo${codigo}">
          <ul class="navbar-nav">
            <li class="nav-item" id="link-grupo1">
              <!-- <a href="" class="nav-link" onclick="mostrarLista(${codigo})" >
                ${grupo}
              </a> -->
            </li>
          </ul>
          <div id="conteudo${codigo}">
            <ul class="navbar-nav">
          ${
            subgrupo.forEach((subgrupo) => {
                `<li class="nav-item">
                    <a href="" class="nav-link">
                    ${subgrupo}
                    </a>
                </li>
                `
            })
          }
          
            </ul>
          </div>
        </div>
      `
        // console.log(listaGrupos);
        // console.log(containerListaGrupos.appendChild += listaGrupos);


        

        //criar um forEach para cada subgrupo retornar a estrutura do link

    }
    const linkGrupo = dataJson.data.forEach(grupo => retornaGrupos(grupo.DESCRI, grupo.SUBGRUPOS, grupo.CODIGO)
    );
/*     console.log(grupos);
 */
    
    
    /* return `<a href="" class="nav-link" onclick="mostrarLista('1')" >${dataJson.data[0].DESCRI}</a>`; */



    

  })