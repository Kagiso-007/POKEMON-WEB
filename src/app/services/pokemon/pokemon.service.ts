import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PokemonDTO } from 'src/app/dtos/response/pokemon.dto';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor(private http: HttpClient) { }

  getPokemonByName(name: string): Observable<PokemonDTO> {
    return this.http.get<PokemonDTO>(`${environment.pokemonBaseURL}/${name}`);
  }

  getListOfPokemons(limit: number, offset: number): Observable<PokemonDTO[]> {
    return this.http.get<PokemonDTO[]>(`${environment.pokemonBaseURL}?limit=${limit}&offset=${offset}`);
  }
}
