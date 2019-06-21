//Task List UI Variables
const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');
const filter = document.querySelector('#filter');
const taskInput = document.querySelector('#task');
const closeIcon = '<i class="fa fa-remove"></i>';
const closeItem = '.delete-item secondary-content';

function loadEventListeners() {
    return form.addEventListener('submit', addTask);
}

function getLiElement() {
    const liElement = document.createElement('li');
    liElement.className = 'collection-item';
    liElement.appendChild(document.createTextNode(taskInput.value));
    return liElement;
}

function getLinkElement() {
    const link = document.createElement('a');
    link.className = closeItem; 
    link.innerHTML = closeIcon;
    return link;
}

function clearInput() {
    return taskInput.value = '';
}

function addTask(e) {
    if(taskInput.value === '') {
        alert('Add a Task!');
    }
    //Append the link to li
    getLiElement().appendChild(getLinkElement());

    //Append li to ul
    taskList.appendChild(getLiElement());

    clearInput();
    e.preventDefault();
}

loadEventListeners();
