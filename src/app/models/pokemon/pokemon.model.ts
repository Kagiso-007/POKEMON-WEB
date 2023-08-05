import { Sprites } from "./pokemon-sprite.model";
import { BaseStat } from "./pokemon-stat.model";

export class Pokemon {
    id: number;
    name: string;
    sprites: Sprites;
    stats: BaseStat[];
    height: number;
    weight: number;

    constructor(pokemonResponse: any) {
        this.id = pokemonResponse.id;
        this.name = pokemonResponse.name;
        this.sprites = pokemonResponse.sprites;
        this.stats = pokemonResponse.stats;
        this.height = pokemonResponse.height;
        this.weight = pokemonResponse.weight;
    }
}
