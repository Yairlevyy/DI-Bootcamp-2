let tasks = [
  {
    id: 1,
    task: "Complete assignment",
    completed: false
  },
  {
    id: 2,
    task: "Go grocery shopping",
    completed: false
  },
  {
    id: 3,
    task: "Read a book",
    completed: false
  }
];

const getAllItems = (req,res) =>{
    res.json(tasks)
};

const addTask = (req,res) => {
    const {task} = req.body;
    tasks.push(task)
    res.send('Task was added successfully!')
}

const updateTask = (req,res) => {
    const id = Number(req.params.id);
    const index = tasks.findIndex(item=>item.id == id)
    if (!index) return res.status(404).json('Task not found!')
    tasks[index].completed = true;
    res.send('Task was updated successfully!')
}

const deleteTask = (req,res)=>{
    const id = Number(req.params.id)
    const index = tasks.findIndex(item=>item.id == id)
    if (!index) return res.status(404).json('Task not found!')
    tasks = tasks.filter(item=>item.id !== id)
    res.send('Task was deleted successfully!')
    console.log(tasks)
}

module.exports = {
    getAllItems,
    addTask,
    updateTask,
    deleteTask
}