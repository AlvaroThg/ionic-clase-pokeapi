export interface PokemonListResponse {
    count: number;
    next: string;
    previous: any;
    results: BasicPokemon[]; // Cambiado para diferenciar entre lista y detalles
  }
  
  export interface BasicPokemon {
    name: string;
    url: string; // Solo contiene la URL del Pokémon en la lista inicial
  }
  
  export interface Pokemon {
    name: string;
    image: string;
    abilities: string[];
    types: string[];
    weight: number;
    height: number;
  }
  