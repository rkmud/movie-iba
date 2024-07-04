import React, { useState } from 'react'
import { CardText, Wrapper, StyledItem, StyledButton } from './styled';
import { List, ListItemText, ListItemAvatar, Avatar, Typography } from "@mui/material";
import { useAppSelector } from '@root/hooks/hooks';

export const ActorsList = () => {
    const { currentMovie } = useAppSelector(state => state.movie);
    const [visibleActors, setVisiblaActors] = useState(5);
    const openList = () => {
        setVisiblaActors(visibleActors + 5);
    };
    const closeList = () => {
        setVisiblaActors(5);
    };

    return (
        <>
            {currentMovie &&
                <CardText color="text.secondary">
                    Актеры:
                    {currentMovie.persons ?
                        <Wrapper>
                            <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                                {currentMovie.persons.slice(0, visibleActors).map(actor => (
                                    <StyledItem key={actor.id}>
                                        <ListItemAvatar>
                                            <Avatar alt="actor" src={actor.photo} />
                                        </ListItemAvatar>
                                        <ListItemText
                                            color="text.primary"
                                            primary={actor.name || actor.enName}
                                            secondary={
                                                <Typography
                                                    sx={{ display: 'inline' }}
                                                    component="span"
                                                    color="text.secondary"
                                                >
                                                    {actor.description}
                                                </Typography>
                                            }
                                        />
                                    </StyledItem>
                                ))}
                            </List>
                            {currentMovie.persons.length > 5 &&
                                <>
                                    {currentMovie.persons.length > visibleActors ?
                                        <StyledButton variant="outlined" onClick={openList}>Показать еще</StyledButton> :
                                        <StyledButton variant="outlined" onClick={closeList}>Скрыть</StyledButton>
                                    }
                                </>
                            }

                        </Wrapper>
                        :
                        <>информация отсуствует ...</>
                    }
                </CardText>
            }
        </>

    )
}
