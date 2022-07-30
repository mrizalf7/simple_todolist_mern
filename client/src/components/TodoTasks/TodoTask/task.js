import React, { useState,useEffect } from 'react'
import {useSelector} from 'react-redux'
import axios from 'axios'
import { Card, CardActions, CardContent, CardMedia, Button, Typography,Container,Grid,Avatar,
IconButton } from '@material-ui/core/'
import EditIcon from '@mui/icons-material/Edit'
import Checkbox from '@mui/material/Checkbox';
// import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt'
// import MoreHorizIcon from '@material-ui/icons/MoreHoriz'
// import moment from 'moment'
import ClearIcon from '@mui/icons-material/Clear'
import useStyles from './styles'
import { styled } from '@mui/material/styles'
import Paper from '@mui/material/Paper'
import Delete from '@material-ui/icons/Delete'
import { useDispatch } from 'react-redux'
import { deleteTask } from '../../../actions/tasks'
import { doneTask } from '../../../actions/tasks';
// import { deletePost,likePost } from '../../../actions/tasks'

function Task ({dask}) {

  const StyledPaper = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'white' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    width: '50%',
    textAlign : 'center',
    noWrap : true,
    color: theme.palette.text.primary,
    borderRadius : 20
  }))
  
  // const tasks = useSelector((stated)=>stated.tasks)
  // const taskMap = tasks.map((task)=>(  task.isDone ))
 

  const [checked, setChecked] = useState({
    isDone : false
  })

  const handleChange = (e) => {
    // e.preventDefault()
    setChecked(e.target.checked)
    dispatch(doneTask(dask._id))
  }

  const dispatch = useDispatch()
  const classes = useStyles()
 

    return (
      //  <Container className = {classes.mainContainer}>
      //   <Typography className = {classes.taskList}>
      //     {task.task}
      //   </Typography>
      //  </Container>


      // <Grid sx={{ flexGrow: 2 }} container spacing={0}>
      <Container className= {classes.mainContainer}>

      <Container className = {classes.secondContainer}>

      <StyledPaper
      sx={{
        my: 1,
        mx: 'auto',
        p: 1.5,
      }}>


      <Grid>
        <Grid item>
        </Grid>
        <Grid item xs>
          <Typography pargraph noWrap sx= {{
            justifyContent : 'center',
            backgroundColor : 'white',
            maxWidth : '10px'
          }}>{dask.task}</Typography>
        </Grid>
      </Grid>
    </StyledPaper>
       {/* <Container className = {classes.thirdContainer}> */}

    <IconButton sx={{
      backgroundColor:'white',
      borderRadius:'50px',
      marginLeft: '25px',
      marginTop:'5px',
      bottom: '3px',
      left : '5px'
    }}  size='large' >
    <Checkbox onChange={handleChange} checked  = {checked}/>
    </IconButton>



       <IconButton sx={{
         backgroundColor:'white',
         borderRadius:'50px',
         marginLeft: '25px',
         marginTop:'5px',
         bottom: '3px',
         left : '5px'
        }}  size='large' onClick = {()=> dispatch(deleteTask(dask._id))}>
       <ClearIcon/>
       </IconButton>
          {/* </Container> */}
          </Container>
        </Container>

// {/* </Grid> */}


      
    )
}
export default Task