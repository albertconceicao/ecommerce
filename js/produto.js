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