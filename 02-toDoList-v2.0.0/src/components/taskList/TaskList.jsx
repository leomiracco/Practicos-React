import { useSelector } from 'react-redux';

import { TodoItem } from '../';

import './taskList.css';

export const TaskList = ()=>{

  const toDos = useSelector((state)=> state.toDos);

  return(
    <ul className="unordered-list" >
      {
        toDos.map((toDo)=>{
          return(
            <TodoItem key={toDo.id} toDo={toDo} />
          )
        })
      }
    </ul>
  );
};