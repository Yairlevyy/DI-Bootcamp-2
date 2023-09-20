import TodoList from "./todo.js";

const todo = new TodoList({id:1,title:'Modify Code',description:'Add script file to the folder',status:'Working...'});

const task2 = {
  id: 2,
  title: 'Debug Issue',
  description: 'Identify and fix the bug in the code',
  status:'Working...'
};

const task3 = {
  id: 3,
  title: 'Write Documentation',
  description: 'Create documentation for the project',
  status:'Working...'
};

const task4 = {
  id: 4,
  title: 'Test New Feature',
  description: 'Test the newly implemented feature for any issues',
  status:'Working...'
};

const task5 = {
  id: 5,
  title: 'Review Pull Request',
  description: 'Review and provide feedback on the pull request',
  status:'Working...'
};

todo.addTask(task2)
todo.addTask(task3)
todo.addTask(task4)
todo.addTask(task5)

todo.completeTask(2)
todo.completeTask(4)

todo.displayTasks();