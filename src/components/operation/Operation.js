import React, { useState } from 'react';
import {
  Box,
  Typography,
  Button,
  MenuItem,
  Select,
  ToggleButtonGroup,
  ToggleButton,
} from '@mui/material';
import { styled } from '@mui/material/styles';

const CustomButton = styled(Button)(({ theme }) => ({
  backgroundColor: '#FFD700',
  color: '#0066cc',
  fontWeight: 'bold',
  textTransform: 'none',
  '&:hover': {
    backgroundColor: '#383838',
    color: 'white',
  },
  width: '100%',
  height: '48px', // Reduced height
  borderRadius: '8px', // Slightly smaller border radius
  padding: theme.spacing(1.5, 0), // Reduced padding
  fontSize: '0.875rem', // Reduced font size
}));

const Operation = ({ sx }) => {
  const [operationType, setOperationType] = useState('buy');
  const [payCurrency, setPayCurrency] = useState('SOL');
  const [getCurrency, setGetCurrency] = useState('SIMON');
  const [payValue] = useState(2); // example value
  const [getValue] = useState(10); // example value

  const handleOperationTypeChange = (event, newOperationType) => {
    if (newOperationType !== null) {
      setOperationType(newOperationType);
    }
  };

  const handlePayCurrencyChange = (event) => {
    setPayCurrency(event.target.value);
  };

  const handleGetCurrencyChange = (event) => {
    setGetCurrency(event.target.value);
  };

  return (
    <Box
      bgcolor="#00429d" // Deep blue background color
      color="white"
      p={2} // Reduced padding
      borderRadius={2} // Slightly smaller border radius
      sx={{
        ...sx,
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        maxWidth: '360px', // Slightly narrower width
        margin: '0 auto',
      }}
    >
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Typography variant="h6" color="#FFD700" sx={{ fontSize: '1rem' }}>
          Operation
        </Typography>
        <ToggleButtonGroup
          value={operationType}
          exclusive
          onChange={handleOperationTypeChange}
          sx={{
            bgcolor: '#FFD700', // Background color for the entire ToggleButtonGroup
            borderRadius: '8px',
            '& .MuiToggleButton-root': {
              color: '#4b1906', // Default text color for buttons
              '&.Mui-selected': {
                bgcolor: '#b32119', // Red background for the selected button
                color: 'white', // White text for the selected button
                borderRadius: '8px',
              },
              '&:hover': {
                bgcolor: '#b32119', // Red background on hover
                color: 'white', // White text on hover
              },
              textTransform: 'none',
              padding: '4px 12px', // Reduced padding
              border: 'none',
              fontSize: '0.875rem', // Reduced font size
              height: '40px', // Reduced height
            },
          }}
        >
          <ToggleButton value="buy">
            Buy
          </ToggleButton>
          <ToggleButton value="sell">
            Sell
          </ToggleButton>
        </ToggleButtonGroup>
      </Box>

      <Box mt={2} display="flex" flexDirection="column" gap={1.5}>
        <Box
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          sx={{
            bgcolor: '#FFD700',
            borderRadius: '8px',
            pr: 1.5, // Reduced padding right
            pl: 1.5, // Reduced padding left
            height: '40px', // Reduced height
          }}
        >
          <Select
            value={payCurrency}
            onChange={handlePayCurrencyChange}
            variant="outlined"
            sx={{
              bgcolor: '#FFD700',
              color: '#4b1906',
              fontWeight: 'bold',
              borderRadius: '8px',
              minWidth: '70px', // Slightly narrower width
              height: '100%',
              fontSize: '0.875rem', // Reduced font size
            }}
          >
            <MenuItem
              value="SOL"
              sx={{
                fontWeight: payCurrency === 'SOL' ? 'bold' : 'normal',
                backgroundColor: payCurrency === 'SOL' ? '#b32119' : 'inherit', // Red background if selected
                color: payCurrency === 'SOL' ? 'blue' : '#4b1906',
              }}
            >
              SOL
            </MenuItem>
            <MenuItem
              value="BTC"
              sx={{
                fontWeight: payCurrency === 'BTC' ? 'bold' : 'normal',
                backgroundColor: payCurrency === 'BTC' ? '#b32119' : 'inherit', // Red background if selected
                color: payCurrency === 'BTC' ? 'blue' : '#4b1906',
              }}
            >
              BTC
            </MenuItem>
          </Select>
          <Typography color="#4b1906" fontWeight="bold" sx={{ fontSize: '0.875rem' }}>
            {payValue} {payCurrency}
          </Typography>
        </Box>

        <Box
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          sx={{
            bgcolor: '#FFD700',
            borderRadius: '8px',
            pr: 1.5, // Reduced padding right
            pl: 1.5, // Reduced padding left
            height: '40px', // Reduced height
          }}
        >
          <Select
            value={getCurrency}
            onChange={handleGetCurrencyChange}
            variant="outlined"
            sx={{
              bgcolor: '#FFD700',
              color: '#4b1906',
              fontWeight: 'bold',
              borderRadius: '8px',
              minWidth: '70px', // Slightly narrower width
              height: '100%',
              fontSize: '0.875rem', // Reduced font size
            }}
          >
            <MenuItem
              value="SIMON"
              sx={{
                fontWeight: getCurrency === 'SIMON' ? 'bold' : 'normal',
                backgroundColor: getCurrency === 'SIMON' ? '#b32119' : 'inherit', // Red background if selected
                color: getCurrency === 'SIMON' ? 'blue' : '#4b1906',
              }}
            >
              SIMON
            </MenuItem>
            <MenuItem
              value="ETH"
              sx={{
                fontWeight: getCurrency === 'ETH' ? 'bold' : 'normal',
                backgroundColor: getCurrency === 'ETH' ? '#b32119' : 'inherit', // Red background if selected
                color: getCurrency === 'ETH' ? 'blue' : '#4b1906',
              }}
            >
              ETH
            </MenuItem>
          </Select>
          <Typography color="#4b1906" fontWeight="bold" sx={{ fontSize: '0.875rem' }}>
            {getValue} {getCurrency}
          </Typography>
        </Box>

        <Typography variant="caption" color="white" align="center" sx={{ fontSize: '0.75rem' }}>
          1 {payCurrency} = 5 {getCurrency}
        </Typography>
      </Box>

      <Box mt={3}>
        <CustomButton variant="contained">
          <Typography variant="h6" sx={{ fontSize: '1rem' }}>
            {operationType === 'buy' ? `Buy ${getCurrency}` : `Sell ${getCurrency}`}
          </Typography>
        </CustomButton>
      </Box>
    </Box>
  );
};

export default Operation;
