import React, { useState } from "react";
import image1 from "./me.jpeg";
import { Fab, Zoom } from "@mui/material";
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
function TaskItem(props){
    const [mouseOverCheck , setMouseOverCheck] = useState(false);
    const [deleteClicked , setdeleteClicked] = useState(false);
    function handleHover(){
        setMouseOverCheck(true);
    }
    function handleUnHover(){
        setMouseOverCheck(false);
    }
    function deletePressed(){
        setdeleteClicked(true);
        props.onDelete(props.id);
    }
    return   <div className="task-block"  onMouseOver={handleHover} onMouseOut={handleUnHover}>
    
    <div className="task-card" style={{opacity: props.opacityFlag && "30%"}} >
       <div className="card-header-container"><h2>{props.title}</h2> <img src={image1} className="user-photo" ></img> </div>
       <p>{props.content}</p>

    </div>
    <Fab style={{visibility: !mouseOverCheck && "hidden"}} onClick={deletePressed}><DeleteOutlineIcon></DeleteOutlineIcon></Fab>
    </div>;
}
export default TaskItem;