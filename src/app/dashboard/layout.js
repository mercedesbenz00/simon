'use client';

import PropTypes from 'prop-types';
// auth must be correct by when....
// components
import DashboardLayout from 'src/layouts/dashboard';
import Box from '@mui/material/Box'

// ----------------------------------------------------------------------

export default function Layout({ children }) {
  return (
    // <AuthGuard>
    //   <DashboardLayout>{children}</DashboardLayout>
    // </AuthGuard>
      <DashboardLayout>{children}</DashboardLayout>

  );
}

Layout.propTypes = {
  children: PropTypes.node,
};
