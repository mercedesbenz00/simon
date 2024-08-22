'use client';

import { alpha } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { useSettingsContext } from 'src/components/settings';
import { Grid, Paper } from '@mui/material';
import PoolCard from 'src/components/pool-card';
import StakingDrawer from 'src/components/drawer';
import { useState } from 'react';
import Fade from '@mui/material/Fade';
import * as React from 'react';

// New Component for Grid Items
function StakingInfoCard({ backgroundColor, textColor, title, subtitle }) {
  return (
    <Paper
      elevation={3}
      sx={{
        background: '#DFA811',
        color: 'black',
        p: 2,
        border: 3,
        borderColor: 'black',
        textAlign: 'center',
        borderRadius: '20%',
      }}
    >
      <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
        {title}
      </Typography>
      <Typography variant="subtitle2" sx={{ opacity: 0.8 }}>
        {subtitle}
      </Typography>
    </Paper>
  );
}

export default function OneView() {
  const settings = useSettingsContext();
  const [drawOpened, setDrawerOpened] = useState(false);
  const [mounted, setMounted] = React.useState(false);
  React.useEffect( () => {
    setMounted(true);
  }, [])
  return (
    <Container maxWidth={false} sx={{ bgcolor: '#0060A9', height: '100%' }}>
      {/* Top Cards Section */}
      <Box
        sx={{
          mt: 5,
          mb: 2,
          width: 1,
          borderRadius: 2,
          bgcolor: (theme) => alpha(theme.palette.grey[500], 0.04),
          border: (theme) => `dashed 1px ${theme.palette.divider}`,
          p: 2,
        }}
      >
        <Grid container spacing={2}>
          <Fade in={mounted} timeout={1000}>
          <Grid item xs={6} md={3}>
            <StakingInfoCard
              backgroundColor="linear-gradient(180deg, rgba(123,31,162,1) 0%, rgba(94,53,177,1) 100%)"
              textColor="#fff"
              title="36,310,198 SIMON"
              subtitle="STAKED SIMON TOKENS"
            />
          </Grid>
          </Fade>
          <Fade in={mounted} timeout={1000} style={{ transitionDelay: mounted ? '200ms' : '0ms' }}>
          <Grid item xs={6} md={3}>
            <StakingInfoCard
              backgroundColor="#E3F2FD"
              textColor="#1E88E5"
              title="$3,516,534 USD"
              subtitle="TOKEN VALUE LOCKED"
            />
          </Grid>
          </Fade>
          <Fade in={mounted} timeout={1000} style={{ transitionDelay: mounted ? '400ms' : '0ms' }}>
          <Grid item xs={6} md={3}>
            <StakingInfoCard
              backgroundColor="linear-gradient(180deg, rgba(123,31,162,1) 0%, rgba(94,53,177,1) 100%)"
              textColor="#fff"
              title="0 SIMON / $0"
              subtitle="YOUR STAKED TOKENS"
            />
          </Grid>
          </Fade>
          <Fade in={mounted} timeout={1000} style={{ transitionDelay: mounted ? '600ms' : '0ms' }}>
          <Grid item xs={6} md={3}>
            <StakingInfoCard
              backgroundColor="#E3F2FD"
              textColor="#1E88E5"
              title="0 SIMON / $0"
              subtitle="YOUR TOTAL REWARD"
            />
          </Grid>
          </Fade>
        </Grid>
      </Box>
      <Box
        sx={{
          mb: 1,
          p: 2,
          bgcolor: (theme) => alpha(theme.palette.grey[500], 0.04),
          borderRadius: 2,
        }}
      >
        <PoolCard onStakeButtonClick={() => setDrawerOpened(true)} />
      </Box>
      <Box
        sx={{
          p: 2,
          bgcolor: (theme) => alpha(theme.palette.grey[500], 0.04),
          borderRadius: 2,
        }}
      >
        <PoolCard onStakeButtonClick={() => setDrawerOpened(true)} mode="Closed" />
      </Box>

      <StakingDrawer open={drawOpened} onClose={() => setDrawerOpened(false)} />
    </Container>
  );
}
