'use client';

import PropTypes from 'prop-types';
import DashboardLayout from 'src/layouts/dashboard';

// ----------------------------------------------------------------------

export default function Layout({ children }) {
  return (
      <DashboardLayout>{children}</DashboardLayout>

  );
}

Layout.propTypes = {
  children: PropTypes.node,
};
