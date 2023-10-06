const express = require('express')
const router = express.Router();

const {
    getAllItems,
    addTask,
    updateTask,
    deleteTask
} = require ('../controllers/todos.js');

router.get('/',getAllItems)
router.post('/',addTask)
router.put('/:id',updateTask)
router.delete('/:id',deleteTask)

module.exports = router;