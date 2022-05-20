const usuario = JSON.parse(localStorage.getItem('usuario'));

const grupoEndereco = document.getElementById('adicionar-endereco');

const dadosEndereco = `
    <h3>Endereço para entrega</h3>
    
    <label for="rua">Rua</label>
    <input type="text" class="form-control" placeholder="Digite sua rua" id="rua">

    <label for="numero">Numero</label>
    <input type="text" class="form-control" placeholder="Digite sua numero" id="numero">

    <label for="bairro">Bairro:</label>
    <input type="text" class="form-control" placeholder="Digite seu Bairro" id="bairro">

    <label for="cidade">Cidade</label>
    <input type="text" class="form-control" placeholder="Digite sua cidade" id="cidade">

    <label for="estado">Estado:</label>
    <input type="text" class="form-control" placeholder="Digite seu nome" id="estado">

    <label for="telefone-contato">Número de contato:</label>
    <input type="text" class="form-control" placeholder="Digite seu número de contato" id="telefone-contato">

    <label for="whatsapp">WhatsApp:</label>
    <input type="text" class="form-control" placeholder="Digite seu WhatsApp" id="whatsapp">

    <button id="adicionar-endereco" class="btn btn-lg" type="submit">Adicionar novo endereço</button>

`;
grupoEndereco.innerHTML = dadosEndereco;

try {
    const usuarioExiste = usuario.email_verified;
    const enderecoAtualizado = {
        ...usuario,
        rua: 'Avenida Brigadeiro',
        numero: '123',
        cidade: 'Lauro de Freitas',
        bairro: 'Centro',
        estado: 'Bahia',
        telefone_contato: '71988887777',
        whatsapp: '71988887777'
    }

    if (usuarioExiste) {
        const dadosEnderecoAtualizado = `
            <h3>Endereço para entrega</h3>

            <label for="rua">Rua</label>
            <input type="text" class="form-control" value="${enderecoAtualizado.rua}" placeholder="Digite sua cidade" id="rua">

            <label for="numero">Rumero</label>
            <input type="text" class="form-control" value="${enderecoAtualizado.numero}" placeholder="Digite sua rua" id="numero">

            <label for="bairro">Bairro:</label>
            <input type="text" class="form-control" value="${enderecoAtualizado.bairro}" placeholder="Digite seu Bairro" id="bairro">

            <label for="cidade">Cidade</label>
            <input type="text" class="form-control" value="${enderecoAtualizado.cidade}" placeholder="Digite sua cidade" id="cidade">
            
            <label for="estado">Estado:</label>
            <input type="text" class="form-control" value="${enderecoAtualizado.estado}" placeholder="Digite seu nome" id="estado">

            <label for="telefone-contato">Número de contato:</label>
            <input type="text" class="form-control" value="${enderecoAtualizado.telefone_contato}" placeholder="Digite seu número de contato" id="telefone-contato">

            <label for="whatsapp">WhatsApp:</label>
            <input type="text" class="form-control" value="${enderecoAtualizado.whatsapp}" placeholder="Digite seu WhatsApp" id="whatsapp">

            <button id="alterar-endereco" class="btn btn-lg" type="submit">Alterar endereço</button>

        `;

        grupoEndereco.innerHTML = dadosEnderecoAtualizado;

        const botaoAlteraEndereco = document.querySelector('#alterar-endereco');
            botaoAlteraEndereco.addEventListener('click', (event) => {
                event.preventDefault();
                atualizaDados(enderecoAtualizado);
            })
        const atualizaDados = (dados) => {
            event.preventDefault();
            console.log(dados);
            localStorage.setItem("usuario", JSON.stringify(dados));
        }
    }
} catch (error) {
    
}