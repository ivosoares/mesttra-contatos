const urlApi = 'http://localhost:3000/contatos';
let params = new URLSearchParams(document.location.search);
let idUser = params.get('id');

const getUserById = async () => {
    const response = await fetch(`${urlApi}/${idUser}`) //GET;
    const user = await response.json();

    document.getElementById('nome').value = user.nome;
    document.getElementById('cpf').value = user.cpf;
    document.getElementById('idade').value = user.idade;
}

const editUser = async (event) => {
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

    const request = new Request (`${urlApi}/${idUser}`, {
        method: 'PUT',
        body: JSON.stringify(usuario),
        headers: new Headers ({
            'Content-type': 'application/json'
        })
    })

    const response = await fetch(request)//PUT;
    const data = await response.json();

    alert(`Usuario ${data.nome} Editado com sucesso`);
    window.location.href = '/index.html';

}
getUserById();