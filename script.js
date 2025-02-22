let tarefas = [];

function adicionarTarefa() {
    
    //recebe o valor do input do usuário
    const inputTarefa = document.getElementById('inputTarefa');
    let tarefa = inputTarefa.value.trim();
    
    const rest = document.getElementById('mensagem')

    if(tarefa === ""){
        let mensagemErro = "Digite uma tarefa para adiciona-la a sua lista";
        rest.innerHTML = mensagemErro;
        rest.style.color ='#A34743'
   } else{
        let mensagemSucesso = "Tarefa adicionada com sucesso!";
        rest.textContent = mensagemSucesso;
        rest.style.color = "#28a745"
        tarefas.push(tarefa);
        redenrizarTarefas()
    
   }

       //limpar a aerea do input deposi de preenchido
    limparNome();
}

function redenrizarTarefas(){

    const listaTarefas = document.getElementById('listaTarefas')
    listaTarefas.innerHTML = ""

    for (let i = 0 ; i < tarefas.length; i++){
        let novaTarefa =  document.createElement('li');
        novaTarefa.innerHTML = tarefas[i];
        
        let botaoRemover = document.createElement('button')
        botaoRemover.className="remover";
        botaoRemover.innerHTML = "Remover"
        botaoRemover.onclick = () => removerTarefa(i)

        let botaoEditar = document.createElement("button");
        botaoEditar.className = "editar"
        botaoEditar.innerHTML = "Editar"
        botaoEditar.onclick = () => editarTarefa(i)

         
        
        novaTarefa.appendChild(botaoEditar)
        novaTarefa.appendChild(botaoRemover)
        listaTarefas.appendChild(novaTarefa);   


    }
     
}

 
function removerTarefa(i){
    tarefas.splice( i, 1)
    redenrizarTarefas();     

}


function editarTarefa(i) {
    let tarefaEditada =  window.prompt('Edite a tarefa:')
    if(tarefaEditada.trim !== ""){
        tarefas[i] = tarefaEditada
        redenrizarTarefas()
    }

}

function limparLista(){
    if (tarefas.length === 0) {
        const rest = document.getElementById('mensagem');
        let listaVazia = "A lista já está vazia!";
        rest.innerHTML = listaVazia;
        rest.style.color = 'red';
    } else{
    tarefas.length = 0
    redenrizarTarefas()
    const rest = document.getElementById('mensagem')
    let listaRemovida = "Lista de tarefa removida!"
    rest.innerHTML = listaRemovida
    rest.style.color = 'black' 
    }


}


// função é para limpar nome
function limparNome(){
    let limpar = inputTarefa;
    limpar.value = "";
    
    
}

