import { PokemonStatDTO } from "src/app/dtos/response/pokemon-stat.dto";
import { PokemonDTO } from "src/app/dtos/response/pokemon.dto";

export class PokemonMock implements PokemonDTO {
    id = 25;
    name = 'Pikachu';
    baseExperience = 90;
    types = ['Electric'];
    height = 10;
    weight = 98;
    imageUrl = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/25.svg';
    stats: PokemonStatDTO[] = [
        {
            "name": "hp",
            "baseStat": 35
        },
        {
            "name": "attack",
            "baseStat": 55
        },
        {
            "name": "defense",
            "baseStat": 40
        },
        {
            "name": "speed",
            "baseStat": 90
        }
    ];
}