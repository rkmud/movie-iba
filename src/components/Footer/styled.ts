import { List } from '@mui/material';
import { styled } from '@mui/material/styles';

export const WrapperFooter = styled('footer')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '5px 30px',
  [theme.breakpoints.down('sm')]: {
    alignItems: 'flex-start',
    flexWrap: 'wrap',
    flexDirection: 'column',
    padding: '10px 15px',
  },
}));

export const Icons = styled(List)({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '20px',
  padding: '0'
});



