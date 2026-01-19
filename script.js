const todoList = JSON.parse(localStorage.getItem('todoList')) || [];

function renderList() {
    let todoHTML = '';
    for( let i = 0; i < todoList.length; i++){
        const todoObject = todoList[i];
        const {task, dueDate} = todoObject;
        const html = `
            <div class="display">
                <div class="task-display"> ${task} </div>
                <div class="date-display"> ${dueDate} </div>
                <button onclick="deleteTask(${i});" class="delete-btn">Delete</button>
            </div>
        `;
        todoHTML += html;
    }
    document.querySelector('.js-todo-container').innerHTML = todoHTML;
}

function addTask(){
    const taskElement = document.querySelector('.js-input-task');
    const task = taskElement.value.trim();
    
    const dueDateElement = document.querySelector('.js-due-date');
    const dueDate = dueDateElement.value.trim();
    
    if(task && dueDate){
        todoList.push({task, dueDate});
        taskElement.value = '';
        dueDateElement.value = '';
        console.log(todoList);
        renderList();
        saveStorage();
    }
}

function deleteTask(index){
    todoList.splice(index, 1);
    saveStorage();
    renderList();
}

function saveStorage() {
localStorage.setItem('todoList', JSON.stringify(todoList));
}

renderList();
