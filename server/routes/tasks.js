import express from 'express'
import {createTask, updateTask, deleteTask, doneTask, getTasks} from '../controllers/tasks.js'

const router = express.Router()
// https://localhost:100/tasks

router.get('/',getTasks)
router.post('/',createTask)
router.delete('/:id',deleteTask)
router.patch('/:id/doneTask',doneTask)
router.patch('/:id/updatedTask', updateTask)

export default router