import todoModel from '../models/todoModel.js'
// import mongoose from 'mongoose'

export const getTasks = async (req,res) => {
    try {
        const todoTask = await todoModel.find()
        console.log(todoTask)
        res.status(200).json(todoTask)
    } catch (error) {
        res.status(404).json({message:error})
    }
}

export const createTask = async (req,res) => {
    const task = req.body
    const newTask = new todoModel(task)
    try {
        await newTask.save()
        res.status(201).json(newTask)
    } catch (error) {
        res.status(409).json({message:error})
    }
}
// parameter name doesn't matter but the sequence matters.

export const deleteTask = async (req,res) => {
    const {id} = req.params

    // if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`)

    await todoModel.findByIdAndRemove(id)

    res.json({message: 'Post deleted successfully'})

}

export const doneTask = async (req,res) => {
    const {id} = req.params

    // try {
        const task = await todoModel.findById(id)
        const doneTasked = await todoModel.findByIdAndUpdate(id, { isDone:!task.isDone})
        console.log(doneTasked)
        res.json(doneTasked)
        
    // } catch (error) {
        // res.status(404).json({message:error})
    // }

}