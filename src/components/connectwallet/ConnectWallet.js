import * as React from 'react';
import { useState } from 'react';
import { Box, Button, Typography, Menu, MenuItem } from '@mui/material';
import { useAccount, useConnect, useDisconnect } from 'wagmi';
import { useWeb3Modal } from '@web3modal/wagmi/react';

export default function ConnectWallet() {
  const { address, isConnected } = useAccount();
  const { connect, connectors } = useConnect();
  const { disconnect } = useDisconnect();
  const { open } = useWeb3Modal();
  const [error, setError] = useState(null);

  const handleConnect = async () => {
    setError(null);
    try {
      if (connectors[0]) {
        await connect({ connector: connectors[0] });
        await open(); // This triggers the modal
      }
    } catch (err) {
      setError(err.message || 'Failed to connect wallet.');
    }
  };

  const handleDisconnect = async () => {
    setError(null);
    try {
      await disconnect();
    } catch (err) {
      setError(err.message || 'Failed to disconnect wallet.');
    }
  };

  const [anchorEl, setAnchorEl] = React.useState(null);
  const openE = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const shortenedAddress = `${address?.slice(0, 4)}...${address?.slice(-4)}`;

  return (
    <div>
      {isConnected ? (
        <div>
          <Button
            id="basic-button"
            variant="contained"
            sx={{
              backgroundColor: '#0066cc',
              color: '#FFD700',
              fontWeight: 'bold',
              textTransform: 'none',
              padding: '8px 16px',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              fontSize: '0.875rem',
              minWidth: '180px', // Ensure a minimum width for better presentation
              justifyContent: 'space-between', // Proper spacing between items
              borderRadius: '24px', // Rounded corners
              '&:hover': {
                backgroundColor: '#005bb5',
              },
            }}
            aria-controls={openE ? 'basic-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={openE ? 'true' : undefined}
            onClick={handleClick}
          >
            <Box
              component="img"
              src="/logo/logo_single.png"
              alt="WalletIcon"
              width="36px"
              height="36px"
              sx={{ borderRadius: '50%' }} // Make the image rounded
            />
            <Typography
              sx={{
                fontSize: '0.875rem', // Font size consistent with the button size
                color: '#FFD700',
                flex: 1, // Ensures the text takes up available space
                textAlign: 'center', // Centers the text
              }}
            >
              {shortenedAddress}
            </Typography>
          </Button>
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={openE}
            onClose={handleClose}
            MenuListProps={{
              'aria-labelledby': 'basic-button',
            }}
          >
            <MenuItem onClick={handleDisconnect}
              sx={{
                backgroundColor: '#0066cc',
                minWidth: '140px',
            }}>Disconnect</MenuItem>
          </Menu>
        </div>
      ) : (
        <Button
          variant="contained"
          onClick={handleConnect}
          sx={{
            backgroundColor: '#0066cc',
            color: '#FFD700',
            fontWeight: 'bold',
            textTransform: 'none',
            padding: '8px 16px',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            fontSize: '0.875rem',
            minWidth: '180px', // Ensure a minimum width for better presentation
            justifyContent: 'space-between', // Proper spacing between items
            borderRadius: '24px', // Rounded corners
            '&:hover': {
              backgroundColor: '#005bb5',
            },
          }}
        >
          <Box
            component="img"
            src="/logo/logo_single.png"
            alt="WalletIcon"
            width="36px"
            height="36px"
            sx={{ borderRadius: '50%' }} // Make the image rounded
          />
          <Typography
            sx={{
              fontSize: '0.875rem', // Font size consistent with the button size
              flex: 1, // Ensures the text takes up available space
              textAlign: 'center', // Centers the text
            }}
          >
            Connect Wallet
          </Typography>
        </Button>
      )}
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
}
