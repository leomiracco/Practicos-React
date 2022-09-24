import { useDispatch } from 'react-redux';

import { useForm } from '../../hooks/useForm';
import { addHomework, removeAll } from '../../store/slices/toDoList';

import './todoForm.css';

export const TodoForm = ()=>{

  const dispatch = useDispatch();

  const {description, onInputChange, onResetForm} = useForm({
    description: ''
  });

  const onSubmit = (e)=>{
    e.preventDefault();

    if(description.length === 0) return;

    dispatch(
      addHomework({
        description: description
      })
    );

    onResetForm();
  };

  return(
    <>
      <form onSubmit={onSubmit}>
        <input type="text" name="description" className="description-input" id="description" value={description} placeholder="¿Qué tengo que hacer?" onChange={onInputChange} />

        <div className="btn-container">

          <button type="submit" className="buttons newTask-btn">
            Agregar Tarea
          </button>

          <button type="button" className="buttons removeTask-btn" onClick={() => dispatch(removeAll())}>
            Borrar tareas
          </button>
          
        </div>
      </form>
    </>
  );
};