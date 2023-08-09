import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { PokemonService } from 'src/app/services/pokemon/pokemon.service';
import { PokemonMock } from 'src/app/test/mocks/pokemon.mock';
import { HttpClientTestingModule } from '@angular/common/http/testing'
import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let pokemonServiceMock = jasmine.createSpyObj('PokemonService', ['getPokemonByName', 'getListOfPokemons']);
  
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeComponent ],
      imports: [HttpClientTestingModule],
      providers: [{ provide: PokemonService, useValue: pokemonServiceMock }],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should return pokemon details on search', () => {
    component.searchValue = 'pikachu';
    component.pokemons = [];
    const mockPokemonResponse = of(new PokemonMock());
    pokemonServiceMock.getPokemonByName.and.returnValue(mockPokemonResponse);

    component.searchPokemonByName();
    expect(component.pokemons.length).toEqual(1);
  });

  it('should clear search field/value', () => {
    component.searchValue = 'text and another text';
    const mockPokemonResponse = of([new PokemonMock()]);
    pokemonServiceMock.getListOfPokemons.and.returnValue(mockPokemonResponse);

    component.clearSearch();
    expect(component.searchValue).toEqual('');
  });

});
