import { Component, OnInit, ViewChild } from '@angular/core';
import { PokemonResult } from 'src/app/dtos/response/pokemon-list.dto';
import { PokemonService } from 'src/app/services/pokemon/pokemon.service';
import { MatPaginator } from '@angular/material/paginator';
import { Pokemon } from 'src/app/models/pokemon/pokemon.model';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  
  public pokemons!: MatTableDataSource<PokemonResult>;
  public displayedColumns: string[] = ['id', 'image', 'name', 'url'];

  constructor(private pokemonService: PokemonService) { }

  ngOnInit() {
    this.pokemonService.getListOfPokemons(15).subscribe((responseDTO) => {
      this.pokemons = new MatTableDataSource<PokemonResult>(responseDTO.results);
    }, (error) => {
      console.error(error.message);
    });
  }

  ngAfterViewInit() {
    //to do: remove condition and add a loader
    if(this.pokemons)
      this.pokemons.paginator = this.paginator;
  }
}
