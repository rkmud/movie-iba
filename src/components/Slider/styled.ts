import { Typography, CircularProgress } from '@mui/material';
import { styled } from '@mui/material/styles';

export const SliderImg = styled('img')(({ theme }) => ({
    width: '180px',
    [theme.breakpoints.up('sm')]: {
        width: '150px'
    },
}));

export const SliderText = styled(Typography)({
    fontSize: '16px',
    whiteSpace: 'wrap',
    marginTop: '5px'
});

export const Loading = styled(CircularProgress)(({ theme }) => ({
    width: '300px',
    height: '300px',
    [theme.breakpoints.down('sm')]: {
        width: '200px',
        height: '200px'
    },
}));