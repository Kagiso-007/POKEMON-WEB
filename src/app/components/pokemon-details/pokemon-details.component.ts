import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RouteName } from 'src/app/enums/route-name';
import { Pokemon } from 'src/app/models/pokemon/pokemon.model';
import { PokemonService } from 'src/app/services/pokemon/pokemon.service';

@Component({
  selector: 'app-pokemon-details',
  templateUrl: './pokemon-details.component.html',
  styleUrls: ['./pokemon-details.component.scss']
})
export class PokemonDetailsComponent implements OnInit {

  public pokemon!: Pokemon;

  constructor(private pokemonService: PokemonService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.route.paramMap.subscribe((parameters) => {
      const pokemonName = parameters.get('name');
      console.log(parameters);
      if(pokemonName) {
        this.pokemonService.getPokemonByName(pokemonName).subscribe((_pokemon) => {
          this.pokemon = _pokemon;
          console.log(_pokemon.sprites);
        }, (error) => {
          console.error(error);
        });
      } else {
        this.router.navigate([RouteName.HOME]);
      }
    });
  }

}
