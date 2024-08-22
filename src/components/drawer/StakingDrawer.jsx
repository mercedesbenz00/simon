import React, { useState } from 'react';
import {
  Drawer,
  Tabs,
  Tab,
  Button,
  TextField,
  Typography,
  Box,
  Divider,
  IconButton,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

function StakingDrawer({ open, onClose }) {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  return (
    <Drawer
      anchor="right"
      open={open}
      onClose={onClose}
      PaperProps={{
        sx: {
          width: 400,
          padding: 0,
          backgroundColor: '#E9F2FF',
        },
      }}
    >
      {/* Title Bar */}
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: 2,
          backgroundColor: '#F0F6FF',
        }}
      >
        <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#3AAFA9' }}>
          EARN STAKED & REVENUE SHARING
        </Typography>
        <IconButton onClick={onClose} size="small">
          <CloseIcon />
        </IconButton>
      </Box>

      {/* Tabs */}
      <Tabs
        value={activeTab}
        onChange={handleTabChange}
        sx={{ marginBottom: 2, backgroundColor: '#F0F6FF' }}
        variant="fullWidth"
        textColor="inherit"
        indicatorColor="primary"
      >
        <Tab
          label="Stake"
          sx={{
            textTransform: 'none',
            fontWeight: 'bold',
            backgroundColor: activeTab === 0 ? '#BBE1FA' : 'transparent',
          }}
        />
        <Tab
          label="Unstake"
          sx={{
            textTransform: 'none',
            fontWeight: 'bold',
            backgroundColor: activeTab === 1 ? '#BBE1FA' : 'transparent',
          }}
        />
      </Tabs>

      <Box sx={{ padding: 2 }}>
        {/* Input and Max Button */}
        {activeTab === 0 && (
          <>
            <TextField
              fullWidth
              label="Amount"
              variant="outlined"
              InputProps={{ endAdornment: <Button>Max</Button> }}
              sx={{ marginBottom: 2 }}
            />

            <Divider sx={{ marginBottom: 2 }} />

            {/* Information Section */}
            <Typography
              variant="body2"
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}
            >
              <p style={{ fontWeight: 'bold' }}>AVAILABLE TO STAKE:</p> <span>0 AIT</span>
            </Typography>
            <Divider sx={{ marginBottom: 2 }} />
          </>
        )}
        <Typography
          variant="body2"
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <p>WITHDRAW AMOUNT:</p> <span>0 AIT</span>
        </Typography>
        <Divider sx={{ marginBottom: 2 }} />

        <Typography
          variant="body2"
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <p>EARNED REWARD:</p>
          <span>0 AIT</span>
        </Typography>
        <Divider sx={{ marginBottom: 2 }} />

        <Typography
          variant="body2"
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <p>REWARD REVENUE ETH:</p>
          <span>N/A ETH</span>
        </Typography>
        <Divider sx={{ marginBottom: 2 }} />

        <Typography
          variant="body2"
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <p>LOCK END DATE:</p>
          <span> 0 days, 0 hours, 0 minutes, 0 seconds</span>
        </Typography>
        <Divider sx={{ marginBottom: 2 }} />
        {activeTab === 0 && (
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              backgroundColor: '#F0F6FF',
              gap: 2,
            }}
          >
            <Button
              variant="contained"
              color="secondary"
              fullWidth
              sx={{
                backgroundColor: '#3AAFA9',
                color: '#fff',
                paddingY: 1.5,
                textTransform: 'none',
                fontWeight: 'bold',
              }}
            >
              Disconnect Wallet
            </Button>
              <Button
                variant="contained"
                color="secondary"
                fullWidth
                sx={{
                  backgroundColor: '#3AAFA9',
                  color: '#fff',
                  paddingY: 1.5,
                  textTransform: 'none',
                  fontWeight: 'bold',
                }}
              >
                Claim reward
              </Button>
          </Box>
        )}
        {activeTab === 1 && (
          <Button
            variant="contained"
            color="secondary"
            fullWidth
            sx={{
              backgroundColor: '#3AAFA9',
              color: '#fff',
              paddingY: 1.5,
              textTransform: 'none',
              fontWeight: 'bold',
            }}
          >
            Unstake and Claim All
          </Button>
        )}
      </Box>
    </Drawer>
  );
}

export default StakingDrawer;
