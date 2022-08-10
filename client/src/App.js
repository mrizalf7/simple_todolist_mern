import React, {useEffect,useState} from 'react'
import {Container, AppBar, Typography, Grow, Grid}
from '@material-ui/core'
import todolist from './images/todolist.png'
import useStyles from './styles'
import {getTasks} from './actions/tasks'
import { useDispatch } from 'react-redux'
import TodoForm from './components/TodoForm/todoForm'
import Tasks from './components/TodoTasks/tasks'

const App = () => {
    const [currentId, setCurrentId] = useState(0)
    const classes = useStyles()
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(getTasks())
    }, [dispatch])
    return (
        <Container className = {classes.kontener}>
            <AppBar className={classes.appBar} position = "static" color="inherit">
            <Typography className={classes.heading} variant = "h2" align ="center">
                To Do List App
            </Typography>
            <img className={classes.image} src={todolist} alt="todolist" height='75' />
            </AppBar>

            {/* <Grow in> */}
            <Container className = {classes.kontener}>
                {/* <Grid> */}
                <TodoForm currentId = {currentId} setCurrentId ={setCurrentId} />
                 <Tasks setCurrentId = {setCurrentId}/>

                {/* </Grid> */}
               
                
            </Container>
            {/* </Grow> */}
            </Container>
     

    )
}

export default App