// grabbing elemens
const mainContainer = document.querySelector('.container');
const enterTaskInput = document.getElementById('enter-task');
const addTaskBtn = document.getElementById('add_task_btn');
const taskContainer = document.getElementById('task-container');


addTaskBtn.addEventListener('click', () => {
    
    if(enterTaskInput.value === "") {
        alert("Please add a task");
    }

    taskContainer.innerHTML = `
    <span class="task-list">
        <input type="checkbox" class="delete-box"/>
        ${enterTaskInput.value}
    </span>`;
})