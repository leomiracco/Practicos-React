import { Navigate, Route, Routes } from "react-router-dom";

import { HomePage, PokemonPage, ToDoPage } from "../app/pages";
import { NavBar } from "../ui/components/navBar/NavBar";

export const AppRouter = ()=>{

  return (
    <>
      <NavBar />

      <Routes>
        <Route path="/" element={ <HomePage /> } />
        <Route path="/toDo" element={ <ToDoPage /> } />
        <Route path="/pokemon" element={ <PokemonPage /> } />
        <Route path="/*" element={ <Navigate to={"/"} /> } />
      </Routes>
    </>
  );
};