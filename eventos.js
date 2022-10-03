let contatos = [
    ['Carlos', '85 999990000', 'Fortaleza'],
    ['André', '85 999992222', 'Fortaleza'],
    ['Adrian', '85 999991111', 'Caucaia'],
];

function novo() {
    paginaNovo.style.display = 'block';
    listaDeContatos.style.display = 'none';
}


function listar() {
    listaDeContatos.style.display = 'block';
    paginaNovo.style.display = 'none';

    limpaLista();
    contatos.forEach(function (cadaContato) {
        listaDeContatos.innerHTML += `
            <tr>
                <td>${cadaContato[0]}</td>
                <td>${cadaContato[0]}</td>
                <td>${cadaContato[0]}</td>
            </tr>
        `;
    });
}

function limpaLista() {
    listaDeContatos.innerHTML = '';
}

function salvar() {
    event.preventDefault();
    contatos.push([`${nome.value}`, `${telefone.value}`, `${cidade.value}`]);
    listar();
}