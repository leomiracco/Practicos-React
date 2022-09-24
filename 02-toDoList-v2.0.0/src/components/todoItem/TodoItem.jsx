import { useDispatch, useSelector } from 'react-redux';
import { removeHomework, taskDone } from '../../store/slices/toDoList/toDoListSlice';

import './todoItem.css';

export const TodoItem = ({toDo})=>{

  const dispatch = useDispatch();

  return(
    <li className="li-task" onDoubleClick={()=> dispatch(taskDone({id: toDo.id, done: !toDo.done}))}>
      <span className={`description-span ${ (toDo.done) ? 'done' : ''}`} >
        {toDo.description}
      </span>

      <button className="delete-btn" onClick={() => dispatch(removeHomework({id: toDo.id}))} >
        Borrar
      </button>
    </li>
  );
};