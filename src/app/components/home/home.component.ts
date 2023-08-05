import { Component, OnInit } from '@angular/core';
import { PokemonResult } from 'src/app/dtos/response/pokemon-list.dto';
import { PokemonService } from 'src/app/services/pokemon/pokemon.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  
  public pokemons: PokemonResult[];
  
  constructor(private pokemonService: PokemonService) { 
    this.pokemons = [];
  }

  ngOnInit() {
    this.pokemonService.getListOfPokemons(10).subscribe((responseDTO) => {
      this.pokemons = responseDTO.results;
      console.log(this.pokemons.length);
    }, (error) => {
      console.error(error.message);
    });
  }
}
