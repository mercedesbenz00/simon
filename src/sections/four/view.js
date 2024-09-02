'use client';

// @mui
import { alpha } from '@mui/material/styles';
import Box from '@mui/material/Box';
import { Container, Grid } from '@mui/material';
import Typography from '@mui/material/Typography';
// components
import useSettingsContext from 'src/components/settings';
import Metrics from 'src/components/metrics';
import MarketOverview from 'src/components/marketoverview';
import Operation from 'src/components/operation';
import SocialWallets from 'src/components/socialwallets';
import SimonChat from 'src/components/simonchat';
import SimonSocials from 'src/components/simonsocials';
import { styled } from '@mui/material/styles';
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';
import WalletContextProvider from 'src/components/WalletContextProvider';

import ConnectWallet from 'src/components/connectwallet/ConnectWallet';
import { Web3ModalProvider } from 'src/components/connectwallet/Web3ModalProvider';

const Cell = styled(Grid)({
  padding: '10px',
  textAlign: 'left',
  minWidth: '120px',
  color: '#FFD700',
  fontWeight: 'bold',
});
// ----------------------------------------------------------------------

export default function FourView() {
  return (
    <Container
      maxWidth={false}
      sx={{
        bgcolor: '#5F1400',
        color: '#FFD700',
        height: '100%',
        overflow: 'hidden',
        position: 'relative',
      }}
    >
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
          p: 3,
        }}
      >
        <Cell item md={2} sx={{ display: 'flex', justifyContent: 'space-around' }}>
          <Typography variant="h6" sx={{ flexGrow: 1, color: '#ffc107', fontWeight: 'bold' }}>
            Dashboard
          </Typography>
          <Web3ModalProvider>
            <ConnectWallet />
          </Web3ModalProvider>
        </Cell>
      </Box>

      <Grid container spacing={3} sx={{ padding: '0px' }}>
        <Grid item xs={12}>
          <Metrics />
        </Grid>
        <Grid container item spacing={3} alignItems="stretch">
          <Grid item xs={12} md={8} sx={{ display: 'flex', flexDirection: 'column' }}>
            <MarketOverview sx={{ flexGrow: 1 }} />
          </Grid>
          <Grid item xs={12} md={4} sx={{ display: 'flex', flexDirection: 'column' }}>
            <Operation sx={{ flexGrow: 1 }} />
          </Grid>
        </Grid>
        <Grid container item xs={12} spacing={3}>
          <Grid item xs={12} md={4} lg={4} sx={{ display: 'flex', flexDirection: 'column' }}>
            <SocialWallets sx={{ flexGrow: 1 }} />
          </Grid>
          <Grid item xs={12} md={4} lg={4} sx={{ display: 'flex', flexDirection: 'column' }}>
            <SimonChat sx={{ flexGrow: 1 }} />
          </Grid>
          <Grid item xs={12} md={4} lg={4} sx={{ display: 'flex', flexDirection: 'column' }}>
            <SimonSocials sx={{ flexGrow: 1 }} />
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
}
