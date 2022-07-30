import mongoose from 'mongoose'

const postSchema = mongoose.Schema({

    task: String,
    createdAt: {
        type: Date,
        default: new Date()
    },
    isDone : {
        type: Boolean,
        default : false
    }


})
const todoModel = mongoose.model('todo_list', postSchema)
export default todoModel