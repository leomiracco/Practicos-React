import { createSlice } from '@reduxjs/toolkit';

export const pokemonSlice = createSlice({
  name: 'poke',
  initialState: {
    pokemon: {
      id: null,
      name: '',
      imgURL: ''
    },
    isLoading: false,
    error: false
  },
  reducers: {
    startLoadingPokemon: (state, /* action */ ) => {
      state.error = false;
      state.isLoading = true;
      // sin el uso de redux toolkit, deberiamos
      // hacer:

      // return{
      //   ...state,
      //   isLoading: true
      // }
    },
    setPokemon: (state, {payload})=>{
      state.error = false;
      state.isLoading = false;
      state.pokemon.id = payload.pokemon.id;
      state.pokemon.name = payload.pokemon.name;
      state.pokemon.imgURL = payload.pokemon.sprites.other.dream_world.front_default;
    },
    errorPokemon: (state)=>{
      state.error = true;
    }
  }
});

export const { startLoadingPokemon, setPokemon, errorPokemon } = pokemonSlice.actions;