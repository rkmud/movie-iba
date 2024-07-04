import { styled } from '@mui/material/styles';
import { Card, Typography, Button, CircularProgress } from '@mui/material';

export const CardImg = styled('img')(({ theme }) => ({
    width: '250px',
    [theme.breakpoints.down('sm')]: {
        width: '150px'
    },
}));
export const CardWrapper = styled(Card)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
    padding: '50px',
    width: '100%',
    alignItems: 'center',
    [theme.breakpoints.down('sm')]: {
        padding: '25px'
    },
}));

export const CardContent = styled('div')(({ theme }) => ({
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    gap: '30px',
    [theme.breakpoints.down('sm')]: {
        flexDirection: 'column',
        alighItem: 'center'
    },
}));

export const CardTitle = styled(Typography)(({ theme }) => ({
    marginTop: '10px',
    lineHeight: '20px',
    fontSize: '22px',
    fontWeight: '500',
    [theme.breakpoints.down('sm')]: {
        fontSize: '20px'
    },
    [theme.breakpoints.down('xs')]: {
        fontSize: '18px'
    },
}));

export const CardText = styled(Typography)(({ theme }) => ({
    fontSize: '16px',
    [theme.breakpoints.down('sm')]: {
        fontSize: '14px'
    },
    [theme.breakpoints.down('xs')]: {
        fontSize: '12px'
    },
}));

export const CardDescription = styled(Typography)({
    display: 'flex',
    alignItem: 'center'
});

export const CardWrapperText = styled(Typography)({
    display: 'flex',
    alignItem: 'center',
    paddingRight: '5px'
});

export const Wrapper = styled('div')(({ theme }) => ({
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    minWidth: '900px',
    maxWidth: '1300px',
    minHeight: '100vh',
    margin: '0 auto',
    [theme.breakpoints.down(1000)]: {
        width: '100%',
        minWidth: 'unset',
    },
}));

export const StyledButton = styled(Button)({
    width: '200px',
    padding: '10px 15px',
    marginTop: '30px'
});

export const Loading = styled(CircularProgress)(({ theme }) => ({
    width: '300px',
    height: '300px',
    [theme.breakpoints.down('sm')]: {
        width: '200px',
        height: '200px'
    },
}));

export const CardSection = styled('div')(({ theme }) => ({
    minWidth: '300px',
    maxWidth: '500px',
    [theme.breakpoints.down('sm')]: {
        minWidth: '250px',
    },
}));
