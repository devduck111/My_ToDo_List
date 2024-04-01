const addtodoBtn = document.getElementById('addtodo')
const toDoContainer = document.getElementById('toDoContainer')
const inputField = document.getElementById('inputField')

loadTasks()

function addTask(){
    const task =  inputField.value.trim()
    if(task){
        createTaskElement(task)
        inputField.value = ''
        saveTasks()
    } else{
        alert('Please Enter a Lovely Task just like You <3~!')
    }
}

addtodoBtn.addEventListener('click', ()=>{addTask()})

function createTaskElement(task){
    const listItem = document.createElement('li')
    listItem.textContent = task
    toDoContainer.appendChild(listItem)
    listItem.classList.add('paragragh-styling')
    listItem.style.listStyle= "none"

        listItem.addEventListener('click',()=>{
        listItem.style.textDecoration= "line-through"
        listItem.style.border= "3px solid #d41c59a1"
    })
    listItem.addEventListener('dblclick',()=>{
        toDoContainer.removeChild(listItem)
        saveTasks()
    })
    
}

function saveTasks() {
    let tasks = []
    toDoContainer.querySelectorAll('li').forEach(function(item){
        tasks.push(item.textContent.trim())
    })

    localStorage.setItem('tasks', JSON.stringify(tasks))
}

function loadTasks() {
    const tasks = JSON.parse(localStorage.getItem('tasks')) || []

    tasks.forEach(createTaskElement)
}