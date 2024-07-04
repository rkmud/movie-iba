import React from 'react';
import { AppBar, Box, Typography } from '@mui/material';
import MovieIcon from '@mui/icons-material/Movie';
import { WrapperToolbar, StyledButton } from './styled';
import SearchBar from '../SearchBar';
import { useAppDispatch, useAppSelector } from '@root/hooks/hooks';
import { useNavigate } from 'react-router-dom';
import { setCurrentMovie } from '@root/store/movieSlice';
import { cleanFilteredMovie } from '@root/store/filterSlice';

export default function Header() {
  const { currentMovie } = useAppSelector(state => state.movie);
  const dispatch = useAppDispatch();
  const navigation = useNavigate();
  const handleClick = () => {
    navigation('/');
    dispatch(setCurrentMovie({ movie: null }));
    dispatch(cleanFilteredMovie());
  };
  return (
    <Box>
      <AppBar position="fixed">
        <WrapperToolbar>
          <StyledButton
            size="large"
            edge="start"
            aria-label="open drawer"
            onClick={handleClick}
            disableRipple
          >
            <MovieIcon />
            <Typography
              variant="h6"
              noWrap
              component="div"
            >
              MOVIE
            </Typography>
          </StyledButton>
          {!currentMovie && <SearchBar />}
        </WrapperToolbar>
      </AppBar>
    </Box>
  );
}