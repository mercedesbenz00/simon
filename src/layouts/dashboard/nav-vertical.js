'use client';

import PropTypes from 'prop-types';
import { useEffect } from 'react';
// @mui
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Drawer from '@mui/material/Drawer';
// hooks
import { useResponsive } from 'src/hooks/use-responsive';
import { useMockedUser } from 'src/hooks/use-mocked-user';
// components
import Logo from 'src/components/logo';
import Scrollbar from 'src/components/scrollbar';
import { usePathname } from 'src/routes/hooks';
import { NavSectionVertical } from 'src/components/nav-section';
//
import { NAV } from '../config-layout';
import { useNavData } from './config-navigation';

// ----------------------------------------------------------------------

export default function NavVertical({ openNav, onCloseNav }) {
  const { user } = useMockedUser();

  const pathname = usePathname();

  const lgUp = useResponsive('up', 'lg');

  const navData = useNavData();

  useEffect(() => {
    if (openNav) {
      onCloseNav();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  const renderContent = (
    <Scrollbar
      sx={{
        height: 1,
        '& .simplebar-content': {
          height: 1,
          display: 'flex',
          flexDirection: 'column',
        },
      }}
    >
      <NavSectionVertical
        data={navData}
        config={{
          currentRole: user?.role || 'admin',
        }}
      />

      <Box
        sx={{
          flexGrow: 1,
        }}
      />
    </Scrollbar>
  );

  return (
    <Box
      component="nav"
      sx={{
        display: {xs: 'none', lg: 'block'},
        flexShrink: { lg: 0 },
        width: { lg: NAV.W_VERTICAL },
        position: 'relative',
        marginTop: '102px',
        background: 'linear-gradient(133.69deg, #A82400 51.24%, #A82400 71.53%, #0060A9 71.53%);',
        clipPath: 'polygon(0 -10000px, 100% -10000px, 100% calc(90%), 0 calc(100% ))',
      }}
    >
      <Box
        sx={{
          position: 'relative',
          width: '106%',
          left: '50%',
          top: '-128px',
          transform: 'translate(-50%, 0)',
        }}
      >
        <Logo sx={{ position: 'relative' }} />
      </Box>

      {lgUp ? (
        <Box sx={{mt: '-80px', position: 'relative' }}>
          <Stack
            sx={{
              height: 1,
              position: 'relative',
              width: NAV.W_VERTICAL,
              borderRight: (theme) => `dashed 1px ${theme.palette.divider}`,
            }}
          >
            {renderContent}
          </Stack>
        </Box>
      ) : (
        <Drawer
          open={openNav}
          onClose={onCloseNav}
          PaperProps={{
            sx: {
              width: NAV.W_VERTICAL,
            },
          }}
        >
          {renderContent}
        </Drawer>
      )}
    </Box>
  );
}

NavVertical.propTypes = {
  onCloseNav: PropTypes.func,
  openNav: PropTypes.bool,
};