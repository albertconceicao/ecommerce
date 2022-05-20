const usuario = JSON.parse(localStorage.getItem("usuario"));



const linkIconeUsuario = document.getElementById('icone-usuario');

let iconeUsuario = `
    <span><i class="fas fa-user-circle"></i></span> Entrar na Conta 
`;

linkIconeUsuario.innerHTML = iconeUsuario;
try {
    const usuarioExiste = usuario.email_verified;
    if(usuarioExiste) {
        let iconeUsuarioLogado = `
        <span><i class="fas fa-user-circle"></i></span> Olá, ${usuario.given_name} 
        `;
        linkIconeUsuario.innerHTML = iconeUsuarioLogado;
    }
} catch (error) {
    console.log(error);
}