import React from 'react';
import { Box, Typography, Button, List, ListItem, ListItemText, Grid } from '@mui/material';

const wallets = [
  { name: 'Libertad Foundation', type: 'NGO', amount: '$620.00' },
  { name: 'Fuerza Solidaria', type: 'NGO', amount: '$1029.19' },
  { name: 'Voces de Esperanza', type: 'NGO', amount: '$420.00' },
];

const SocialWallets = () => {
  return (
    <Box bgcolor="#b32119" color="white" pl={3} pr={3} pt={2} borderRadius={3} sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
      <Typography variant="h6" mb={2}>Social Wallets</Typography>
      <List sx={{ flexGrow: 1 }}>
        {wallets.map((wallet, index) => (
          <ListItem key={index} sx={{ bgcolor: '#8b1e1e', borderRadius: 2, mb: 1, pb: 1 }}>
            <Grid container spacing={2} alignItems="center">
              <Grid item xs={4}>
                <Typography fontSize="10px" fontWeight="bold" color="#FFD700">{wallet.name}</Typography>
              </Grid>
              <Grid item xs={4}>
                <Typography fontSize="10px">{wallet.type}</Typography>
              </Grid>
              <Grid item xs={2}>
                <Typography fontSize="10px">{wallet.amount}</Typography>
              </Grid>
              <Grid item xs={2} textAlign="right">
                <Button variant="contained" sx={{ bgcolor: '#FFD700', color: '#4b1906', fontSize: '10px', padding: '4px 8px' }}>
                  Details
                </Button>
              </Grid>
            </Grid>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default SocialWallets;
