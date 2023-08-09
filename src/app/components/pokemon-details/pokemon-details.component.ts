import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PokemonDTO } from 'src/app/dtos/response/pokemon.dto';
import { RouteName } from 'src/app/enums/route-name';
import { HelperService } from 'src/app/services/helper.service';
import { PokemonService } from 'src/app/services/pokemon/pokemon.service';

@Component({
  selector: 'app-pokemon-details',
  templateUrl: './pokemon-details.component.html',
  styleUrls: ['./pokemon-details.component.scss']
})
export class PokemonDetailsComponent implements OnInit {

  public pokemon!: PokemonDTO;

  constructor(private pokemonService: PokemonService, private route: ActivatedRoute, private router: Router,
    private helperService: HelperService) { }

    ngOnInit() {
      this.helperService.showProgressSpinner();
      this.route.paramMap.subscribe((parameters) => {
        const pokemonName = parameters.get('name');
        if(pokemonName) {
          this.pokemonService.getPokemonByName(pokemonName).subscribe((pokemonDTO) => {
            this.pokemon = pokemonDTO;
            this.helperService.closeProgressSpinner();
          }, (error) => {
            console.error(error);
          });
        } else {
          this.helperService.closeProgressSpinner();
          this.router.navigate([RouteName.HOME]);
        }
      });
    }

}
