import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PokemonListResponseDTO } from 'src/app/dtos/response/pokemon-list.dto';
import { Pokemon } from 'src/app/models/pokemon/pokemon.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor(private http: HttpClient) { }

  getListOfPokemons(limit: number): Observable<PokemonListResponseDTO> {
    return this.http.get<PokemonListResponseDTO>(`${environment.pokemonBaseURL}/pokemon?limit=${limit}`);
  }

  getPokemonByName(name: string): Observable<Pokemon> {
    return this.http.get<Pokemon>(`${environment.pokemonBaseURL}/pokemon/${name}`);
  }
}
