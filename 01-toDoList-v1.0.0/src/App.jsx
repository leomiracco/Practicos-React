import { useEffect, useReducer } from "react";
import { AddHomeWork, DeleteAllButton, TaskList } from "./components";
import { taskListReducer } from "./reducer/taskListReducer";
import './styles/globalStyles.css';

const initialState = ()=>{
}

const init = ()=>{
  return JSON.parse(localStorage.getItem('taskList')) || [];
}

export const App = ()=> {

  const [taskList, dispatch] = useReducer(taskListReducer, initialState, init);

  useEffect(()=>{
    localStorage.setItem('taskList', JSON.stringify(taskList));
  }), [taskList];

  const handleNewTask = (task)=>{
    const action = {
      type: 'addTask',
      payload: task
    }
    dispatch(action);
  }

  const handleRemoveTask = (id)=>{
    const action = {
      type: 'removeTask',
      payload: id
    }
    dispatch(action);
  }

  const handleRemoveAllTask = ()=>{
    const action = {
      type: 'removeAllTask'
    }
    dispatch(action);
  }

  return (
    <>
      <h1>Lista de tareas:</h1>
      <div className="">
        <div className="">
          <TaskList taskList={taskList} onRemoveTask={handleRemoveTask} />
        </div>

        <h4>Tareas a realizar</h4>
        <div className="app-container">
          <AddHomeWork onNewTask={handleNewTask} />
          <DeleteAllButton onRemoveAllTask={handleRemoveAllTask} />
        </div>
      </div>
    </>
  )
}