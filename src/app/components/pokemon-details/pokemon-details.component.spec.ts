import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from "@angular/router/testing";

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PokemonMock } from 'src/app/test/mocks/pokemon.mock';

import { PokemonDetailsComponent } from './pokemon-details.component';

describe('PokemonDetailsComponent', () => {
  let component: PokemonDetailsComponent;
  let fixture: ComponentFixture<PokemonDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PokemonDetailsComponent ],
      imports: [ HttpClientTestingModule, RouterTestingModule ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemonDetailsComponent);
    component = fixture.componentInstance;
    component.pokemon = new PokemonMock();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render pokemon name', () => {
    const pokemonNmae = fixture.debugElement.nativeElement.querySelector('mat-card-title').innerHTML.trim();
    expect(pokemonNmae).toEqual(component.pokemon.name);
  });
});
