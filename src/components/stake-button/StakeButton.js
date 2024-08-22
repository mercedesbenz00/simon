import { Button } from '@mui/material';

const StakeButton = ({ disabled = false, onClick }) => (
  <Button
    disabled={disabled}
    variant="contained"
    sx={{
      background: '#B2DFDB',
      borderRadius: '12px',
      color: 'black',
      fontWeight: 'bold',
      textTransform: 'none',
      width: '80px',
      '&:hover': {
        background: '383838',
        color: 'white'
    },
    }}
    onClick={onClick}
  >
    Stake
  </Button>
);

export default StakeButton;
