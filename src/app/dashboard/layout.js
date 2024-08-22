'use client';

import PropTypes from 'prop-types';
// auth must be correct by when....
import { AuthGuard } from 'src/auth/guard';
// components
import DashboardLayout from 'src/layouts/dashboard';

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
