import { styled } from '@mui/material/styles';
import { Grid, Button } from '@mui/material';

export const GridWrapper = styled(Grid)({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
})

export const Wrapper = styled('div')(({ theme }) => ({
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '100px 30px 40px 30px',
    maxWidth: '1700px',
    [theme.breakpoints.down('sm')]: {
        padding: '145px 20px 40px 20px ',
      },
}));

export const StyledButton = styled(Button)({
    width: '200px',
    padding: '10px 15px',
    marginTop: '40px'
})

export const MainWrapper = styled('div')({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
})