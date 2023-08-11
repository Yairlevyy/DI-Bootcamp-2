let input_user = document.querySelector('#task');
let div_global = document.querySelector('.listTasks');
const tasks = [];

function addTask(e) {
    e.preventDefault();
    const task = input_user.value;
    if (task !== '') {
        tasks.push(task)
    };
    renderTasks(task)
};

function renderTasks(task) {
        const div = document.createElement('div');
        const button = document.createElement('button');
        const input = document.createElement('input');
        const label = document.createElement('label');

        div.classList.add('task');
        button.innerHTML = 'X';
        input.type = 'checkbox';
        label.innerHTML = task;

        div.appendChild(button);
        div.appendChild(input);
        div.appendChild(label);
        div_global.appendChild(div);
};