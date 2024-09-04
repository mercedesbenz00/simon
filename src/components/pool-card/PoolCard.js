import * as React from 'react';
import { Typography, Grid, Paper, Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import StakeButton from 'src/components/stake-button';
import Slide from '@mui/material/Slide';
import Zoom from '@mui/material/Zoom';

const StyledPaper = styled(Paper)(() => ({
  padding: '20px',
  backgroundColor: '#5F1400',
  opacity: '100%',  
}));

const Title = styled(Typography)(({ theme }) => ({
  marginBottom: theme.spacing(2),
  fontWeight: 'bold',
  color: '#FFD700',
  textTransform: 'uppercase',
}));

const HeaderCell = styled(Grid)(() => ({
  padding: '10px',
  backgroundColor: '#b32119',
  textAlign: 'center',
  fontWeight: 'bold',
  color: '#5F1400',
  minWidth: '120px',
  alignItems: 'center',
}));

const ContentRow = styled(Grid)(() => ({
  backgroundColor: '#5F1400',
}));

const Cell = styled(Grid)({
  padding: '10px',
  textAlign: 'center',
  minWidth: '120px',
  color: '#FFD700',
  fontWeight: 'bold',
});

const APRCell = styled(Typography)({
  backgroundColor: '#1976D2',
  borderRadius: '4px',
  padding: '5px 10px',
  textAlign: 'center',
  fontWeight: 'bold',
  color: '#FFFFFF',
});

const FeeCell = styled(Typography)({
  backgroundColor: '#FFCC00',
  borderRadius: '4px',
  padding: '5px 10px',
  textAlign: 'center',
  fontWeight: 'bold',
  color: '#8b1e1e',
});

const PoolCard = ({ onStakeButtonClick, mode = 'Active' }) => {
  const closedPoolData = {
    version: '14 Days-V2',
    apr: 'N/A',
    socialFee: '3%',
    netApr: '8%',
    stakedTokens: '14 Days',
  };

  const pools = [
    {
      version: '30 Days',
      apr: '10%',
      socialFee: '1%',
      netApr: '9%',
      lockTerm: '14 Days',
      stakedTokens: '391.6K SIMON',
    },
    {
      version: '60 Days',
      apr: '15%',
      socialFee: '1.5%',
      netApr: '13.5%',
      lockTerm: '14 Days',
      stakedTokens: '391.6K SIMON',
    },
    {
      version: '90 Days',
      apr: '20%',
      socialFee: '2%',
      netApr: '18%',
      lockTerm: '14 Days',
      stakedTokens: '391.6K SIMON',
    },
  ];

  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  const title = React.useMemo(() => {
    let prefix = '';
    if (mode.toUpperCase() === 'ACTIVE')
      prefix = '+';
    else if (mode.toUpperCase() === 'CLOSED')
      prefix = '-';
    return `${prefix} ${mode.toUpperCase()} POOLS`
  }, [mode]);

  return (
    <StyledPaper elevation={3}>
      <Slide direction="left" in={mounted} style={{ transitionDelay: mounted ? '300ms' : '0ms' }} timeout={600}>
        <Title variant="h6">
          {/* {`${mode.toUpperCase() === 'ACTIVE' ? '+' : (mode.toUpperCase() === 'CLOSED' ? '-' : '')} ${mode.toUpperCase()} POOLS`} */}
          {title}
        </Title>
      </Slide>
      <Zoom in={mounted} style={{ transitionDelay: mounted ? '700ms' : '0ms' }} timeout={600}>
        <Box sx={{ overflowX: 'auto',border: '1px solid #8b1e1e', }}>
          {/* Header Row */}
          <Grid container spacing={0} wrap="nowrap" alignItems="stretch">
            <HeaderCell item md={mode.toUpperCase() === 'CLOSED' ? 2.4 : 2}>
              <Typography variant="body2">POOL</Typography>
            </HeaderCell>
            <HeaderCell item md={mode.toUpperCase() === 'CLOSED' ? 2.4 : 2}>
              <Typography variant="body2">VERSION</Typography>
            </HeaderCell>
            <HeaderCell item md={mode.toUpperCase() === 'CLOSED' ? 1.8 : 1.5}>
              <Typography variant="body2">APR</Typography>
            </HeaderCell>
            <HeaderCell item md={mode.toUpperCase() === 'CLOSED' ? 1.8 : 1.5}>
              <Typography variant="body2">Social Fee</Typography>
            </HeaderCell>
            <HeaderCell item md={mode.toUpperCase() === 'CLOSED' ? 1.8 : 1.5}>
              <Typography variant="body2">NET APR</Typography>
            </HeaderCell>
            {mode.toUpperCase() !== 'CLOSED' && (
              <HeaderCell item md={2}>
                <Typography variant="body2">Lock Term</Typography>
              </HeaderCell>
            )}
            <HeaderCell item md={mode.toUpperCase() === 'CLOSED' ? 2.8 : 2}>
              <Typography variant="body2">Staked Tokens</Typography>
            </HeaderCell>
          </Grid>

          {/* Content Rows */}
          {mode.toUpperCase() === 'CLOSED' ? (
            <Grid container spacing={0} alignItems="center" wrap="nowrap">
              <Cell
                item
                md={2.4}
                sx={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}
              >
                <img src="/favicon/logo.png" width={56} height={24} alt="Pool Logo" style={{marginRight: '5px'}}/>
                <StakeButton onClick={onStakeButtonClick} />
              </Cell>
              <Cell item md={2.4}>
                <Typography variant="body2">{closedPoolData.version}</Typography>
              </Cell>
              <Cell item md={1.8}>
                <APRCell variant="body2">{closedPoolData.apr}</APRCell>
              </Cell>
              <Cell item md={1.8}>
                <FeeCell variant="body2">{closedPoolData.socialFee}</FeeCell>
              </Cell>
              <Cell item md={1.8}>
                <APRCell variant="body2">{closedPoolData.netApr}</APRCell>
              </Cell>
              <Cell item md={2.8}>
                <Typography variant="body2">{closedPoolData.stakedTokens}</Typography>
              </Cell>
            </Grid>
          ) : (
            pools.map((pool, index) => (
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
                  <img src="/favicon/logo.png" width={56} height={24} alt="Pool Logo" style={{marginRight: '5px'}} />
                  <StakeButton onClick={onStakeButtonClick} />
                </Cell>
                <Cell item md={2}>
                  <Typography variant="body2">{pool.version}</Typography>
                </Cell>
                <Cell item md={1.5}>
                  <APRCell variant="body2">{pool.apr}</APRCell>
                </Cell>
                <Cell item md={1.5}>
                  <FeeCell variant="body2">{pool.socialFee}</FeeCell>
                </Cell>
                <Cell item md={1.5}>
                  <APRCell variant="body2">{pool.netApr}</APRCell>
                </Cell>
                <Cell item md={2}>
                  <Typography variant="body2">{pool.lockTerm}</Typography>
                </Cell>
                <Cell item md={2}>
                  <Typography variant="body2">{pool.stakedTokens}</Typography>
                </Cell>
              </ContentRow>
            ))
          )}
        </Box>
      </Zoom>
    </StyledPaper>
  );
};

export default PoolCard;
