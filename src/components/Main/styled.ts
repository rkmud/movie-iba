import { styled } from '@mui/material/styles';
import { Button, CircularProgress } from '@mui/material';

export const Wrapper = styled('div')({
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    maxWidth: '1700px',
    flexGrow: '1'
});

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