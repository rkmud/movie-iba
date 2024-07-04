import React from 'react';
import { Wrapper, Icon, ErrorMessage } from './styled';

interface IErrorProps {
    value: string;
}
export const Error = (props: IErrorProps) => {
    const { value } = props;
    return (
        <Wrapper>
            <Icon color="disabled" />
            <ErrorMessage variant='h6' color="text.disabled">{value}</ErrorMessage>
        </Wrapper>
    )
}
