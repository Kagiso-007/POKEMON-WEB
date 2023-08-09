import { Component, OnInit, ViewChild } from '@angular/core';
import { PokemonService } from 'src/app/services/pokemon/pokemon.service';
import { MatPaginator } from '@angular/material/paginator';
import { merge } from 'rxjs';
import { map, startWith, switchMap } from 'rxjs/operators';
import { PokemonDTO } from 'src/app/dtos/response/pokemon.dto';
import { HelperService } from 'src/app/services/helper.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  
  public pokemons: PokemonDTO[] = [];
  public displayedColumns: string[] = ['id', 'image', 'name', 'url'];
  public isLoading = false;
  public searchValue!: string;

  public offset!: number;
  public limit!: number;

  constructor(private pokemonService: PokemonService, private helperService: HelperService) { }

  ngOnInit() { }

  ngAfterViewInit() {
    merge(this.paginator?.page).pipe(startWith({}), switchMap((pageEvent: any) => {
      this.helperService.showProgressSpinner();
      this.offset = (pageEvent.pageSize * pageEvent.pageIndex) || 0;
      this.limit = pageEvent.pageSize || this.paginator.pageSize;
      return this.pokemonService.getListOfPokemons(this.limit, this.offset);
    }), map(data => {
      return data;
    })).subscribe((data) => {
      this.pokemons = data;
      this.helperService.closeProgressSpinner();
    });
  }

  searchPokemonByName() {
    this.helperService.showProgressSpinner();

    if(this.searchValue) {
      this.pokemonService.getPokemonByName(this.searchValue.toLowerCase()).subscribe((value) => {
        this.pokemons = [value];
        this.helperService.closeProgressSpinner();
      }, (error) => {
        if(error.status == 404) {
          this.pokemons = [];
          this.helperService.closeProgressSpinner();
        }
      });
    }
  }

  searchFieldIsActive() {
    return this.searchValue?.length > 0;
  }

  clearSearch() {
    this.searchValue = '';
    this.pokemonService.getListOfPokemons(this.limit, this.offset).subscribe((_pokemons) => {
      this.pokemons = _pokemons;
    });
  }
}
