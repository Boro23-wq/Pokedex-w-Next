export interface PokiResultDTO {
    name: string; 
    url: string;
}

export interface StatDTO {
    base_stat: number;
    effort: number;
    stat:
    {
        name: string;
        url: string;
    }
}

export interface AbilityDTO {
    ability: {
        name: string;
        url: string;
    }
}

export interface TypeDTO {
    slot: number,
    type: {
        name: string;
        url: string;
    }
}

export interface PokiProfileDTO {
    id?: string;
    name?: string;
    species?: PokiResultDTO;
    image?: string;
    height?: number;
    weight?: number;
    base_exp?: number;
    stats?: StatDTO[];
    abilities?: AbilityDTO[];
    types?: TypeDTO[];
}