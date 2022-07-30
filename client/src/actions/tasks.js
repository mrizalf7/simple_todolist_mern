import * as api from '../api'
import { CREATE, DELETE, DONE, FETCH_ALL } from '../constants/actionTypes'

//Action Creators
export const getTasks = () => async (dispatch)=>{
    try {
        const {data} = await api.fetchTasks()
        dispatch({type: FETCH_ALL,payload: data})
    } catch (error) {

        console.log(error.message)
        
    }
}

export const createTask = (task) => async (dispatched) => {
    try {
      const { data } = await api.createTask(task)
  
      dispatched({ type: CREATE, payload: data })
    } catch (error) {
      console.log(error.message)
    }
  }

  export const deleteTask = (id) => async (dispatch) => {
    try {
      await api.deleteTask(id)

      dispatch({ type: DELETE, payload: id })
    } catch (error) {
      console.log(error)
    }
  }
  
  export const doneTask = (id) => async (dispatch) => {
    try {
      const {data} = await api.doneTask(id)
      // await api.doneTask(isDone)
      dispatch( { type:DONE, payload:data})
    }
    catch (error){
      console.log(error)
    }
  }