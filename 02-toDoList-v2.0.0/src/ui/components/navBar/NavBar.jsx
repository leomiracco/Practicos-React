import { NavLink } from 'react-router-dom';

import './navBar.css';

export const NavBar = ()=>{

  return (
    <nav className="navbar">

      <div className="image-container">
        <NavLink to="/">
          <img src="../../../assets/img/logo-white.png" alt="logo-work" />
        </NavLink>
      </div>

      <div className="navigation-container">
        <NavLink className={({isActive})=>
          `todo ${isActive ? 'active' : ''}`
          }
          to="/toDo"
        >
          ToDo
        </NavLink>

        <NavLink className={({isActive})=>
          `pokemon ${isActive ? 'active' : ''}`
          }
          to="/pokemon"
        >
          Pokémon
        </NavLink>

      </div>

    </nav>
  );
};