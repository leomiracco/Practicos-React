import { TaskItem } from "../../components";
import "./taskList.css";

export const TaskList = ({taskList = [], onRemoveTask})=>{

  return (
    <ul className="">
      {
        taskList.map((task)=>(
          <TaskItem key={task.id} task={task} onRemoveTask={onRemoveTask} />
        ))
      }
    </ul>
  )
};