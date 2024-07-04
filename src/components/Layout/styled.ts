import { styled } from '@mui/material/styles';

export const Wrapper = styled('div')({
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column'
});

export const MainContent = styled('div')(({ theme }) => ({
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    padding: '100px 30px 40px 30px',
    maxWidth: '1700px',
    [theme.breakpoints.down('sm')]: {
        padding: '145px 20px 40px 20px ',
    },
    [theme.breakpoints.down('xs')]: {
        padding: '145px 10px 40px 10px ',
    },
}));