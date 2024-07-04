import { styled } from '@mui/material/styles';
import { Card, Typography } from '@mui/material';

export const CardWrapper = styled(Card)(({ theme }) => ({
    width: '365px',
    height: '470px',
    [theme.breakpoints.down('sm')]: {
        width: '320px'
    },
}))
export const CardImage = styled('img')({
    width: '100%',
    height: '280px',
    objectFit: 'cover'
})
export const CardTitle = styled(Typography)(({ theme }) => ({
    marginTop: '10px',
    lineHeight: '20px',
    fontSize: '20px',
    fontWeight: '500',
    [theme.breakpoints.down('sm')]: {
        fontSize: '16px'
    },
    [theme.breakpoints.down('xs')]: {
        fontSize: '18px'
    },
}))
export const CardText = styled(Typography)({
    maxWidth: '300px',
    height: '60px',
    lineHeight: '20px',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'normal',
    marginTop: '10px'
})

export const CardSubtitle = styled(Typography)({
    display: 'block',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    maxWidth: '120px',
});
export const CardDescription = styled(Typography)({
    display: 'flex',
    alignItem: 'center'
})
export const CardWrapperText = styled(Typography)({
    display: 'flex',
    alignItem: 'center',
    paddingRight: '5px'
})