import { InputBase, List, ListItem } from '@mui/material';
import { styled, alpha } from '@mui/material/styles';

export const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '5px 10px',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(1),
        width: 'auto'
    },
}));

export const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    width: '100%',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        paddingLeft: `calc(1em + ${theme.spacing(1)})`,
        transition: theme.transitions.create('width'),
        [theme.breakpoints.up('sm')]: {
            width: '12ch',
            '&:focus': {
                width: '20ch',
            },
        },
    },
}));

export const StyledList = styled(List)({
    position: 'absolute',
    top: '45px',
    left: '0',
    background: '#fff',
    borderRadius: '0 0 5px 5px',
    width: '100%',
    boxShadow: '0px 2px 1px -1px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12)',
    maxHeight: '200px',
    height: 'auto',
    overflow: 'auto',
    margin: '0',
    padding: '0'
});

export const StyledListItem = styled(ListItem)({
    width: '100%',
    padding: '5px 2px',
    color: '#000',
    fontFamily: 'Roboto',
    '&:hover': {
        background: 'rgba(0, 0, 0, 0.2)'
    }
});