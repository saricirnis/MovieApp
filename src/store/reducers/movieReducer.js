import {
  GET_MOVIE_RECOMMENDATIONS,
  GET_SIMILAR_MOVIES,
  GET_LATEST_MOVIES,
  GET_POPULAR_MOVIES,
  GET_UPCOMING_MOVIES,
  GET_NOW_PLAYING_MOVIES,
  GET_TOP_RATED_MOVIES,
  GET_MOVIE_TRENDING,
  GET_MOVIE_GENRES,
  GET_MOVIE_BY_ID,
  GET_MOVIE_TRAILER,
  GET_MOVIE_ACTORS,
  GET_TRENDING,
  SEARCH_MOVIES,
  SET_MOVIE_ERROR,
  CLEAR_MOVIE,
} from "../actions/movieTypes";

export const initialState = {
  movieRecommendations: null,
  similarMovies: null,
  latestMovies: null,
  popularMovies: null,
  upcomingMovies: null,
  nowPlayingMovies: null,
  topRatedMovies: null,
  movieTrending: null,
  movieGenres: null,
  searchMoviesShows: null,
  movieById: null,
  movieTrailer: null,
  movieActors: null,
  getTrending: null,
  error: "test",
};

const movieReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_MOVIE_ERROR:
      return {
        ...state,
        error: action.payload,
        searchMoviesShows: null,
      };
    case GET_MOVIE_RECOMMENDATIONS:
      return {
        ...state,
        movieRecommendations: action.payload,
        error: "",
      };
    case GET_POPULAR_MOVIES:
      return {
        ...state,
        popularMovies: action.payload,
        error: "",
      };
    case GET_LATEST_MOVIES:
      return {
        ...state,
        latestMovies: action.payload,
        erorr: "",
      };
    case GET_SIMILAR_MOVIES:
      return {
        ...state,
        similarMovies: action.payload,
        error: "",
      };
    case GET_UPCOMING_MOVIES:
      return {
        ...state,
        upcomingMovies: action.payload,
        error: "",
      };
    case GET_NOW_PLAYING_MOVIES:
      return {
        ...state,
        nowPlayingMovies: action.payload,
        error: "",
      };
    case GET_TOP_RATED_MOVIES:
      return {
        ...state,
        topRatedMovies: action.payload,
        error: "",
      };
    case GET_MOVIE_TRENDING:
      return {
        ...state,
        movieTrending: action.payload,
        error: "",
      };
    case GET_MOVIE_GENRES:
      return {
        ...state,
        movieGenres: action.payload,
        error: "",
      };
    case GET_MOVIE_BY_ID:
      return {
        ...state,
        movieById: action.payload,
        error: "",
      };
    case SEARCH_MOVIES:
      return {
        ...state,
        searchMoviesShows: action.payload,
        error: "",
      };
    case GET_MOVIE_TRAILER:
      return {
        ...state,
        movieTrailer: action.payload,
        error: "",
      };
    case GET_MOVIE_ACTORS:
      return {
        ...state,
        movieActors: action.payload,
        error: "",
      };
    case GET_TRENDING:
      return {
        ...state,
        getTrending: action.payload,
        error: "",
      };
    case CLEAR_MOVIE:
      return {
        ...state,
        movieById: null,
        movieActors: null,
        movieTrailer: null,
        similarMovies: null,
      };
    default:
      return state;
  }
};

export default movieReducer;
