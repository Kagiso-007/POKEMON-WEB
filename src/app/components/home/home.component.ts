import { Component, OnInit, ViewChild } from '@angular/core';
import { PokemonService } from 'src/app/services/pokemon/pokemon.service';
import { MatPaginator } from '@angular/material/paginator';
import { merge } from 'rxjs';
import { map, startWith, switchMap } from 'rxjs/operators';
import { PokemonDTO } from 'src/app/dtos/response/pokemon.dto';

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

  constructor(private pokemonService: PokemonService) { }

  ngOnInit() { }

  ngAfterViewInit() {
    merge(this.paginator?.page).pipe(startWith({}), switchMap((pageEvent: any) => {
      this.offset = (pageEvent.pageSize * pageEvent.pageIndex) || 0;
      this.limit = pageEvent.pageSize || this.paginator.pageSize;
      return this.pokemonService.getListOfPokemons(this.limit, this.offset);
    }), map(data => {
      return data;
    })).subscribe((data) => this.pokemons = data);
  }

  searchPokemonByName() {
    if(this.searchValue) {
      this.pokemonService.getPokemonByName(this.searchValue.toLowerCase()).subscribe((value) => {
        this.pokemons = [value];
      }, (error) => {
        if(error.status == 404) {
          this.pokemons = [];
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
