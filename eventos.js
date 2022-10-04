const API_URL = 'http://localhost:8001'

function novo() {
    paginaNovo.style.display = 'block';
    tabela.style.display = 'none';
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
                </tr>
                
            `
        })
    })
}
