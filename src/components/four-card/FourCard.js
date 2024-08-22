import { Box, Typography, Grid, Paper } from '@mui/material';

export default function FourCard() {
    return (
        <Grid container spacing={2}>
          <Grid item xs={4}>
            <Paper elevation={3} sx={{ backgroundColor: '#7B1FA2', color: '#fff', p: 2, textAlign: 'center', borderRadius: '12px' }}>
              <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                36,303,408 AIT
              </Typography>
              <Typography variant="subtitle2" sx={{ opacity: 0.8 }}>
                STAKED AIT TOKENS
              </Typography>
            </Paper>
          </Grid>
        </Grid>
    );
}