$.get("json/GRUPOS.json", function(data) {
    let dataString = JSON.stringify(data);
    const dataJson =  JSON.parse(dataString);

    
    

    const retornaGrupos = (grupo, subgrupo, codigo) => {

      const retornaGrupoEspecífico = () => {
        
      }
      const gruposHeader = document.querySelector('#grupos-header');
      const gruposHeaderLista = `
        <li class="nav-item">
          <a href="grupo.html?grupo=${codigo}" class="nav-link">
            <div>
              <img src="./img/tshirt-solid.svg" alt="Grupo de camisa">
            </div>
            <span>${grupo.toLowerCase()}</span>
          </a>
      `;
      gruposHeader.innerHTML += gruposHeaderLista;

      const listaGruposHeader = document.querySelector('#mobile-header-nav-itens');
      
      let subgruposLista = [];
      for (let subgrupos in subgrupo[0]) {
        
        subgruposLista += `
        <li class="nav-item">
            <a href="subgrupo.html?subgrupo=${subgrupos}"  class="nav-link nome-barra-lateral" >
              ${subgrupo[0][subgrupos].toLowerCase()}
            </a>
        </li>
        `
      };
      const subgrupos = subgrupo[0];
      
      let listaGrupos = document.querySelector('#aside-nav-itens');
      const conteudoLista = `
      
        <div id="grupo${codigo}">
          <ul class="navbar-nav">
            <li class="nav-item">
                <a href="" ondblclick="window.location.href = 'subgrupo.html?subgrupo=${subgrupo[0][subgrupos]}'" class="nav-link" onclick="mostrarLista('${codigo}')" >
                ${grupo.toLowerCase()}
              </a> 
            </li>
          </ul>
          <div id="conteudo${codigo}">
            <ul class="navbar-nav">
              ${`
              
                    ${subgruposLista}
              
              `}
            
            </ul>
          </div>
        </div>
      `
      // console.log(conteudoLista);
      listaGruposHeader.innerHTML += conteudoLista;
      listaGrupos.innerHTML += conteudoLista;

      const gruposFooter = document.querySelector('#grupos-footer')
      
      const linksGruposFooter = `
        <a href="grupo.html?grupo=${codigo}" class="">${grupo.toLowerCase()}</a>
      `

      gruposFooter.innerHTML += linksGruposFooter;

      //criar um forEach para cada subgrupo retornar a estrutura do link

    }
    const linkGrupo = dataJson.data.forEach(grupo => {
      // console.log(dataJson.data); 
      retornaGrupos(grupo.DESCRI, grupo.SUBGRUPOS, grupo.CODIGO)
    }
    
    );
/*     console.log(grupos);
 */
    
    
    /* return `<a href="" class="nav-link" onclick="mostrarLista('1')" >${dataJson.data[0].DESCRI}</a>`; */



    

  })