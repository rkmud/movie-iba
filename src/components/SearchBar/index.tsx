import React, { useState, useEffect } from "react";
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';
import { Search, StyledInputBase, StyledList, StyledListItem } from "./styled";
import { useAppDispatch, useAppSelector } from "@root/hooks/hooks";
import { setSearchMovie } from "@root/store/movieSlice";
import { IMovieItem } from "@root/types/types";
import { useGetSearchQuery } from "@root/store/movieApi";
import Fuse from 'fuse.js';

function SearchBar() {
    const { value } = useAppSelector(state => state.movie);
    const dispatch = useAppDispatch();

    const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = e.target.value;
        dispatch(setSearchMovie({ value: newValue }));

    };

    const itemClickHandler = (e: React.MouseEvent<HTMLElement>) => {
        const target = e.target as HTMLElement;
        dispatch(setSearchMovie({ value: target.textContent || "" }));
    };

    const onClickClean = () => {
        dispatch(setSearchMovie({ value: '' }));
    };

    return (
        <div>
            <Search>
                <SearchIcon />
                <StyledInputBase
                    value={value}
                    placeholder="Поиск…"
                    inputProps={{ 'aria-label': 'search' }}
                    onChange={(e) => onChangeInput(e as React.ChangeEvent<HTMLInputElement>)}
                />
                {value &&
                    <CloseIcon
                        onClick={onClickClean}
                    />
                }
            </Search>
        </div>
    );
}

export default SearchBar;