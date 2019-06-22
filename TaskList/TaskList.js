//Task List 
//Task List UI Elements
const elements = {
    form: document.querySelector('#task-form'),
    taskList:  document.querySelector('.collection'),
    clearBtn: document.querySelector('.clear-tasks'),
    filter: document.querySelector('#filter'),
    taskInput: document.querySelector('#task'),
    closeIcon: '<i class="fa fa-remove"></i>',
}

//Task List UI Selectors
const selectors = {
    closeItem: 'delete-item secondary-content',
}

//Functions to be used in the task list UI
const taskFunctions = {
    clearInput: () => {
        return elements.taskInput.value = '';
    },
    addTask: (e) => {
        if(elements.taskInput.value === '') {
            alert('Add a Task!');
        }
        // Create li element
        const li = document.createElement('li');
        // Add class
        li.className = 'collection-item';
        // Create text node and append to li
        li.appendChild(document.createTextNode(elements.taskInput.value));
        // Create new link element
        const link = document.createElement('a');
        // Add class
        link.className = selectors.closeItem;
        // Add icon html
        link.innerHTML = elements.closeIcon;
        // Append the link to li
        li.appendChild(link);

        // Append li to ul
        elements.taskList.appendChild(li);

        taskFunctions.clearInput();

        e.preventDefault();
    },
    removeTask: (e) => {
        // if(e.target ) {

        // }
    }
}

const loadEventListeners = {
    onSubmit: () => {
        return elements.form.addEventListener('submit', taskFunctions.addTask);
    },
    onCancelClick: () => {
        return elements.taskList.addEventListener('click', taskFunctions.removeTask)
    }
}

loadEventListeners.onSubmit();
