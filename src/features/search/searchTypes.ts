export type SearchQuery = {
    searchTerm: string;
};

export type SearchResultItem = {
    Title: string;
    Type: string;
    Year: string;
    Poster: string;
    imdbID: string;
};

export type SearchResultPage = {
    Response: string;
    totalResults: string;
    Search: SearchResultItem[];
    Error?: string;
};

export type DetailsQuery = {
    imdbID: string | undefined;
};

export type DetailsResult = {
    Actors: string;
    Awards: string;
    BoxOffice: string;
    Country: string;
    DVD: string;
    Director: string;
    Genre: string;
    Language: string;
    Metascore: string;
    Plot: string;
    Poster: string;
    Production: string;
    Rated: string;
    Ratings: { Source: string; Value: string }[];
    Released: string;
    Response: string;
    Runtime: string;
    Title: string;
    Type: string;
    Website: string;
    Writer: string;
    Year: string;
    imdbID: string;
    imdbRating: string;
    imdbVotes: string;
};