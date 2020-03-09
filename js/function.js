const formulario = document.getElementById('register');
const listActividades = document.getElementById('listActividades');
let arrayAtividades = [];


//console.log(arrayAtividades);

const CriarItem = (nome,idade, dataNascimento) =>{
    let item = {
        nome: nome,
        idade: idade,
        dataNascimento: dataNascimento,
        estado: false
    }

       arrayAtividades.push(item);

    return item;
}

const GuardarInformacoes = () =>{
    localStorage.setItem('Informacoes',JSON.stringify(arrayAtividades)); //converte valores em javascript para uma String  JSON

    lerLocalStorage();
}

const lerLocalStorage = () =>{
    listActividades.innerHTML = ''; // ao recarregar a pág, limpa tudo da lista de Atividades
    arrayAtividades = JSON.parse(localStorage.getItem('Informacoes'));// tranforma o json anterior em uma string / pega os dados salvos no localStorage
    
    //ao limpar o histórico, ao add 1 novo registro, dará um erro por este estar nul, por isso o tratamento
    if(arrayAtividades === null){
        arrayAtividades = [];
    }else{
        arrayAtividades.forEach(element =>{
            listActividades.innerHTML += ` <div class="alert alert-danger"
            role="alert"><i class="material-icons" float-left mr-3>accessibility</i><b>
            Nome:${element.nome} | Idade: ${element.idade} |  Dt Nascimento: ${element.dataNascimento}</b> | Estado: ${element.estado}<span class="float-rigth"><i class="material-icons">done</i>
            <i class="material-icons">delete</i></span></div>`
        })
    }
}

const DeletarCadastro = (nome, idade, dataNascimento) =>{
  // console.log(`${nome}  ${idade}  ${dataNascimento} Deletado!`);

    let indexArray;
    arrayAtividades.forEach((elemento, index) => {
        if(elemento.nome === nome && elemento.idade === idade && elemento.dataNascimento === dataNascimento){
            indexArray = index;
        }       
    })
    arrayAtividades.splice(indexArray,1); // excluí o índice que o usuário deseja eliminar
    GuardarInformacoes();
}

formulario.addEventListener('submit', (e) => {
    e.preventDefault();

    let nome = document.getElementById('txtName').value; 
    let idade = document.getElementById('txtAge').value;
    let dataNascimento = document.getElementById('txtBirth').value;


    CriarItem(nome, idade, dataNascimento);
    //console.log(arrayAtividades);
    GuardarInformacoes();

    formulario.reset(); //limpa o formulário após o envio das inf.
})

//é acionado quando todo o HTML for completamente carregado e analisado, sem aguardar pelo CSS
document.addEventListener('DOMContentLoaded', lerLocalStorage);

listActividades.addEventListener('click', (e) => {
    e.preventDefault();

    //console.log(e.target.innerHTML)

    if(e.target.innerHTML === 'done' || e.target.innerHTML === 'delete'){
       //console.log('Feito a Esclusão!');
       let conteudo = e.path[2].childNodes[1].innerHTML;
       if(e.target.innerHTML === 'delete'){
        //ação deletar
        DeletarCadastro(conteudo);
       }if(e.target.innerHTML === 'done'){
        //ação editar
        }   
    } 
})