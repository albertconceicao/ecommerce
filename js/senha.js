const usuario = JSON.parse(localStorage.getItem('usuario'));

const grupoSenha = document.getElementById('alterar-senha');

const dadosSenha = `
    <label for="pre-senha">Nova senha</label>
    <input type="password" class="form-control" placeholder="Digite a nova senha" id="pre-senha" pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?!.*[!@#$%&*_=+=]).{6,12}$" title="A " >

    <label for="nova-senha">Confirmar senha:</label>
    <input type="password" class="form-control" placeholder="As senhas precisam ser iguais" id="nova-senha" pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?!.*[!@#$%&*_=+=]).{6,12}$" title="A senha deve conter pelo menos uma letra maíuscula, uma letra minúscula, um número e não deve ter símbolos">

    <button id="cria-senha" class="btn btn-lg" type="submit">Criar senha</button>
`;

grupoSenha.innerHTML = dadosSenha;
let senha = document.querySelector('#pre-senha');
let senhaDigitada = senha.value;
const botaoCriaSenha = document.querySelector('#pre-senha');
botaoCriaSenha.addEventListener("change", (event) => {
    event.preventDefault();
    console.log(event.target.value);
    // atualizaDados(senhaDigitada);
})
const atualizaDados = (dados) => {
    event.preventDefault();
    console.log(senhaDigitada);
    localStorage.setItem("usuario", JSON.stringify(dados));
}

try {
    const usuarioExiste = usuario.email_verified;
    const senhaAlterada = {
        ...usuario,
        senha: '12345678'
    }
    if( usuarioExiste) {
        const dadosSenhaAlterada = `
            <label for="pre-senha">Nova senha</label>
            <input type="password" class="form-control" placeholder="Digite a nova senha" value="${senhaAlterada.senha}" id="pre-senha" pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?!.*[!@#$%&*_=+=]).{6,12}$" title="A " >

            <label for="nova-senha">Confirmar senha:</label>
            <input type="password" class="form-control" placeholder="As senhas precisam ser iguais" value="${senhaAlterada.senha}" id="nova-senha" pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?!.*[!@#$%&*_=+=]).{6,12}$" title="A senha deve conter pelo menos uma letra maíuscula, uma letra minúscula, um número e não deve ter símbolos">

            <button id="altera-senha" class="btn btn-lg" type="submit">Alterar senha</button>
        `;
        grupoSenha.innerHTML = dadosSenhaAlterada;
        const botaoAlteraSenha = document.querySelector('#altera-senha');
            botaoAlteraSenha.addEventListener('click', (event) => {
                event.preventDefault();
                atualizaDados(senhaAlterada);
            })
        const atualizaDados = (dados) => {
            event.preventDefault();
            console.log(dados);
            localStorage.setItem("usuario", JSON.stringify(dados));
        }
    }

} catch (error) {
    console.log(error);
}