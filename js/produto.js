const calculaRolo = (codigo, larguraParede, alturaParede, larguraRolo, valorUnitarioRolo) => {

    let quantidadeRolos = larguraParede / larguraRolo;
    let alturaParedeSobra = alturaParede + 0.10;
    console.log(alturaParedeSobra);
    let areaTotal = larguraRolo * alturaParedeSobra * quantidadeRolos;
    console.log(areaTotal);
    let valorTotal = areaTotal * valorUnitarioRolo;
    console.log(`R$${valorTotal.toFixed(2)}`);

    // let areaParede = larguraParede * (alturaParedeSobra);

    return `A área da parede é de ${areaTotal}, a quantidade de Rolos necessária é de: ${Math.round(quantidadeRolos)}, o valor total da compra é de R$${valorTotal.toFixed(2)}`


};

console.log(calculaRolo('0101', 8, 4, 0.76, 49.00));
let produtosCarrinho = JSON.parse(localStorage.getItem('produtos')) || [];
console.log(produtosCarrinho);

const secaoProduto = document.getElementById('produto');

const produto = `
    <h2>Produto</h2>
    <span id="codigo">Código: 12345</span>
    <div class="estrelas">
    <input type="radio" id="cm_star-empty" name="fb" value="" checked />
    <label for="cm_star-1"><i class="fa"></i></label>
    <input type="radio" id="cm_star-1" name="fb" value="1" />
    <label for="cm_star-2"><i class="fa"></i></label>
    <input type="radio" id="cm_star-2" name="fb" value="2" />
    <label for="cm_star-3"><i class="fa"></i></label>
    <input type="radio" id="cm_star-3" name="fb" value="3" />
    <label for="cm_star-4"><i class="fa"></i></label>
    <input type="radio" id="cm_star-4" name="fb" value="4" />
    <label for="cm_star-5"><i class="fa"></i></label>
    <input type="radio" id="cm_star-5" name="fb" value="5" />
    </div>
    <span class="span-produto">Marca:</span>
    <span class="span-produto">Modelo:</span>
    <span class="span-produto">Disponibilidade:</span>
    <span class="span-valor">R$2.500,00</span>
    <small class="quantidade-pagamento">12x de Valor no Forma de Pagamento</small>
    <h3><img src="" alt=""><i class="fas fa-plus"></i>Informe a largura e altura da sua parede</h3>
    <div id="calculo-rolos">
    <input class="form-control" type="text" placeholder="Largura da parede">
    <input class="form-control" type="text" placeholder="Altura da parede">
    </div>
    <div id="total" class="class-group">
    <button class="btn btn-lg">Calcular rolos</button>
    <input class="form-control" type="text" placeholder="Total" disabled>
    </div>
    <div id="acoes-compra">
        <h3>Comprar ou adicionar ao carrinho</h3>
        <div class="qtd-produtos">
            <div id="botoes-compra">

                <span>
                    <button 
                    type="button" class="increment-decrement" onclick="diminuiQuantidade()"
                    value="-">-
                    </button>
                    <input type="number" name="" id="quantidade" placeholder="Qtd">
                    <button 
                    type="button" class="increment-decrement" onclick="aumentaQuantidade()"
                    value="+">+
                    </button>
                </span>
                <button class="btn btn-lg" href="carrinho.html">Comprar</button>
                <div id="icones-compra">
                    <button id="compartilhar" class="btn "><i class="fas fa-share"></i></button>
                    <button id="favoritar" class="btn "><i class="fas fa-heart"></i></button>
                </div>
            </div>

        </div>
        

    </div>
    <h3>Consultar prazo e valor do frete</h3>
    <div id="cep" class="input-group">
        <input class="form-control" type="text" placeholder="Digite seu CEP">
        <button class="btn btn-lg">Calcular Frete</button>
    </div>
    </div>

    </div>
`;

secaoProduto.innerHTML = produto;