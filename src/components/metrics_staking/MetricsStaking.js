import React from 'react';
import { Grid, Box, Typography } from '@mui/material';

const metricsData = [
  { label: 'STACKED SIMON TOKENS', value: '626,3446 SIMON', bgColor: '#FFD700', textColor: '#4b1906' },
  { label: 'TOKEN VALUE LOCKED', value: '$3,543,234 USD', bgColor: '#5F1400', textColor: '#FFD700', border: '2px solid #FFD700' },
  { label: 'YOUR STACKED TOKENS', value: '0 SIMON / 0$', bgColor: '#FFD700', textColor: '#4b1906' },
  { label: 'YOUR TOTAL REWARD', value: '0 SIMON / 0$', bgColor: '#5F1400', textColor: '#FFD700', border: '2px solid #FFD700' },
];

const Metrics = () => (
  <Grid container spacing={3} sx={{ height: '100%' }}>
    {metricsData.map((metric, index) => (
      <Grid item xs={12} md={3} key={index} sx={{ display: 'flex' }}>
        <Box
          bgcolor={metric.bgColor}
          color={metric.textColor}
          p={3}
          borderRadius={0}
          textAlign="center"
          border={metric.border ? metric.border : 'none'}
          sx={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}
        >
          <Typography variant="body2" sx={{ fontWeight: 'bold', marginBottom: '8px' }}>
            {metric.label}
          </Typography>
          <Typography variant="h5" sx={{ fontWeight: 'bold' }}>
            {metric.value}
          </Typography>
        </Box>
      </Grid>
    ))}
  </Grid>
);

export default Metrics;
