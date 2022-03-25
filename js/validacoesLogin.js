const  validaLogin = (event) => {
    
    event.preventDefault();
    let senha = document.getElementById('usuario-senha');
    let login = document.getElementById('usuario-login');
    let dadosLogin = {};
    
    if(login.value === "") {
        alert('Você precisa informar um login válido');
        login.value = '';
    } else if(senha.value.length < 6) {
        alert('Você precisa informar uma senha com no mínimo 6 dígitos');
        senha.value = '';
    }
    else {
        alert('Login efetuado com sucesso');
        dadosLogin = {login: login.value, senha: senha.value}
    }
    console.log(dadosLogin);
}
const  validaCadastro = (event) => {
    
    console.log('Entrou')
    event.preventDefault();
    let nomeSobrenome = document.getElementById('nome-sobrenome');
    let emailCadastro = document.getElementById('email-cadastro');
    let usuarioCadastro = document.getElementById('usuario-cadastro');
    let senhaCadastro = document.getElementById('senha-cadastro');

    let dadosCadastro = {};
    
    if(!nomeSobrenome.value.includes(' ')) {
        alert('Você precisa informar um nome e sobrenome');
        nomeSobrenome.value = '';
    } else if(!emailCadastro.value.includes('@')){
        alert('Informa um e-mail válido')
    }
    else if(!usuarioCadastro.value === ''){
        alert('Informa um usuário válido')
    }
    else if(senhaCadastro.value.length < 6) {
        alert('Você precisa informar uma senha com no mínimo 6 dígitos');
        senhaCadastro.value = '';
    }
    else {
        alert('Login efetuado com sucesso');
        dadosCadastro = {nomeSobrenome: nomeSobrenome.value, emailCadastro: emailCadastro.value, usuarioCadastro: usuarioCadastro.value, senhaCadastro: senhaCadastro.value}
    }
    console.log(dadosCadastro);
}