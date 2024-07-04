import { styled } from '@mui/material/styles';
import { Typography, ListItem, Button } from '@mui/material';

export const CardText = styled(Typography)({
    padding: '0'
});

export const Wrapper = styled('div')({
    display: 'flex',
    flexDirection: 'column',
    gap: '5px',
    marginBottom: '10px'
});

export const StyledItem = styled(ListItem)({
    margin: '0 0 5px 0',
    padding: '0'
});

export const StyledButton = styled(Button)({
    width: '150px'
});
