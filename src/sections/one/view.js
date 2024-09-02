'use client';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { useSettingsContext } from 'src/components/settings';
import { Grid, Paper } from '@mui/material';
import PoolCard from 'src/components/pool-card';
import StakingDrawer from 'src/components/drawer';
import { useState } from 'react';
import MetricsStaking from 'src/components/metrics_staking';
import Fade from '@mui/material/Fade';
import * as React from 'react';
import { styled } from '@mui/material/styles';

import ConnectWallet from 'src/components/connectwallet/ConnectWallet';
import { Web3ModalProvider } from 'src/components/connectwallet/Web3ModalProvider';

const Cell = styled(Grid)({
  padding: '10px',
  textAlign: 'left',
  minWidth: '120px',
  color: '#FFD700',
  fontWeight: 'bold',
});
export default function OneView() {
  const settings = useSettingsContext();
  const [drawOpened, setDrawerOpened] = useState(false);
  const [mounted, setMounted] = React.useState(false);
  React.useEffect(() => {
    setMounted(true);
  });
  return (
    <Container
      maxWidth={false}
      sx={{
        bgcolor: '#5F1400',
        height: '100%',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Top Cards Section */}

      <Box
        component="img"
        src="/favicon/attachment.png"
        sx={{
          height: 'auto',
          position: 'absolute',
          top: '20%',
          left: '50%',
          width: '60%',
          height: '85%',
          opacity: '0.04',
        }}
      />
      <Box
        sx={{
          mt: 3,
          mb: 1,
          width: 1,
          p: 2,
        }}
      >
        <Cell item md={2} sx={{ display: 'flex', justifyContent: 'space-around' }}>
          <Typography variant="h6" sx={{ flexGrow: 1, color: '#ffc107', fontWeight: 'bold' }}>
            Stacking
          </Typography>
          <Web3ModalProvider>
            <ConnectWallet />
          </Web3ModalProvider>
        </Cell>
      </Box>

      <Grid container spacing={3}>
        <Grid item xs={12}>
          <MetricsStaking />
        </Grid>
      </Grid>
      <Box
        sx={{
          mb: 1,
          p: 2,
        }}
      >
        <PoolCard onStakeButtonClick={() => setDrawerOpened(true)} mode="Active" />
      </Box>
      <Box
        sx={{
          mb: 0,
          p: 2,
        }}
      >
        <PoolCard onStakeButtonClick={() => setDrawerOpened(true)} mode="Closed" />
      </Box>
    </Container>
  );
}
