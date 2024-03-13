import React,{useState} from "react";
import image1 from "./me.jpeg";
import SendRoundedIcon from '@mui/icons-material/SendRounded';
import { Fab, Zoom } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';

function TaskCardCreate(props){
  const  [inputText , setInputText]= useState({title:"" , content:""});
  function handleChange(event){
    const {name,value} = event.target;
    setInputText((prevValue)=>{
      return {...prevValue , [name]:value};
    });
  }
  function handleSumbit(){
   
    props.onSubmit(inputText);
    setInputText({title:"" , content:""});
   
  }
    return <div className="adjust-width"><Zoom in={true}>
    <div className="create-card" id="create-card"  >
    <div className="create-card-header">
        <input name="title" placeholder="Title" type="text" value={inputText.title} onChange={handleChange} ></input>
        <button className="close-button" onClick={()=>{
          props.onCancel();
        }} style={{color:"#d9d9d9" , backgroundColor:"transparent"}}><CloseIcon></CloseIcon></button>
      </div>
        <textarea  name="content" placeholder="Enter a task" onChange={handleChange} value={inputText.content} />
        <div className="create-footer"><img src={image1} className="user-photo"></img>
         <Fab onClick={handleSumbit} className="submit-button"><SendRoundedIcon></SendRoundedIcon></Fab>
      </div>
  
    </div>
      </Zoom></div>;
}
export default TaskCardCreate;