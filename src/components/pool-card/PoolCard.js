import * as   React from 'react';
import { Typography, Grid, Paper, Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import StakeButton from 'src/components/stake-button';
import Slide from '@mui/material/Slide';
import Zoom from '@mui/material/Zoom';
import { useState } from 'react';

const StyledPaper = styled(Paper)(({ theme }) => ({
  borderRadius: '12px',
  padding: '20px',
  backgroundColor: '#f5f7fb',
  border: '1px solid #e0e0e0',
}));

const Title = styled(Typography)(({ theme }) => ({
  marginBottom: theme.spacing(2),
  fontWeight: 'bold',
  color: '#7B1FA2',
  textTransform: 'uppercase',
}));

const HeaderCell = styled(Grid)(({ theme }) => ({
  padding: '10px',
  backgroundColor: '#E3F2FD',
  textAlign: 'center',
  fontWeight: 'bold',
  minWidth: '120px',
  
  alignItems: 'center',
}));

const ContentRow = styled(Grid)(({ theme, index, length }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: '#fafafa',
  },
  borderBottom: index !== length - 1 ? '1px solid #e0e0e0' : 'none',
}));

const Cell = styled(Grid)({
  padding: '10px',
  textAlign: 'center',
  minWidth: '120px',
});

const APRCell = styled(Typography)({
  backgroundColor: '#B2DFDB',
  borderRadius: '12px',
  padding: '5px 10px',
  textAlign: 'center',
  fontWeight: 'bold',
});

const PoolCard = ({ onStakeButtonClick, mode = 'Active' }) => {
  const pools = [
    {
      version: '14 Days - V2',
      ethRewards: '3%',
      apr: '8%',
      lockTerm: '14 Days',
      stakedTokens: '391.6K SIMON',
    },
    {
      version: '30 Days - V2',
      ethRewards: '7%',
      apr: '18%',
      lockTerm: '30 Days',
      stakedTokens: '1.4M SIMON',
    },
    {
      version: '56 Days - V2',
      ethRewards: '90% + secret',
      apr: '28%',
      lockTerm: '56 Days',
      stakedTokens: '28.3M SIMON',
    },
  ];
  const [mounted, setMounted] = React.useState(false);
  React.useEffect( () => {
    setMounted(true);
  }, [])

  return (
    <StyledPaper elevation={3}>
      <Slide direction="left" in={mounted} style={{ transitionDelay: mounted ? '300ms' : '0ms' }} timeout={600}>
      <Title variant="h6">{`${mode.toUpperCase()} POOLS`}</Title>
      </Slide>
      <Zoom in={mounted} style={{ transitionDelay: mounted ? '700ms' : '0ms' }} timeout={600}>
      <Box sx={{ overflowX: 'auto'}}>
        {/* Header Row */}
        <Grid container spacing={0} wrap="nowrap" alignItems="stretch">
          <HeaderCell item md={2}>
            <Typography variant="body2">POOLS</Typography>
          </HeaderCell>
          <HeaderCell item md={2.5}>
            <Typography variant="body2">VERSION</Typography>
          </HeaderCell>
          {mode === 'Active' && (
            <HeaderCell item md={2.5}>
              <Typography variant="body2">WTAO REWARDS</Typography>
            </HeaderCell>
          )}
          <HeaderCell item md={mode === 'Active' ? 2 : 4.5}>
            <Typography variant="body2">ETH REWARDS</Typography>
          </HeaderCell>
          <HeaderCell item md={1}>
            <Typography variant="body2">APR</Typography>
          </HeaderCell>
          <HeaderCell item md={1}>
            <Typography variant="body2">LOCK TERM</Typography>
          </HeaderCell>
          <HeaderCell item md={1}>
            <Typography variant="body2">STAKED TOKENS</Typography>
          </HeaderCell>
        </Grid>
        {/* Content Rows */}
        {pools.map((pool, index) => (
          <ContentRow
            container
            spacing={0}
            alignItems="center"
            key={index}
            index={index}
            length={pools.length}
            wrap="nowrap"
          >
            <Cell
              item
              md={2}
              sx={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}
            >
              <img src="/favicon/logo.png" width={56} height={24} alt="Pool Logo" />
              <StakeButton onClick={onStakeButtonClick} />
            </Cell>
            <Cell item md={2.5}>
              <Typography variant="body2">{pool.version}</Typography>
            </Cell>
            {mode === 'Active' && (
              <Cell item md={2.5}>
                <Typography variant="body2">N/A</Typography>
              </Cell>
            )}
            <Cell item md={mode === 'Active' ? 2 : 4.5}>
              <Typography variant="body2">{pool.ethRewards}</Typography>
            </Cell>
            <Cell item md={1}>
              <APRCell variant="body2">{pool.apr}</APRCell>
            </Cell>
            <Cell item md={1}>
              <Typography variant="body2">{pool.lockTerm}</Typography>
            </Cell>
            <Cell item md={1}>
              <Typography variant="body2">{pool.stakedTokens}</Typography>
            </Cell>
          </ContentRow>
        ))}
      </Box>
      </Zoom>
    </StyledPaper>
  );
};

export default PoolCard;
