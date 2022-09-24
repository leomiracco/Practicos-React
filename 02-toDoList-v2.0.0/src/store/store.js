import {configureStore} from '@reduxjs/toolkit';

import { pokemonSlice } from './slices/pokemon';
import { toDoListSlice } from './slices/toDoList';

export const store = configureStore({
  reducer: {
    toDos: toDoListSlice.reducer,
    pokemon: pokemonSlice.reducer
  }
});