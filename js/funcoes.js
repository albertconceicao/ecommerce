$('.vote label i.fa').on('click mouseover',function(){
    // remove classe ativa de todas as estrelas
    $('.vote label i.fa').removeClass('active');
    // pegar o valor do input da estrela clicada
    var val = $(this).prev('input').val();
    //percorrer todas as estrelas
    $('.vote label i.fa').each(function(){
        /* checar de o valor clicado é menor ou igual do input atual
        *  se sim, adicionar classe active
        */
        var $input = $(this).prev('input');
        if($input.val() <= val){
            $(this).addClass('active');
        }
    });
    $("#voto").html(val); // somente para teste
});
//Ao sair da div vote
$('.vote').mouseleave(function(){
    //pegar o valor clicado
    var val = $(this).find('input:checked').val();
    //se nenhum foi clicado remover classe de todos
    if(val == undefined ){
        $('.vote label i.fa').removeClass('active');
    } else { 
        //percorrer todas as estrelas
        $('.vote label i.fa').each(function(){
            /* Testar o input atual do laço com o valor clicado
            *  se maior, remover classe, senão adicionar classe
            */
            var $input = $(this).prev('input');
            if($input.val() > val){
                $(this).removeClass('active');
            } else {
                $(this).addClass('active');
            }
        });
    }
    $("#voto").html(val); // somente para teste
});

let produtosCarrinho = document.querySelector('produto');
let total = document.querySelector('.total-valor');
let freteCarrinho = document.querySelector('frete-valor');
let valor = document.querySelector('produto-valor');
let descontoCupom = document.querySelector('desconto-cupom');

const adicionarCupom = () => {


    total = 50;
    console.log(total.value);

    
}

const mostraFormaPagamento = (div, div2, div3) => {
    let formaPagamento = document.getElementById(div);
    let formaPagamento2 = document.getElementById(div2);
    let formaPagamento3 = document.getElementById(div3);
     if(formaPagamento.style.display === 'none'){
        formaPagamento.style.display = 'block';
        formaPagamento2.style.display = 'none';
        formaPagamento3.style.display = 'none';
     }else {
        formaPagamento.style.display = 'none';
        
     }
    event.preventDefault();
    
}