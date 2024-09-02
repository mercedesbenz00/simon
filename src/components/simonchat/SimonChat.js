import React from 'react';
import { Box, Typography, TextField, Button, Avatar } from '@mui/material';

const SimonChat = () => {
  return (
    <Box
      bgcolor="#A82400"
      color="white"
      p={2}
      borderRadius={3}
      sx={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
      }}
    >
      <Typography variant="h6">Simon Chat</Typography>

      {/* Chat Messages */}
      <Box sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', gap: 0.5 }}>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-end',
          }}
        >
          <Typography
            fontSize="10px"
            variant="body2"
            sx={{
              bgcolor: '#b32119',
              color: 'white',
              borderRadius: 3,
              p: 1,
              px: 2,
              maxWidth: '70%',
              mb: 0.5,
            }}
          >
            Good morning, Simon! What can you do to help me today?
          </Typography>
          <Avatar
            sx={{
              width: 24,
              height: 24,
              ml: 1,
            }}
            src="/favicon/attachment.png" // Replace with user's avatar image
            alt="User Avatar"
          />
        </Box>

        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-start',
          }}
        >
          <Avatar
            sx={{
              width: 24,
              height: 24,
              mr: 1,
            }}
            src="/path-to-simon-avatar.png" // Replace with Simon's avatar image
            alt="Simon Avatar"
          />
          <Typography
            fontSize="10px"
            variant="body2"
            sx={{
              bgcolor: '#b32119',
              color: 'white',
              borderRadius: 3,
              p: 1,
              px: 2,
              maxWidth: '70%',
            }}
          >
            Good morning! I'm here to assist with staking, provide updates, or answer any questions
            you have about $SIMON. How can I help?
          </Typography>
        </Box>
      </Box>

      {/* Input and Send Button */}
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          gap: 1, // Reduced gap between input and button
          mt: 1, // Reduced margin-top
        }}
      >
        <TextField
          fullWidth
          variant="filled"
          placeholder="Type your message"
          InputProps={{
            style: { backgroundColor: '#00459D', borderRadius: 20, color: 'white' },
            disableUnderline: true,
          }}
          sx={{
            bgcolor: '#00459D',
            borderRadius: 20,
            input: { color: 'white', padding: '10px' },
          }}
        />
        <Button
          variant="contained"
          sx={{
            bgcolor: '#FFD700',
            color: '#4b1906',
            fontWeight: 'bold',
            borderRadius: 20,
            height: '48px',
            padding: '0 20px',
            minWidth: '80px',
          }}
        >
          Send
        </Button>
      </Box>
    </Box>
  );
};

export default SimonChat;
