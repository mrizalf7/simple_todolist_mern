import {Paper,TextField,Container, AppBar} from '@material-ui/core'
import IconButton from '@mui/material/IconButton'
import AddIcon from '@mui/icons-material/Add'
import useStyles from './styles'
import {useState,useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { createTask } from '../../actions/tasks'
import {updateTask } from '../../actions/tasks'

const TodoForm =  ({currentId,setCurrentId}) => {
      const clear = () => {
            setCurrentId(0)
            setTodoTask({  task : '', })
     }

     const task = useSelector((statee) => (currentId ? statee.taskss.find((message) => message._id === currentId) : null))
     
     useEffect(() => {
        if (task) setTodoTask(task)
      }, [task])

    const dispatch = useDispatch()
    const handleSubmit = async (e) =>{

        
        if (currentId === 0){
            if(todoTask.task.length===0){
                alert('Please input some tasks')
                console.log("don't send null values to your to do list")
            }
            else{
                // e.preventDefault()
                dispatch(createTask(todoTask))
                clear()
                console.log(todoTask)
            }
        }
        else{
            if(todoTask.task.length===0){
                alert('Please input some tasks')
                console.log("don't send null values to your to do list")
            }
            else{
                 // e.preventDefault()
                dispatch(updateTask(currentId,todoTask))
                clear()
                console.log(todoTask)
            }
        }

    }

    
    

    const [todoTask,setTodoTask] = useState({
        task : '',
    })
    const handleKey = (e) => {
        if (e.key === 'Enter'){
          // e.preventDefault()
          console.log(e.key)
          handleSubmit()
          setTodoTask({task:''})
        }
      }
    const classes = useStyles()
    return(

        <Container className={classes.todoListParent}>

        {/* <Container className = {classes.todoListForm}> */}
            <TextField className = {classes.teksPil} name='Task' fullWidth variant='filled' size='normal' label='Write your task here' spellCheck = 'false' 
            InputProps={{ disableUnderline: true }}
            value = {todoTask.task} onChange={(e)=> setTodoTask({...todoTask, task: e.target.value})}
            onKeyPress = {handleKey}/>
           
        {/* </Container> */}
            <IconButton sx={{
                 backgroundColor:'white',
                 borderRadius:'50px',
                 marginLeft: '25px',
                 marginTop:'5px',
                 bottom: '3px',
                 left : '5px'
            }}  size='large' onClick={handleSubmit}>
                <AddIcon/>
                </IconButton>
                
        </Container>
    )
}

export default TodoForm
