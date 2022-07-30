import { makeStyles } from '@material-ui/core/styles';

export default makeStyles (()=>({

    todoListParent : {
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between'
    },

    todoListForm: {
        borderRadius:'15px',
        backgroundColor:'white',
        width :'75%',
    },

    teksPil : {
            color: 'white',
            backgroundColor:'white',
            borderRadius:'10px',
    },
    plusBut : {
    
        backgroundColor:'white',
        borderRadius:'50px',
        marginLeft: '25px',
        marginTop:'10px',
        fontSize: '40px'
    }

}))

