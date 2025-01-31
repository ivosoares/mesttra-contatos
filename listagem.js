async function getContatos () {
    const resultHtml = document.getElementById('result');
    const apiUrl = 'http://localhost:3000/contatos'
    const response = await fetch(apiUrl);
    const data = await response.json();

    data.forEach(usuario => {
        resultHtml.insertAdjacentHTML('beforeend', `
            <tr>
                <td>${usuario.nome}</td>    
                <td>${usuario.cpf}</td>    
                <td>${usuario.idade}</td>    
            </tr>
        `)
    });
}

getContatos();