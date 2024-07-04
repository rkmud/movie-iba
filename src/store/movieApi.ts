import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { BASE_MOVIE_URL, API_KEY_MOVIE } from "@root/constants/url";
import { IMovieData, IMovieItem } from "src/types/types";

export const movieApi = createApi({
    reducerPath: 'movieApi',
    baseQuery: fetchBaseQuery({
        baseUrl: BASE_MOVIE_URL,
        prepareHeaders: (headers) => {
            headers.set('X-API-KEY', API_KEY_MOVIE);
            return headers;
        },
    }),
    endpoints: (build) => ({
        getFulfiledMovie: build.query<IMovieData, { currentPage?: number, ageRating?: string, year?: string, country?: string }>({
            query: ({ currentPage, ageRating, country, year }) => {
                let url = `/v1.4/movie?limit=12&page=${currentPage}`;
                if (ageRating) {
                    url += `&ageRating=${ageRating}`;
                }
                if (year) {
                    url += `&year=${year}`;
                }
                if (country) {
                    url += `&countries.name=${country}`;
                }
                return {
                    url,
                    method: 'GET',
                };
            },
        }),
        getMovie: build.query<IMovieData, { page?: number | null, name?: string[], countries?: string[] }>({
            query: ({ page, name = [], countries = [] }) => {
                let url = `/v1.4/movie?limit=12`;
                if (page !== null) {
                    url += `&page=${page}`;
                }
                if (name.length > 0) {
                    const genresParam = name.map(genre => `genres.name=${encodeURIComponent(genre)}`).join('&');
                    url += `&${genresParam}`;
                }
                if (countries.length > 0) {
                    const countriesParam = countries.map(country => `countries.name=${encodeURIComponent(country)}`).join('&');
                    url += `&${countriesParam}`;
                }
                return {
                    url,
                    method: 'GET',
                };
            },
        }),
        getSearch: build.query<IMovieData, { search: string }>({
            query: (arg) => ({
                url: `/v1.4/movie/search?limit=12&&query=${arg.search}`,
                method: 'GET',
            })
        }),
        getMovieById: build.query<IMovieItem, { id: number }>({
            query: (arg) => ({
                url: `/v1.4/movie/${arg.id}`
            })
        }),
    }),
});

export const { useGetMovieQuery, useGetSearchQuery, useGetMovieByIdQuery, useGetFulfiledMovieQuery } = movieApi;