import { makeStyles } from '@material-ui/core/styles'

export default makeStyles((theme) => ({

 
  appBar: {
    borderRadius: 15,
    margin: '30px 0',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: 'rgba(255, 155, 0, 0.8)',
  }, 
  heading: {
    // color: 'rgba(255, 255, 255, 0.8)',
    color : 'white'
  },
  image: {
    marginLeft: '15px',
  },
  [theme.breakpoints.down('sm')]:{

    mainContainer : {
      flexDirection : 'column-reverse'
    }
  },
  kontener : {
    '& .MuiContainer-root': {
     paddingLeft: 0,
     paddingRight : 0
  }
}

}));