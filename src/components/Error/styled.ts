import { styled } from '@mui/material/styles';
import WarningOutlinedIcon from '@mui/icons-material/WarningOutlined';
import { Typography } from '@mui/material';

export const Wrapper = styled('div')({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    flexGrow: '1',
    justifyContent: 'center',
    width: '100%'
});

export const Icon = styled(WarningOutlinedIcon)(({ theme }) => ({
    width: '150px',
    height: '150px',
    [theme.breakpoints.down('sm')]: {
        width: '100px',
        height: '100px'
    },
}));

export const ErrorMessage = styled(Typography)(({ theme }) => ({
    fontSize: '24px',
    [theme.breakpoints.down('sm')]: {
        fontSize: '16px'
    },
}));