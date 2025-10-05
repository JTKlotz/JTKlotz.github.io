
//Add to Do List functionality

//Create shortcuts to the input field and button
const itemText = document.querySelector('#new-todo')
const addButton = document.querySelector('#todo-button')

//create an array to hold to do list items
let todos = JSON.parse(localStorage.getItem('todo-list')) || []

//get to do list from local storage

const renderToDos = () => {
    console.log(todos) // should NOT be null

    const todoList = document.querySelector('.todo-list')
    todoList.innerHTML = ''
    todos.forEach((todo) => {
        const li = document.createElement('li')
        li.textContent = todo.text
        todoList.append(li)
    }) 
}
renderToDos()



//add new items to array list on click event and save to local storage
addButton.addEventListener('click', () => {
    const newItem = itemText.value
    if(!(newItem == '')) {
        todos.push({text: newItem, completed: false})
        localStorage.setItem('todo-list', JSON.stringify(todos))
        itemText.value = ''  
    }   
    //render to do list items on the page
    renderToDos()  
})



