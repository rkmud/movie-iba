import React from 'react'
import { CardContent, CardActionArea } from '@mui/material';
import { CardImage, CardWrapper, CardTitle, CardText, CardSubtitle, CardDescription, CardWrapperText } from './styled';
import { DEFAULT_IMG } from '@root/constants/url';
import { IMovieItemProps } from './types';

export default function MovieItem(props: IMovieItemProps) {
    const { name, enName, poster, description, year, ageRating, onClick } = props;

    return (
        <CardWrapper onClick={onClick}>
            <CardActionArea>
                <CardContent>
                    <CardImage
                        src={poster || `${DEFAULT_IMG}`}
                        alt="movie"
                    />
                    <CardTitle>
                        {name ? name : enName}
                    </CardTitle>
                    <CardDescription color="text.secondary">
                        {enName && <CardWrapperText><CardSubtitle>{enName} </CardSubtitle>, </CardWrapperText>}
                        {year && <span>{year}</span>}
                        {year && ageRating && <span>, </span>}
                        {ageRating && <span>{ageRating}+</span>}
                    </CardDescription>
                    <CardText color="text.secondary">
                        {description}
                    </CardText>
                </CardContent>
            </CardActionArea>
        </CardWrapper>
    )
}
