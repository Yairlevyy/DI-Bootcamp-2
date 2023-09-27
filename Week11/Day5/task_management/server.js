const express = require('express');
const app = express();
const fs = require('fs');

app.listen(5000,()=>{
    console.log('server is running on port 5000')
})

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/tasks',(req,res)=>{
    const dataRaw = fs.readFileSync('tasks.json','utf-8')
    const data = JSON.parse(dataRaw)
    res.json(data.tasks)
})

app.get('/tasks/:id',(req,res)=>{
    const dataRaw = fs.readFileSync('tasks.json','utf-8')
    const data = JSON.parse(dataRaw)
    const tasks = data.tasks
    const id = Number(req.params.id)
    const task = tasks.find(item=>item.id === id)
    if (!task) return res.status(404).send('Sorry, this task was not found');
    res.json(task)
})

app.post('/tasks',(req,res)=>{
    const {id,title,description} = req.body;
    const new_task = {id,title,description};
    const dataRaw = fs.readFileSync('tasks.json','utf-8')
    const data = JSON.parse(dataRaw)
    data.tasks.push(new_task)
    const updatedData = JSON.stringify(data, null, 2);
    fs.writeFileSync('tasks.json', updatedData, 'utf-8');
    res.send('The task was add succesfully !')
})

app.put('/tasks/:id',(req,res)=>{
    const {title,description} = req.body;
    const id = Number(req.params.id);
    const dataRaw = fs.readFileSync('tasks.json','utf-8')
    const data = JSON.parse(dataRaw)
    const taskToUpdate = data.tasks.find(task => task.id === id);
    if (!taskToUpdate) return res.status(404).send('Task not found with the specified ID.');
    taskToUpdate.title = title;
    taskToUpdate.description = description;
    const updatedData = JSON.stringify(data, null, 2);
    fs.writeFileSync('tasks.json', updatedData, 'utf-8');
    res.send('Task updated successfully.');
})

app.delete('/tasks/:id',(req,res)=>{
    const id = Number(req.params.id);
    const dataRaw = fs.readFileSync('tasks.json','utf-8')
    const data = JSON.parse(dataRaw)
    const taskIndex = data.tasks.findIndex(task => task.id === id);
    if (taskIndex == -1) return res.status(404).send('Task not found with the specified ID.');
    data.tasks.splice(taskIndex, 1);
    const updatedData = JSON.stringify(data, null, 2);
    fs.writeFileSync('tasks.json', updatedData, 'utf-8');
    res.send('The task was succesfully deleted !')
})
