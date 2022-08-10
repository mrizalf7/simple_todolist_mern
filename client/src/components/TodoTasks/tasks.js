import React from 'react'
import { Grid, CircularProgress,Typography,Container,IconButton } from '@material-ui/core'
import {useSelector} from 'react-redux'
import Task from './TodoTask/task'
import ClearIcon from '@mui/icons-material/Clear'
import useStyles from './styles'
import Clear from '@mui/icons-material/Clear'

const Tasks = ({setCurrentId}) => {
  const tasks = useSelector((stateds)=>stateds.taskss)
  const classes = useStyles()
  console.log(tasks)
  return (
      !tasks.length ? <CircularProgress /> :
       (
          // <Container className = {classes.Naon}>
          <Container className = {classes.Naon}>{tasks.map((task)=>(
            // <Grid key= {task._id}>
            <Task dask = {task} setCurrentId = {setCurrentId} />  
            // </Grid>
            ))}</Container>
         
            // </Container>
     
  )
  )
}
export default Tasks
