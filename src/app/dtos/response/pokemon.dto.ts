import { PokemonStatDTO } from "./pokemon-stat.dto";

export interface PokemonDTO {
    id: number;
    name: string;
    imageUrl: string;
    types: string[];
    weight: number;
    height: number;
    baseExperience: number;
    stats: PokemonStatDTO[];
}
