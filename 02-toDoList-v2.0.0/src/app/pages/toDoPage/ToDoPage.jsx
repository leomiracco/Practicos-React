import { useSelector } from 'react-redux';

import { TaskList, TodoForm } from '../../../components';

import './toDoPage.css';

export const ToDoPage = ()=>{

  const toDos = useSelector((state)=> state.toDos);
  const pendingTasks = useSelector((state)=> state.toDos.filter((toDo)=> toDo.done === false));

  return (
    <main className="main-todopage">
      <div className="main-container-todopage">

        <h1 className="h1-todo-page">ToDo App</h1>

        <h2 className="h2-todo-page">
          ToDoApp N°: {toDos.length}, Pendientes: {pendingTasks.length}
        </h2>

        <h5 className="h5-todo-page">Doble clic para marcar como tarea realizada.</h5>

        <div className="line-container-todo-page-one"></div>

        <div className="see-tasks-container">
          <TaskList />
        </div>

        <div className="add-task-container">
          <h4>Agregar ToDo</h4>
          
          <div className="line-container-todo-page-two"></div>

          <TodoForm />
        </div>
      
      </div>
    </main>
  );
};