const API_KEY = "df298b7fcfd4e5ab46610192dc9adee7";
const BASE_PATH = "https://api.themoviedb.org/3/";
const categories = ["now_playing", "popular"];

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

export function getPlayingMovies() {
  return fetch(`${BASE_PATH}/movie/${categories[0]}?api_key=${API_KEY}`).then(
    (response) => response.json()
  );
}

export function getPopularMovies() {
  return fetch(`${BASE_PATH}/movie/${categories[1]}?api_key=${API_KEY}`).then(
    (response) => response.json()
  );
}
