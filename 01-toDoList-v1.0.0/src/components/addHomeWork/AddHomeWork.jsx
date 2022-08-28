import { useForm } from "../../hooks/useForm";
import "./addHomeWork.css";

let counter = 0;

export const AddHomeWork = ({onNewTask})=>{

  const {description, onInputChange, onResetForm} = useForm({
    description: ''
  });

  const onFormSubmit = (e)=>{
    e.preventDefault();
    if(description.length > 0){
      if(JSON.parse(localStorage.getItem('taskList')).length === 0){
        counter = 0;
      }
      const newTask = {
        // id: new Date().getTime(),
        id: ++counter,
        description: description,
        done: false
      }
      onNewTask && onNewTask(newTask);
      onResetForm();
    }
  }

  return (
    <form onSubmit={onFormSubmit} className="form">
      <input type="text" placeholder="Ingrese una nueva tarea..." className="input-new-task" value={description} onChange={onInputChange} name="description" />
      <button type="submit" className="button-new-task">
        Agregar
      </button>
    </form>
  )
};