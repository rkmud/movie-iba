import React, { useEffect } from "react";
import { CardTitle, CardText, CardDescription, CardWrapperText, StyledButton, CardImg, CardWrapper, CardContent, CardSection, Wrapper, Loading } from './styled';
import { useNavigate, useParams } from "react-router-dom";
import { useAppDispatch, } from "@root/hooks/hooks";
import { setCurrentMovie } from "@root/store/movieSlice";
import { Slider } from "../Slider";
import { ActorsList } from "../ActorsList";
import { useGetMovieByIdQuery } from "@root/store/movieApi";
import { DEFAULT_IMG } from "@root/constants/url";

export function MovieModal() {
    const dispatch = useAppDispatch();
    const navigation = useNavigate();
    const { id } = useParams<{ id: string }>();
    const { data, isFetching, error } = useGetMovieByIdQuery({ id: Number(id) })

    const closeMovie = () => {
        dispatch(setCurrentMovie({ movie: null }));
        navigation('/');
    }
    useEffect(() => {
        if (data) {
            dispatch(setCurrentMovie({ movie: data }));
        }
    }, [data, dispatch]);

    return (
        <Wrapper>
            {isFetching && <Loading />}
            {data &&
                <CardWrapper>

                    <>
                        <CardContent>
                            <CardImg src={data.poster?.url || `${DEFAULT_IMG}`} />
                            <CardSection>
                                <CardTitle>
                                    {data.name || data.alternativeName}
                                </CardTitle>
                                <CardDescription color="text.secondary">
                                    {data.alternativeName && <CardWrapperText>{data.alternativeName}, </CardWrapperText>}
                                    {data.year}
                                </CardDescription>
                                <CardText color="text.secondary">
                                    Описание: {data.description || 'информация отсуствует'}
                                </CardText>
                                <CardText color="text.secondary">
                                    Рейтинг: {data.rating.kp || 'информация отсуствует'}
                                </CardText>
                                <ActorsList />
                                {data.isSeries &&
                                    <CardText color="text.secondary">
                                        Сезоны: информация отсуствует
                                    </CardText>
                                }
                                <CardText color="text.secondary">
                                    Отзвывы: {data.votes.kp || 'информация отсуствует'}
                                </CardText>
                            </CardSection>
                        </CardContent>
                        <Slider />
                        <StyledButton
                            variant="contained"
                            onClick={closeMovie}
                        >
                            Назад
                        </StyledButton>
                    </>
                </CardWrapper>
            }
        </Wrapper >
    );
}