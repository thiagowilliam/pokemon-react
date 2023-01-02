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

interface listPokemonsProps {
  name: string;
}
[];

function App() {
  const [listPokemon, setListPokemon] = useState<listPokemonsProps[]>([]);
  useEffect(() => {
    axios.get("https://pokeapi.co/api/v2/pokemon").then((response) => {
      const sortedArray = [...response.data.results];
      sortedArray.sort((a, b) => {
        return a.name.localeCompare(b.name);
      });

      setListPokemon(sortedArray);
    });
  }, []);
  return (
    <div className="App">
      <h1>consumir api pokémon</h1>
      <hr />
      {listPokemon.map((item) => (
        <Pokemom key={item.name} data={item} />
      ))}
    </div>
  );
}

interface PokemonProps {
  data: {
    name?: string;
    url?: any;
  };
}

interface PokemonDetailsProps {
  name: string;
  base_experience: number;
  sprites: {
    front_default: string;
  };
}

function Pokemom({ data }: PokemonProps) {
  const [detailsPokemon, setDetailsPokemon] =
    useState<PokemonDetailsProps | null>(null);

  useEffect(() => {
    axios.get(data.url).then((response) => setDetailsPokemon(response.data));
  }, []);

  if (detailsPokemon === null) {
    return <div>-</div>;
  }
  return (
    <div style={{ display: "flex", alignItems: "center", marginRight: 20 }}>
      <span>
        <img
          src={detailsPokemon.sprites.front_default}
          alt={detailsPokemon.name}
          style={{ width: 50, height: 50, display: "flex" }}
        />
      </span>
      <span>
        <b>{detailsPokemon.name}</b> - EXP {detailsPokemon.base_experience}
      </span>
    </div>
  );
}

export default App;
