const sendUser = async (event) => {
    event.preventDefault();

    // buscar os campos que o meu usuario 
    const nome = document.getElementById('nome').value;
    const cpf = document.getElementById('cpf').value;
    const idade = document.getElementById('idade').value;

    const usuario = {
        nome,
        cpf,
        idade
    }

    const apiUrl = 'http://localhost:3000/contatos';

    const request = new Request (apiUrl, {
        method: 'POST',
        body: JSON.stringify(usuario),
        headers: new Headers ({
            'Content-type': 'application/json'
        })
    })

    const response = await fetch(request);
    const data = await response.json();

    alert(`Usuario ${data.nome} cadastrado com sucesso`);
    window.location.href = '/index.html';
}