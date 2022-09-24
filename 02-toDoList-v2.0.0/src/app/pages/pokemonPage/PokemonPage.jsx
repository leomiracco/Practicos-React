import { useDispatch, useSelector } from 'react-redux';

import { ShowPoke } from '../../../components';

import { useForm } from '../../../hooks/useForm';
import { getPokemonThunks } from '../../../store/slices/pokemon';

import './pokemonPage.css';

export const PokemonPage = ()=>{

  const dispatch = useDispatch();

  const {isLoading, error, pokemon = {}} = useSelector((state)=> state.pokemon);
  
  const {searchPoke, onInputChange, onResetForm} = useForm({
    searchPoke: ''
  });

  const onSubmit = (e)=>{
    e.preventDefault();
    
    if(searchPoke.length === 0) return;

    dispatch(getPokemonThunks(searchPoke));

    onResetForm();
  }

  return (
    <main className="main-pokepage">
      <div className="main-container-pokepage">

        <h1 className="h1-title-poke">Pokémons</h1>

        <div className="line-container-poke-one"></div>

        {/* <div className="loading">
          {isLoading ? 'True' : 'False'}
        </div> */}

        <form onSubmit={onSubmit} className="form-pokepage">

          <label htmlFor="">Buscar Poke (id o nombre):</label>
          <input type="text" name="searchPoke" className="poke-input" placeholder="Busca tu pokémon..." value={searchPoke} onChange={onInputChange} />

          <button type="submit">
            Buscar
          </button>

        </form>

        {
          (pokemon.id !== null && !error) ? (
            <div className="show-poke-container">
              <div className="img-container">
                <img src={pokemon.imgURL} alt="img" />
              </div>
              
              <p className="id-name-poke" >#{pokemon.id} <span>{pokemon.name}</span>
              </p>
            </div>
          ) : (error) ? (
            <div className="error-container">
              <p className="error-message">Id o Nombre incorrecto!</p>
            </div>
          ) : (
            <div className="standby-container">
              <p className="waiting-message">Esperando tu consulta crack!</p>
            </div>
          )
        }
      
      </div>
    </main>
  );
};