export interface PokemonListResponseDTO {
    count: number,
    next: string,
    results: PokemonResult[];
}

export interface PokemonResult{
    name: string;
    url: string
}
