import React,{useState} from "react";
import TaskItem from "./TaskItem";
import Header from "./Header";
import TaskCardCreate from "./TaskCardCreate";
function App() {
  const [flagged , setFlagged] = useState(false);
  const [tasks , setTasks] = useState([]);
  var check;
  function handleSumbit(inputText){
    setTasks((prevValue)=>{
      return [...prevValue , inputText];
    });
  }
  function cancelCreate(){
    setFlagged(!flagged);
  }
  function createTaskCard(showCreateTask){
    setFlagged(showCreateTask);
  }
  function handleDelete(id){
    setTasks(tasks.filter((task , index)=>index!==id));
  }
  return (
    <div className="App" >
      <Header btnClicked={createTaskCard} opacityFlag={flagged}></Header>
      {flagged && <TaskCardCreate onSubmit={handleSumbit} onCancel={cancelCreate}></TaskCardCreate>}
      {tasks.map((task , index)=><TaskItem title={task.title} onDelete={handleDelete} content={task.content} key={index} id={index} opacityFlag={flagged}></TaskItem>)}
      

    </div>
  );
}

export default App;
