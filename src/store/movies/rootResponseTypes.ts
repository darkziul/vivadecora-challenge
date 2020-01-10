export type DataMovie = {
    votesAverage: number;
    votes: number;
    runtime: string;
    releaseYear: number;
    title: string;
    description: string;
    genre: string;
    picturesBackground: string;
    picturesPoster: string;
};

export type ResponseDiscoverMovies = {
    page:          number;
    total_results: number;
    total_pages:   number;
    results:       DiscoverMoviesResult[];
};

export type DiscoverMoviesResult = {
    popularity:        number;
    id:                number;
    video:             boolean;
    vote_count:        number;
    vote_average:      number;
    title:             string;
    release_date:      Date;
    original_language: string;
    original_title:    string;
    genre_ids:         number[];
    backdrop_path:     string;
    adult:             boolean;
    overview:          string;
    poster_path:       string;
};

export interface ResponseMovie {
    adult:                 boolean;
    backdrop_path:         string;
    belongs_to_collection: null;
    budget:                number;
    genres:                Genre[];
    homepage:              string;
    id:                    number;
    imdb_id:               string;
    original_language:     string;
    original_title:        string;
    overview:              string;
    popularity:            number;
    poster_path:           string;
    production_companies:  ProductionCompany[];
    production_countries:  ProductionCountry[];
    release_date:          Date;
    revenue:               number;
    runtime:               number;
    spoken_languages:      SpokenLanguage[];
    status:                string;
    tagline:               string;
    title:                 string;
    video:                 boolean;
    vote_average:          number;
    vote_count:            number;
}

export interface Genre {
    id:   number;
    name: string;
}

export interface ProductionCompany {
    id:             number;
    logo_path:      null | string;
    name:           string;
    origin_country: string;
}

export interface ProductionCountry {
    iso_3166_1: string;
    name:       string;
}

export interface SpokenLanguage {
    iso_639_1: string;
    name:      string;
}
