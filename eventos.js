const API_URL = 'http://localhost:8001'

function novo() {
    paginaNovo.style.display = 'block';
    tabela.style.display = 'none';
}

function buscarParaEditar(id) {

    fetch(API_URL+'/contatos/'+id)
        .then(resposta => resposta.json())
        .then(dados => {
            inputEditarId.value = id;
            inputEditarNome.value = dados.nome;
            inputEditarTelefone.value = dados.telefone;
            inputEditarCidade.value = dados.cidade;
        })
}

function editar() {
    event.preventDefault();
    
    let dados = {
        id: inputEditarId.value,
        nome: inputEditarNome.value,
        telefone: inputEditarTelefone.value,
        cidade: inputEditarCidade.value,
    };

    fetch(API_URL+'/contatos/'+inputEditarId.value, {
        method: 'PATCH',
        body: JSON.stringify(dados),
        headers: {
            'content-type': 'application/json'
        }
    })
        .then(resposta => resposta.json())
        .then(() => atualizarLista());

    let i = document.querySelector('[data-bs-dismiss="offcanvas"]');

    i.dispatchEvent(new Event('click'));
}

function listar() {
    tabela.style.display = 'table';
    paginaNovo.style.display = 'none';

    fetch(API_URL+'/contatos/', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    })

        .then( (resposta) => resposta.json())
        .then( () => atualizarLista())
}

async function excluir (id) {
    let resposta = confirm('Você tem certeza?');

    if (resposta !== true) {
        return;
    }

    await fetch(API_URL+'/contatos/'+id, {
        method: 'DELETE'
    });

    atualizarLista();
}

function salvar() {
    event.preventDefault();

    let dados = {
        nome: nome.value,
        telefone: telefone.value,
        cidade: cidade.value,
    };

    fetch(API_URL+'/contatos/', {
        method: 'POST',
        body: JSON.stringify(dados),
        headers: {
            'Content-Type': 'application/json'
        }
    })

        .then( (resposta) => resposta.json())
        .then()

    paginaNovo.reset();
    listar();
}

function atualizarLista() {
    listaDeContatos.innerHTML = '';

    fetch(API_URL+'/contatos/')
    .then(function(resposta) {
        return resposta.json();
    })
    .then(function (lista) {
        lista.forEach(function (cadaContato) {
            listaDeContatos.innerHTML += `
                <tr>
                    <td>${cadaContato.nome}</td>
                    <td>${cadaContato.telefone}</td>
                    <td>${cadaContato.cidade}</td>
                    <td>${cadaContato.id}</td>
                    <td>
                    <button onclick="buscarParaEditar(${cadaContato.id})" data-bs-toggle="offcanvas" data-bs-target="#offcanvasEditar" class="btn btn-warning">
                        Editar
                    </button>
                    <button class="btn btn-danger" onclick="excluir(${cadaContato.id})">
                        Excluir
                    </button>
                    </td>
                </tr>
                
            `
        })
    })
}
