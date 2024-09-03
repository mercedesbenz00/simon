import React from 'react';
import { Grid, Box, Typography } from '@mui/material';

const metricsData = [
  { label: 'HOLDER RANKING', value: '37 OUT OF 504', border: '2px solid #FFD700'  },
  { label: 'Wallet Balance', value: '2,435.00 $', border: '2px solid #FFD700'  },
  { label: 'Total Rewards', value: '200.00 $', border: '2px solid #FFD700'  },
  { label: 'Wallet Tokens', value: '153 SIMON' }
];

const Metrics = () => (
  <Grid container spacing={3}>
    {metricsData.map((metric, index) => (
      <Grid item xs={12} md={3} key={index} >
        <Box bgcolor="#5F1400" color="#FFD700"  borderRadius={0} textAlign="center" border={metric.border ? metric.border : 'none'}>
          <Typography >{metric.label}</Typography>
          <Typography variant="h4">{metric.value}</Typography>
        </Box>
      </Grid>
    ))}
  </Grid>
);

export default Metrics;
