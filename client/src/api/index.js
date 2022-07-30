import axios from 'axios'

const url = 'http://localhost:100/tasks'


export const fetchTasks = () => axios.get(url)
export const createTask = (newTask) => axios.post(url, newTask)
export const deleteTask = (id) => axios.delete(`${url}/${id}`)
export const doneTask = (id) => axios.patch(`${url}/${id}/doneTask`)