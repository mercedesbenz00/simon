import React from 'react';
import { Box, Avatar, Typography } from '@mui/material';

const TopBar = () => (
  <Box display="flex" justifyContent="flex-end" alignItems="center" p={2}>
    <Avatar alt="User Avatar" src="/path-to-avatar.jpg" />
    <Typography variant="h6" ml={2}>
      Oxg3d6..gi
    </Typography>
  </Box>
);

export default TopBar;
