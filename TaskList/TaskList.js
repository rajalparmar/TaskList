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
    closeItem: '.delete-item secondary-content',
}

//Functions to be used in the task list UI
const taskFunctions = {
    getLiElement: () => {
        const liElement = document.createElement('li');
        liElement.className = 'collection-item';
        liElement.appendChild(document.createTextNode(elements.taskInput.value));
        return liElement;
    },
    getLinkElement: () => {
        const link = document.createElement('a');
        link.className = selectors.closeItem; 
        link.innerHTML = elements.closeIcon;
        return link;
    },
    clearInput: () => {
        return elements.taskInput.value = '';
    },
    addTask: (e) => {
        if(elements.taskInput.value === '') {
            alert('Add a Task!');
        }
        //Append the link to li
        taskFunctions.getLiElement().appendChild(taskFunctions.getLinkElement());

        //Append li to ul
        elements.taskList.appendChild(taskFunctions.getLiElement());

        taskFunctions.clearInput();
        e.preventDefault();
    }
}

const loadEventListeners = {
    onSubmit: () => {
        return elements.form.addEventListener('submit', taskFunctions.addTask);
    }
}

loadEventListeners.onSubmit();
