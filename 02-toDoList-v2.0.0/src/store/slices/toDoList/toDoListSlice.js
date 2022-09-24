import { createSlice } from '@reduxjs/toolkit';

export const toDoListSlice = createSlice({
  name: 'toDos',
  initialState: [
    {
      id: new Date().getTime(),
      description: 'Desayunar 8:00',
      done: false
    }
  ],
  reducers: {
    addHomework: (state, {payload}) => {
      const newTask = {
        id: new Date().getTime(),
        description: payload.description,
        done: false
      };
      state.push(newTask);
    },
    removeHomework: (state, {payload}) => {
      return state.filter((toDo)=> toDo.id !== payload.id);
    },
    taskDone: (state, {payload}) => {
      const index = state.findIndex((toDo)=> toDo.id === payload.id);
      state[index].done = payload.done;
    },
    removeAll: (state)=>{
      state.length = 0;
    }
  }
});

export const { addHomework, removeHomework, taskDone, removeAll } = toDoListSlice.actions;