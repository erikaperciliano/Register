
const formulario = document.getElementById('register');
const listActividades = document.getElementById('listActividades');
let arrayAtividades = [];


console.log(arrayAtividades);

const CreateItem = (nome,idade, dataNascimento) =>{
    let item = {
        nome: nome,
        idade: idade,
        dataNascimento: dataNascimento,
        estado: false
    }

    //guarda dentro do arrayActivities
    arrayAtividades.push(item);

    return item;
}

formulario.addEventListener('submit', (e) => {
    e.preventDefault();
    let nome = document.getElementById('txtName').value; 
    let idade = document.getElementById('txtAge').value;
    let dataNascimento = document.getElementById('txtBirth').value;
    console.log(nome);
    console.log(idade);
    console.log(dataNascimento);
    console.log(arrayAtividades);
})