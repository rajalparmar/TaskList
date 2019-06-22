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

        const listItem = helperFunctions.getListItem();
        //Append listItem to ul
        elements.taskList.appendChild(listItem);
        taskFunctions.clearInput();
        e.preventDefault();
    },
    removeTask: (e) => {
        if (e.target.parentElement.classList.contains('delete-item')) {
            if(confirm('Are you sure you want to delete this item?')) {
                e.target.parentElement.parentElement.remove();
            }
        }
    },
    clearTasks: () => {
        while(elements.taskList.firstChild) {
            elements.taskList.removeChild(elements.taskList.firstChild);
        }
    },
    filterTasks: (e) => {
        const userInput = e.target.value.toLowerCase();

        document.querySelectorAll('.collection-item').forEach((task) => {
            const taskTextContent = task.firstChild.textContent.toLowerCase();
            if(taskTextContent.indexOf(userInput) != -1) {
                console.log(taskTextContent.indexOf(userInput))
                task.style.display = 'block';
            } else {
                task.style.display = 'none';
            }
        });
    }
}
const helperFunctions = {
    addClassName: (element, elementClassName) => {
        return element.className = elementClassName;
    },
    getListItem: () => {
        //create li element 
        const li = document.createElement('li');
        li.className = 'collection-item';
        li.appendChild(document.createTextNode(elements.taskInput.value));
        //create link element
        const link = document.createElement('a');
        link.className = selectors.closeItem;
        link.innerHTML = elements.closeIcon;
        //append link to li
        li.appendChild(link);
        return li;
    },
}

const loadEventListeners = {
    onAddTaskClick: () => {
        return elements.form.addEventListener('submit', taskFunctions.addTask);
    },
    onCancelClick: () => {
        return elements.taskList.addEventListener('click', taskFunctions.removeTask)
    },
    onClearButtonCLick: () => {
        return elements.clearBtn.addEventListener('click', taskFunctions.clearTasks)
    },
    onFilterTasks: () => {
        return elements.filter.addEventListener('keyup', taskFunctions.filterTasks)
    }
}

loadEventListeners.onAddTaskClick();
loadEventListeners.onCancelClick();
loadEventListeners.onClearButtonCLick();
loadEventListeners.onFilterTasks();
