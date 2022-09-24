import { TaskItem } from "../";
import "./taskList.css";

export const TaskList = ({taskList = [], onRemoveTask})=>{

  return (
    <ul className="unordered-list">
      {
        taskList.map((task)=>(
          <TaskItem key={task.id} task={task} onRemoveTask={onRemoveTask} />
        ))
      }
    </ul>
  )
};