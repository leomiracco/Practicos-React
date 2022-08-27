import "./taskItem.css";

export const TaskItem = ({task, onRemoveTask})=>{
  return (
    <li className="things-to-do">
      <span className="id">{task.id} - </span>
      <span className="description">{task.description}</span>
      <button className="" onClick={()=>onRemoveTask(task.id)}>Borrar</button>
    </li>
  )
};