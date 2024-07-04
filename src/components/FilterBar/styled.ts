import { styled } from '@mui/material/styles';
import { IconButton, Button } from '@mui/material';

export const Form = styled('form')({
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
    fontFamily: 'Roboto'
})

export const Item = styled('div')({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    minWidth: '270px',
    maxWidth: '400px',
})

export const Label = styled('label')({
    fontSize: '16px',
    color: 'rgba(0, 0, 0, 0.5)'
})

export const Select = styled('select')({
    padding: '7px 20px 7px 10px',
    minWidth: '200px',
    borderRadius: '5px',
    border: '1px solid rgba(0, 0, 0, 0.2)'
})

export const ButtonForm = styled('button')(({ theme }) => ({
    width: '150px',
    padding: '10px 15px',
    marginTop: '30px',
    background: '#1976d2',
    borderRadius: '5px',
    color: '#fff',
    border: 'none',
    margin: '0',
    fontFamily: 'Roboto',
    fontWeight: '500',
    [theme.breakpoints.down('sm')]: {
        width: '100%'
    },

}));

export const ButtonWrapper = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: '10px',
    marginTop: '10px',
    [theme.breakpoints.down('sm')]: {
        flexDirection: 'column',
        alignItems: 'flex-start',
    },

}));

export const StyledButton = styled(Button)({
    padding: '7px 20px 7px 10px',
    minWidth: '180px',
});

export const StyledButtonIcon = styled(IconButton)({
    padding: '0'
});

export const WrapperForm = styled('div')(() => ({
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    boxShadow: '0px 2px 1px -1px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12)',
    borderRadius: '10px',
    gap: '10px',
    padding: '20px 10px 0px 20px'
}));

export const Wrapper = styled('div')({
    marginBottom: '20px'
});

