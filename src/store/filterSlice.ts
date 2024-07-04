import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IMovieItem } from '@root/types/types';

export interface IFilterData {
    year: string;
    ageRating: string;
    country: string;
    filteredMovie: IMovieItem[];
    currentPage: number;
};

const initialState: IFilterData = {
    year: '',
    ageRating: '',
    country: '',
    filteredMovie: [],
    currentPage: 1,
};

const filterSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {
        setFilter: (state, action: PayloadAction<IFilterData>) => {
            state.year = action.payload.year;
            state.ageRating = action.payload.ageRating;
            state.country = action.payload.country;
        },
        getFilteredMovie(state, action: PayloadAction<{ newFilteredMovie: IMovieItem[] }>) {
            if (state.currentPage > 1) {
                state.filteredMovie = [...state.filteredMovie, ...action.payload.newFilteredMovie];
            } else {
                state.filteredMovie = action.payload.newFilteredMovie;
            }
        },
        cleanFilteredMovie(state) {
            state.filteredMovie = [];
            state.year = '';
            state.ageRating = '';
            state.country = '';
            state.currentPage = 1;
        },
        updateCurrentPage(state, action: PayloadAction<{ currentPage: number }>) {
            state.currentPage = action.payload.currentPage;
        },

    }
})

export const { setFilter, getFilteredMovie, cleanFilteredMovie, updateCurrentPage } = filterSlice.actions;
export default filterSlice.reducer;