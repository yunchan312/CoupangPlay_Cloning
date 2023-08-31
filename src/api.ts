const API_KEY = "df298b7fcfd4e5ab46610192dc9adee7";
const BASE_PATH = "https://api.themoviedb.org/3/";

interface IMovie {
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  title: string;
  overview: string;
}

export interface IGetMoviesResult {
  dates: { maximum: string; minimum: string };
  page: number;
  results: IMovie[];
  total_pages: number;
  total_results: number;
}

export function getMovies() {
  return fetch(`${BASE_PATH}/movie/now_playing?api_key=${API_KEY}`).then(
    (response) => response.json()
  );
}
