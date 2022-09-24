import { useDispatch, useSelector } from 'react-redux';

import './showPoke.css';

export const ShowPoke = ()=>{

  const {isLoading, pokemon = {}} = useSelector((state)=> state.pokemon);

  return(
    <div className="show-poke-container">
      <div className="img-container">
        <img src={pokemon.imgURL} alt="img" />
      </div>
      
      <p className="id-name-poke" >#{pokemon.id} <span>{pokemon.name}</span>
      </p>
    </div>
  );
};