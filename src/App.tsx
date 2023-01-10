/*
Consuma a API e liste todos os pokemons da consulta do seguinte endpoint. 
https://pokeapi.co/api/v2/pokemon
Você deve exibir, de cada pokémon:
- imagem
- nome
- experiência
Você pode acessar as informações de cada pokemón individualmente em:
https://pokeapi.co/api/v2/pokemon/:id 
DICA:
imagem => sprites.front_default
experiência => base_experience
EXTRA: se puder ordene por nome.
*/

import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";
import { Pokemom } from "./Pokemon";
import { listPokemonsProps } from "./types";

function App() {
  const [listPokemon, setListPokemon] = useState<listPokemonsProps[]>([]);
  useEffect(() => {
    axios.get("https://pokeapi.co/api/v2/pokemon").then((response) => {
      const sortedArray = [...response.data.results];
      sortedArray.sort((a, b) => {
        return a.name.localeCompare(b.name);
      });

      const promisesArray = sortedArray.map((item) => {
        return axios.get(item.url);
      });

      Promise.all(promisesArray).then((responses: any) => {
        setListPokemon(responses);
      });
    });
  }, []);
  const isloading = listPokemon.length === 0;
  return (
    <div className="App">
      <h1>consumir api pokémon</h1>
      <hr />
      {isloading && <div>Carregando pokemons...</div>}
      {listPokemon.map((item) => (
        <Pokemom key={item.data.name} detailsPokemon={item.data} />
      ))}
    </div>
  );
}

export default App;
