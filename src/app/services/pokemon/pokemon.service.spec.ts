import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { PokemonMock } from 'src/app/test/mocks/pokemon.mock';
import { environment } from 'src/environments/environment';

import { PokemonService } from './pokemon.service';

describe('PokemonService', () => {
  let service: PokemonService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(PokemonService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should use GET http verb for pokemon list API', () => {
    const pokemonListMock = [new PokemonMock()];

    service.getListOfPokemons(10, 0).subscribe(() => {});

    const request = httpMock.expectOne(`${environment.pokemonBaseURL}?limit=10&offset=0`);
    expect(request.request.method).toBe('GET');
    request.flush(pokemonListMock);
  });

  it('should use GET http verb for pokemon details API', () => {
    const pokemonMock = new PokemonMock();
    service.getPokemonByName('pikachu').subscribe(() => {});

    const request = httpMock.expectOne(`${environment.pokemonBaseURL}/pikachu`);
    expect(request.request.method).toBe('GET');
    request.flush(pokemonMock);
  });
});
