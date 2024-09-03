import React from 'react';
import { Box, Typography, ButtonGroup, Button } from '@mui/material';
import { Line } from 'react-chartjs-2';
import 'chart.js/auto';

const MarketOverview = () => {
  const data = {
    labels: ['08:00AM', '09:00AM', '10:00AM', '11:00AM', '12:00PM'],
    datasets: [
      {
        label: 'Price',
        data: [0.0021, 0.0032, 0.0067, 0.0055, 0.0089],
        fill: true,
        backgroundColor: 'rgba(255, 69, 0, 0.3)', // Adjust background gradient color
        borderColor: '#FF4500',
        pointBackgroundColor: '#1E90FF',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: '#1E90FF',
        tension: 0, // Set tension to 0 to create straight lines
      },
    ],
  };

  const options = {
    plugins: {
      tooltip: {
        enabled: true,
        backgroundColor: '#1E90FF',
        titleColor: '#fff',
        bodyColor: '#fff',
        titleAlign: 'center',
        displayColors: false,
        callbacks: {
          label: (tooltipItem) => `$${tooltipItem.raw.toFixed(5)}` // Show more precision in tooltips
        },
      },
    },
    scales: {
      x: {
        ticks: {
          color: '#00459D', // Adjust the color of the x-axis labels
          font: {
            weight: 'bold',
            size: 10, // Reduced font size
          },
        },
      },
      y: {
        ticks: {
          color: '#00459D', // Adjust the color of the y-axis labels
          font: {
            weight: 'bold',
            size: 10, // Reduced font size
          },
          callback: (value) => `$${value.toFixed(4)}` // Add USD formatting
        },
      },
    },
    maintainAspectRatio: false,
  };

  return (
    <Box
      bgcolor="#FFCC00"
      color="#4b1906"
      p={2} // Reduced padding
      borderRadius={3}
      sx={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      {/* Title and Button Groups in One Row */}
      <Box display="flex" justifyContent="space-between" alignItems="center" mb={1}> {/* Reduced margin */}
        <Typography variant="h6" sx={{ fontWeight: 'bold', fontSize: '1rem' }}> {/* Reduced font size */}
          Market Overview
        </Typography>
        <Box display="flex" alignItems="center" gap={1.5}> {/* Reduced gap */}
          <ButtonGroup variant="outlined" size="small">
            <Button
              variant="contained"
              sx={{
                bgcolor: '#1E90FF', // Match the color to the other buttons
                color: 'white',
                fontWeight: 'bold',
                fontSize: '0.875rem', // Reduced font size
                height: '32px', // Reduced height
                '&:hover': {
                  bgcolor: '#1C86EE',
                },
              }}
            >
              Line
            </Button>
            <Button
              sx={{
                color: '#1E90FF', // Match the color to the other buttons
                fontWeight: 'bold',
                fontSize: '0.875rem', // Reduced font size
                height: '32px', // Reduced height
                borderColor: '#1E90FF',
                '&:hover': {
                  bgcolor: 'rgba(30, 144, 255, 0.1)',
                },
              }}
            >
              Candle
            </Button>
          </ButtonGroup>
          <ButtonGroup variant="contained" size="small" sx={{display: {xs: 'none', sm: 'block'}}}>
            {['1D', '7D', '1M', '3M', 'ALL'].map((label) => (
              <Button
                key={label}
                sx={{
                  bgcolor: '#1E90FF',
                  color: 'white',
                  fontWeight: 'bold',
                  fontSize: '0.875rem', // Reduced font size
                  height: '32px', // Reduced height
                  '&:hover': {
                    bgcolor: '#1C86EE',
                  },
                }}
              >
                {label}
              </Button>
            ))}
          </ButtonGroup>
        </Box>
      </Box>

      {/* Chart Section */}
      <Box height={200}> {/* Reduced chart container height */}
        <Line data={data} options={options} />
      </Box>
    </Box>
  );
};

export default MarketOverview;
