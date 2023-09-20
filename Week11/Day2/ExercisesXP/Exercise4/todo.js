class TodoList {
    constructor(task){
        this.tasks = [task]
    };

    addTask(task){
        this.tasks.push(task)
    };

    completeTask(id){
        for (let task of this.tasks) {
            if (task.id === id) {
                task.status = 'Completed'
                break;
            }
        }
    };

    // completeTask(id){
    //     this.tasks = this.tasks.filter(obj=>obj.id !== id)
    // };

    displayTasks(){
        console.log(this.tasks)
    };
}

export default TodoList;