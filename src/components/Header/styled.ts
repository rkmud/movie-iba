import { Toolbar, Link, IconButton } from '@mui/material';
import { styled } from '@mui/material/styles';

export const WrapperToolbar = styled(Toolbar)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '5px 10px',
  [theme.breakpoints.down('sm')]: {
    alignItems: 'flex-start',
    flexWrap: 'wrap',
    flexDirection: 'column',
    padding: '10px 15px',
  },
}));

export const Wrapper = styled(Link)(() => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  margin: 0,
  padding: 0,
  color: 'white',
  textDecoration: 'none'
}));

export const StyledButton = styled(IconButton)(() => ({
  color: 'white',
  gap: '10px'
}));
