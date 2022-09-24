import { pokemonApi } from "../../../app/api/pokemonApi";
import { setPokemon, startLoadingPokemon, errorPokemon } from "./pokemonSlice";

export const getPokemonThunks = (value = 1)=>{
  return async (dispatch, getState)=>{
    
    try {
      dispatch(startLoadingPokemon());

      const {data} = await pokemonApi.get(`pokemon/${value.toLowerCase().trim()}`);
      dispatch(setPokemon({pokemon: data}));
    
    } catch (error) {
      dispatch(errorPokemon());
    }
  }
}