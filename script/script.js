alert("Seja bem vindo!")

// funçao que adiciona tarefa
function addTask(){

    //Titulo de tarefa
    const taskTitle = document.querySelector("#task-title").value
   if(taskTitle){
    //Clona o template
    const template = document.querySelector(".template")
    
    const newTask = template.cloneNode(true)
    
    // adiciona o titulo
    newTask.querySelector(".task-title").textContent = taskTitle

    //remover as classes desnecessarias

    newTask.classList.remove("template")
    newTask.classList.remove("hide")

    //Adiciona tarefa na lista
    const list = document.querySelector("#task-list")
    
    list.appendChild(newTask)

    //adicionar evento de remover
    const removeBtn = newTask.querySelector(".remove-btn").addEventListener("click", function() {
        removeTask(this)
    })

    //adicionar evento de completar tarefa
    const doneBtn = newTask.querySelector(".done-btn").addEventListener("click", function(){
        completeTask(this)
    })



    //LIMPAR TEXTO
    document.querySelector("#task-title").value = ""
 }    

}

//Funcao de remover tarefa
function removeTask(task){
    task.parentNode.remove(true)
}

//Funcao de Completar tarefa
function completeTask(task){
    const taskToComplete = task.parentNode
    taskToComplete.classList.toggle("done")
    
}

//evento de adicionar tarefa
const addBtn = document.querySelector("#add-btn")

addBtn.addEventListener("click" , function(e) {
    e.preventDefault()
    
   addTask();
    
})