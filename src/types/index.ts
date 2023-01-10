export interface PokemonProps {
  detailsPokemon: {
    name?: string;
    url?: any;
    base_experience?: number;
    sprites?: {
      front_default: string;
    };
  };
}

export interface PokemonDetailsProps {
  name: string;
  base_experience: number;
  sprites: {
    front_default: string;
  };
}

export interface listPokemonsProps {
  data: {
    name: string;
    url: string;
  };
}
[];
