const resultHtml = document.getElementById('result');
async function getContatos () {
    const apiUrl = 'http://localhost:3000/contatos'
    const response = await fetch(apiUrl) //GET;
    const data = await response.json();

    data.forEach(usuario => {
        resultHtml.insertAdjacentHTML('beforeend', `
            <tr>
                <td>${usuario.nome}</td>    
                <td>${usuario.cpf}</td>    
                <td>${usuario.idade}</td>    
                <td><button class="w3-button w3-red" onclick="deleteUser('${usuario.id}')">excluir</button></td>    
                <td><a href="./edicao.html?id=${usuario.id}" class="w3-button w3-green">Editar</a></td>    
            </tr>
        `)
    });
}

async function deleteUser(id) {
    const ApiUrl = `http://localhost:3000/contatos/${id}`

    const request = new Request (ApiUrl, {
        method: 'DELETE',
    })

    const response = await fetch(request);
    const data = await response.json();
    
    alert(`Usuario ${data.nome} excluido com sucesso`);
    resultHtml.innerHTML = '';
    getContatos();
}

getContatos();