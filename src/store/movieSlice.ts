import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IMovieItem } from '@root/types/types';

interface IMovieSlice {
  movieList: IMovieItem[];
  limit: number;
  page: number;
  value: string;
  currentMovie: IMovieItem | null;
}

const initialState: IMovieSlice = {
  movieList: [],
  limit: 12,
  page: 1,
  value: '',
  currentMovie: null,
}

export const movieSlice = createSlice({
  name: 'movie',
  initialState,
  reducers: {
    getMovieList(state, action: PayloadAction<{ newMovieList: IMovieItem[] }>) {
      if (state.page > 1) {
        state.movieList = [...state.movieList, ...action.payload.newMovieList];
      } else {
        state.movieList = action.payload.newMovieList;
      }

    },
    updatePage(state, action: PayloadAction<{ page: number }>) {
      state.page = action.payload.page;
    },
    setSearchMovie(state, action: PayloadAction<{ value: string }>) {
      state.value = action.payload.value;
    },
    setCurrentMovie(state, action: PayloadAction<{ movie: IMovieItem | null }>) {
      state.currentMovie = action.payload.movie;
    },
  },
});

export const { getMovieList, updatePage, setSearchMovie, setCurrentMovie } = movieSlice.actions;

export default movieSlice.reducer;