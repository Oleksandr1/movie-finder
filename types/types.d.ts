
interface iMovie {
    Title: string;
    Year: string;
    imdbID: string;
    Type: string;
    Poster: string;
    Director?: string;
    Plot?: string;
    Genre?: string;
    Runtime?: string;
    Actors?: string;
    Language?: string;

}

interface iApiResponse {
    Search: iMovie[];
    totalResults: string;
    Response: string;
}
