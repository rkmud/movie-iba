import React from "react";
import { useGetMovieQuery, useGetSearchQuery } from "@root/store/movieApi"
import { Grid } from '@mui/material';
import MovieItem from "../MovieItem";
import { GridWrapper } from "./styled";
import Skeleton from "../Skeleton";
import { useAppSelector } from "@root/hooks/hooks";
import { IMovieItem } from "@root/types/types";
import { useDebonce } from "@root/hooks/hooks";
import { Error } from "../Error";

interface IMovieListProps {
  onClick: (movie: IMovieItem) => void;
  movieList: IMovieItem[];
}
export function MovieList(props: IMovieListProps) {
  const { onClick, movieList } = props;
  const { page, value } = useAppSelector(state => state.movie);
  const { isFetching } = useGetMovieQuery({ page: page });
  const debounceValue = useDebonce(value);

  const { data: searchMovies, isFetching: loading } = useGetSearchQuery({ search: debounceValue }, { skip: !debounceValue });
  const movies = debounceValue ? searchMovies?.docs : movieList;

  return (
    <>
      {searchMovies?.docs.length === 0 && value && <Error value='Ничего не найдено' />}
      {isFetching || loading ? (
        <Grid container spacing={{ xs: 3, sm: 2, md: 3 }} columns={{ xs: 1, sm: 8, md: 12, xl: 16 }}>
          {Array.from(Array(12)).map((_, index) => (
            <GridWrapper item xs={1} sm={4} md={4} xl={4} key={index}>
              <Skeleton />
            </GridWrapper>
          ))}
        </Grid>
      ) : (
        <Grid container spacing={{ xs: 3, sm: 2, md: 3 }} columns={{ xs: 1, sm: 8, md: 12, xl: 16 }} flexGrow={1}>
          {movies && movies?.length > 0 && movies.map((item, index: number) => (
            <GridWrapper item xs={1} sm={4} md={4} xl={4} key={index}>
              <MovieItem
                key={item.id}
                name={item.name}
                enName={item.alternativeName}
                poster={item.poster?.url}
                description={item.description}
                year={item.year}
                ageRating={item.ageRating}
                onClick={() => onClick(item)}
              />
            </GridWrapper>
          ))}
        </Grid>
      )}
    </>
  );
}