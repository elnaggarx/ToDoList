import React,{useState} from "react";
import AddCircleIcon from '@mui/icons-material/AddCircle';
import Fab from '@mui/material/Fab';
function Header(props){
    const [showCreateTask , setShowCreateTask] = useState(false);
    return <div className="main-header" style={{opacity: props.opacityFlag && "30%"}}>
    <h1 >Tasks</h1><Fab onClick={()=>{
        setShowCreateTask(true);
        props.btnClicked(showCreateTask);
    }}><AddCircleIcon></AddCircleIcon></Fab>
    </div>;
}
export default Header;