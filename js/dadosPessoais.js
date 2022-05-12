const usuario = JSON.parse(localStorage.getItem('usuario'));
// console.log(usuario);

let listaDadosPessoais = document.getElementById('adicionar-endereco');
let dadosPessoais = `
    <label for="name">Nome:</label>
    <input type="text" class="form-control" placeholder="Digite seu nome" id="name">

    <label for="number">Sobrenome:</label>
    <input type="text" class="form-control" placeholder="Digite seu sobrenome" id="number">


    <label for="ident">CEP:</label>
    <input type="text" class="form-control" placeholder="Digite seu CEP" id="ident">

    <label for="cel">E-mail</label>
    <input type="text" class="form-control" placeholder="Digite seu e-mail" id="cel">
    <label for="post">CPF:</label>
    <input type="text" class="form-control" placeholder="Digite seu CPF" id="post">
    <button id="atualiza-dados" class="btn btn-lg" type="button">Alterar dados pessoais</button>

`;
listaDadosPessoais.innerHTML = dadosPessoais;
try {
    const usuarioExiste = usuario.email_verified;
    const dadosAtualizados = {
        ...usuario,
        cep: '123132-000',
        cpf: '123.321.123.23'
    }
    

    console.log(dadosAtualizados);
    

    if(usuarioExiste){
        
        const dadosPessoaisLogado = `
            <label for="name">Nome:</label>
            <input type="text" class="form-control" value="${dadosAtualizados.given_name}" placeholder="Digite seu nome" id="name">
        
            <label for="number">Sobrenome:</label>
            <input type="text" class="form-control" value="${dadosAtualizados.family_name}" placeholder="Digite seu sobrenome" id="number">
        
        
            <label for="ident">CEP:</label>
            <input type="text" class="form-control" value="${dadosAtualizados.cep}" placeholder="Digite seu CEP" id="ident">
        
            <label for="cel">E-mail</label>
            <input type="text" class="form-control" value="${dadosAtualizados.email}" placeholder="Digite seu e-mail" id="cel">
            <label for="post">CPF:</label>
            <input type="text" class="form-control" value="${dadosAtualizados.cpf}"placeholder="Digite seu CPF" id="post">
            <button id="atualiza-dados" class="btn btn-lg" type="button">Alterar dados pessoais</button>
        
        `;
        
        listaDadosPessoais.innerHTML = dadosPessoaisLogado;

        const botaoAtualizaDados = document.querySelector('#atualiza-dados');
        botaoAtualizaDados.addEventListener('click', (event) => {
            event.preventDefault();
            atualizaDados(dadosAtualizados);
        })
        const atualizaDados = (dados) => {
            event.preventDefault();
            console.log(dados);
            localStorage.setItem("usuario", JSON.stringify(dados));
        }

    }
} catch (error) {
    console.log(error)
}
