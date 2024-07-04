import { useAppDispatch } from '@root/hooks/hooks';
import { cleanFilteredMovie, setFilter } from '@root/store/filterSlice';
import React, { useState } from 'react'
import { useForm } from "react-hook-form";
import { years, ageRatings, countries } from './filter';
import { Item, Label, Select, ButtonForm, Form, ButtonWrapper, StyledButton, Wrapper, StyledButtonIcon, WrapperForm } from './styled';
import { IFilterData } from '@root/store/filterSlice';
import CancelIcon from '@mui/icons-material/Cancel';

export const FilterBar = () => {
    const { register, handleSubmit, reset } = useForm<IFilterData>();
    const [opened, setOpened] = useState(false);
    const dispatch = useAppDispatch();
    const onSubmit = (data: IFilterData) => {
        dispatch(setFilter(data));
    };

    const cleanForm = () => {
        reset();
        dispatch(cleanFilteredMovie());
    };

    const openFilter = () => {
        setOpened(true);
    }

    const closeFilter = () => {
        setOpened(false);
        reset();
        dispatch(cleanFilteredMovie());
    }

    return (
        <Wrapper>
            {!opened && <StyledButton variant="contained" onClick={openFilter}>Фильтрация</StyledButton>}
            {opened &&
                <WrapperForm>

                    <Form onSubmit={handleSubmit(onSubmit)} style={{ marginBottom: '40px' }}>
                        <Item>
                            <Label htmlFor="year">Год</Label>
                            <Select id="year" {...register('year')}>
                                {years.map((year, index) => (
                                    <option key={index} value={year.value}>{year.label}</option>
                                ))}
                            </Select>
                        </Item>
                        <Item>
                            <Label htmlFor="ageRating">Возраст</Label>
                            <Select id="ageRating" {...register('ageRating')}>
                                {ageRatings.map((age, index) => (
                                    <option key={index} value={age.value}>{age.label}</option>
                                ))}
                            </Select>
                        </Item>
                        <Item>
                            <Label htmlFor="country">Страна</Label>
                            <Select id="country" {...register('country')}>
                                {countries.map((country, index) => (
                                    <option key={index} value={country.value}>{country.label}</option>
                                ))}
                            </Select>
                        </Item>
                        <ButtonWrapper>

                            <ButtonForm type="submit">Выбрать</ButtonForm>
                            <ButtonForm type="button" onClick={() => cleanForm()}>Очистить</ButtonForm>
                        </ButtonWrapper>
                    </Form>
                    <StyledButtonIcon onClick={closeFilter}>
                        <CancelIcon />
                    </StyledButtonIcon>


                </WrapperForm>
            }

        </Wrapper>

    )
}
