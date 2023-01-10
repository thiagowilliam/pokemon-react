import { PokemonProps } from "./types";

export function Pokemom({ detailsPokemon }: PokemonProps) {
  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <span>
        <img
          src={detailsPokemon?.sprites?.front_default}
          alt={detailsPokemon?.name}
          style={{ width: 50, height: 50, display: "flex", marginRight: 20 }}
        />
      </span>
      <span>
        <b>{detailsPokemon?.name}</b> - EXP {detailsPokemon?.base_experience}
      </span>
    </div>
  );
}
