import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import './style.scss';
import { FreeMode, Pagination } from 'swiper/modules';
import { useGetMovieQuery } from "@root/store/movieApi";
import { useAppDispatch, useAppSelector } from "@root/hooks/hooks";
import { IMovieItem } from "@root/types/types";
import { SliderImg, SliderText, Loading } from './styled';
import { useNavigate } from 'react-router-dom';
import { setCurrentMovie } from '@root/store/movieSlice';
import { DEFAULT_IMG } from '@root/constants/url';

export const Slider = () => {
    const dispatch = useAppDispatch();
    const navigation = useNavigate();
    const { currentMovie } = useAppSelector(state => state.movie);
    const genreNames = currentMovie?.genres.map(genre => genre.name) || [];
    const countryNames = currentMovie?.countries.map(country => country.name) || [];
    const { data, isLoading } = useGetMovieQuery({ page: null, name: genreNames, countries: countryNames });
    const openMovie = (movie: IMovieItem) => {
        dispatch(setCurrentMovie({ movie: movie }));
        navigation(`/${movie.id}`, { replace: true });
    };

    return (
        <Swiper
            spaceBetween={30}
            freeMode={true}
            pagination={{
                clickable: true,
            }}
            breakpoints={{
                640: {
                    slidesPerView: 1,
                },
                768: {
                    slidesPerView: 2,
                },
                1024: {
                    slidesPerView: 4,
                },
                1200: {
                    slidesPerView: 5,
                }
            }}
            modules={[FreeMode, Pagination]}
            className="mySwiper"
        >
            {!isLoading && data ? data.docs.map((movie: IMovieItem) => (
                <SwiperSlide key={movie.id} onClick={() => openMovie(movie)}>
                    <SliderImg src={movie.poster?.url || `${DEFAULT_IMG}`} alt="" />
                    <SliderText>{movie.name || movie.alternativeName}</SliderText>
                </SwiperSlide>
            )) :
                <Loading />
            }
        </Swiper>
    )
}
