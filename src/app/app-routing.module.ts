import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./components/home/home.component";
import { PokemonDetailsComponent } from "./components/pokemon-details/pokemon-details.component";

const routes: Routes = [
    { 
        path: 'pokemons',
        component: HomeComponent
    },
    {
        path: 'pokemon-details/:name',
        component: PokemonDetailsComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }