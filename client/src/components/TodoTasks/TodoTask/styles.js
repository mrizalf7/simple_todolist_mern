// import { makeStyles } from "@material-ui/core"
import { makeStyles } from '@material-ui/core/styles'
import { borderRadius, display } from "@mui/system"

export default makeStyles((theme)=> ({

    mainContainer : {
        display : 'flex',
        flexDirection : "row",
        // width : '50%',
        // backgroundColor : 'green',
        // justifyContent :'center'
    },
    taskList : {
        backgroundColor : 'white',
        borderRadius : '10px',
        width : '65%',
    },
    secondContainer : {
        display : 'flex',
        flexDirection :'row',
        width : '100%',
        justifyContent : 'center'
        // backgroundColor : 'blue',
    },
    // thirdContainer : {
        
    // }


 
    


}))