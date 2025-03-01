import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, forkJoin } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { PokemonListResponse, Pokemon, BasicPokemon } from '../interfaces/pokemon.interface';

@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  private apiURL = 'https://pokeapi.co/api/v2/pokemon';

  constructor(private http: HttpClient) {}

  getPokemonList(limit: number = 100): Observable<Pokemon[]> {
    return this.http.get<PokemonListResponse>(`${this.apiURL}?limit=${limit}`).pipe(
      switchMap((response) => {
        
        const pokemonDetails$ = response.results.map((pokemon: BasicPokemon) =>
          this.http.get<any>(pokemon.url).pipe(
            map((details) => ({
              name: details.name,
              image: details.sprites.other['official-artwork'].front_default, 
              height: details.height,
              weight: details.weight,
              types: details.types.map((t: any) => t.type.name), 
              abilities: details.abilities.map((a: any) => a.ability.name), 
            }))
          )
        );

        return forkJoin(pokemonDetails$);
      })
    );
  }
}
