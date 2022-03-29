const  alteraDadosPessoais = (event) => {
    
    console.log('Entrou')
    event.preventDefault();
    let nome = document.getElementById('nome');
    let sobrenome = document.getElementById('sobrenome');
    let cep = document.getElementById('cep')
    let email = document.getElementById('email');
    let cpf = document.getElementById('cpf');
    

    let dadosCadastro = {};
    
    if(!nome.value.includes(' ')) {
        alert('Você precisa informar um nome e sobrenome');
        nome.value = '';
    } else if(!email.value.includes('@')){
        alert('Informa um e-mail válido')
    }
    else if(!sobrenome.value === ''){
        alert('Informa um usuário válido')
    }
    else if(senha.value.length < 6) {
        alert('Você precisa informar uma senha com no mínimo 6 dígitos');
        senhaCadastro.value = '';
    }
    else {
        alert('Login efetuado com sucesso');
        dadosCadastro = {nome: nome.value, emailCadastro: emailCadastro.value, usuarioCadastro: usuarioCadastro.value, senhaCadastro: senhaCadastro.value}
    }
    console.log(dadosCadastro);
}