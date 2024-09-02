import React from 'react';
import { Box, Typography, Button, Grid } from '@mui/material';
import TelegramIcon from '@mui/icons-material/Telegram';
import InstagramIcon from '@mui/icons-material/Instagram';
import TikTokIcon from '@mui/icons-material/Instagram'; // Assuming you have this icon available
import IconX from '@mui/icons-material/Close'; // Placeholder for X (Twitter rebrand) icon

const socials = [
  { name: 'Telegram', icon: <TelegramIcon fontSize="small" />, followers: 520, fee: '0.4%' },
  { name: 'TikTok', icon: <TikTokIcon fontSize="small" />, followers: 520, fee: '0.4%' },
  { name: 'X', icon: <IconX fontSize="small" />, followers: 5200, fee: '0.4%' }, // Using a placeholder for X icon
  { name: 'Instagram', icon: <InstagramIcon fontSize="small" />, followers: 520, fee: '0.4%' },
];

const SimonSocials = () => {
  return (
    <Box
      bgcolor="#A82400"
      color="white"
      p={2}
      borderRadius={2}
      sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
    >
      <Typography variant="h6" mb={2}>
        Simon Socials
      </Typography>
      <Grid container spacing={1}>
        {socials.map((social, index) => (
          <Grid item xs={6} key={index}>
            <Box
              sx={{
                bgcolor: '#FFD700',
                color: '#4b1906',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                p: 1,
                borderRadius: 1,
                height: '60px', // Reduced height
                textAlign: 'center',
              }}
            >
              <Box display="flex" alignItems="center" gap={0.5}>
                {social.icon}
                <Typography fontSize="12px" fontWeight="bold">{social.followers}</Typography> {/* Smaller font */}
              </Box>
              <Button
                variant="contained"
                sx={{
                  bgcolor: '#FFD700',
                  color: '#4b1906',
                  fontWeight: 'bold',
                  borderRadius: '20px',
                  minWidth: '50px', // Reduced button width
                  fontSize: '10px', // Smaller font size
                  padding: '4px 10px', // Reduced padding
                }}
              >
                Join
              </Button>
            </Box>
            <Typography variant="caption" display="block" align="center" sx={{ mt: 0.5 }}>
              {social.fee} fee
            </Typography>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default SimonSocials;
