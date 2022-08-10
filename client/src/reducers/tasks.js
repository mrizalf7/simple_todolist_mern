/* eslint-disable import/no-anonymous-default-export */
import {CREATE, UPDATE, DELETE, DONE, FETCH_ALL} from '../constants/actionTypes'
export default (tasks = [], action) => {
  switch (action.type) {
    case FETCH_ALL:
      return action.payload
    case CREATE :
        return [...tasks, action.payload]
    case DELETE:
      return tasks.filter((task) => task._id !== action.payload)
      case DONE:
        return tasks.map((task) =>
          task._id === action.payload._id ? action.payload : task
        )
        case UPDATE:
          return tasks.map((task) =>
          task._id === action.payload._id ? action.payload : task
          )
          default:
            return tasks
  }
}
