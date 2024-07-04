import React, { useEffect } from "react";
import { useGetMovieQuery, useGetFulfiledMovieQuery } from "@root/store/movieApi"
import { StyledButton, Wrapper } from "./styled";
import { useAppDispatch, useAppSelector } from "@root/hooks/hooks";
import { updatePage, getMovieList } from "@root/store/movieSlice";
import { getFilteredMovie, updateCurrentPage } from "@root/store/filterSlice";
import { MovieList } from "../MovieList";
import { IMovieItem } from "@root/types/types";
import { useNavigate } from "react-router-dom";
import { Error } from "../Error";

export function Main() {
    const { page, movieList, value } = useAppSelector(state => state.movie);
    const dispatch = useAppDispatch();
    const navigation = useNavigate();
    const { ageRating, country, year, currentPage, filteredMovie } = useAppSelector(state => state.filter);
    const { data, error } = useGetMovieQuery({ page: page });
    const { data: fulfilledData } = useGetFulfiledMovieQuery({ currentPage, ageRating, country, year });
    console.log(currentPage)

    const selectedMovie = (movie: IMovieItem) => {
        navigation(`/${movie.id}`, { replace: true });
    };

    useEffect(() => {
        if (data && !ageRating && !country && !year) {
            dispatch(getMovieList({ newMovieList: data.docs }));
        }
    }, [data, dispatch, ageRating, country, year]);

    useEffect(() => {
        if (fulfilledData && (ageRating || country || year)) {
            dispatch(getFilteredMovie({ newFilteredMovie: fulfilledData.docs }));
        }
    }, [fulfilledData, dispatch, ageRating, country, year]);


    const handleClick = () => {
        if (ageRating || country || year) {
            dispatch(updateCurrentPage({ currentPage: currentPage + 1 }));
        } else {
            dispatch(updatePage({ page: page + 1 }));

        }
    };

    let movies: IMovieItem[] = [];
    if (ageRating !== '' || country !== '' || year !== '') {
        movies = filteredMovie || [];
    } else {
        movies = movieList;
    }


    return (
        <Wrapper>

            {error ? <Error value='Ошибка сервера' /> :
                <>

                    <MovieList onClick={selectedMovie} movieList={movies} />
                    {!value && ((ageRating || country || year) && fulfilledData ? fulfilledData?.docs.length >= 10 : movieList.length >= 10) &&
                        <StyledButton
                            variant="contained"
                            onClick={handleClick}
                        >
                            Показать еще...
                        </StyledButton>
                    }
                </>}

        </Wrapper>
    );
}