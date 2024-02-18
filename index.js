const mainContainer = document.querySelector('.container');
const enterTaskInput = document.getElementById('enter-task');
const addTaskBtn = document.getElementById('add_task_btn');
const taskContainer = document.querySelector('.task-container');

function addTask() {
    const enterTaskInputValue = enterTaskInput.value;

    if (enterTaskInputValue === "") {
        alert("Please add a task");
        return;
    }

    // Create a new p element to wrap the task content
    const taskParagraph = document.createElement('p');
    taskParagraph.classList.add('list-items');

    // Add the input value and a delete button to the paragraph
    taskParagraph.innerHTML = `
        <input type="checkbox" class="delete-checkbox">
        ${enterTaskInputValue}
    `;

    // Append the task paragraph to the task container
    taskContainer.appendChild(taskParagraph);

    // Clear the input field after adding a task
    enterTaskInput.value = "";

    // Add event listener for checkbox click
    const deleteCheckbox = taskParagraph.querySelector('.delete-checkbox');
    deleteCheckbox.addEventListener('change', () => {
        if (deleteCheckbox.checked) {
            // Remove the task paragraph if the checkbox is checked
            taskContainer.removeChild(taskParagraph);
        }
    });
}

// Event listener for the button click
addTaskBtn.addEventListener('click', addTask);

// Event listener for the Enter key
enterTaskInput.addEventListener('keydown', (event) => {
    if (event.key === "Enter") {
        addTask();
    }
});

