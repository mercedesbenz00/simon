import PropTypes from 'prop-types';
// @mui
import { useTheme } from '@mui/material/styles';
import Stack from '@mui/material/Stack';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
// theme
import { bgBlur } from 'src/theme/css';
// hooks
import { useOffSetTop } from 'src/hooks/use-off-set-top';
import { useResponsive } from 'src/hooks/use-responsive';
// components
import Logo from 'src/components/logo';
import SvgColor from 'src/components/svg-color';
import { useSettingsContext } from 'src/components/settings';
//
import Slide from '@mui/material/Slide';
import { useState, useEffect } from 'react';
import ConnectWallet from 'src/components/connectwallet/ConnectWallet';
import { Web3ModalProvider } from 'src/components/connectwallet/Web3ModalProvider';
import { HEADER, NAV } from '../config-layout';
// ----------------------------------------------------------------------

export default function Header({ onOpenNav }) {
  const theme = useTheme();

  const settings = useSettingsContext();

  const isNavHorizontal = settings.themeLayout === 'horizontal';

  const isNavMini = settings.themeLayout === 'mini';

  const lgUp = useResponsive('up', 'lg');

  const offset = useOffSetTop(HEADER.H_DESKTOP);

  const offsetTop = offset && !isNavHorizontal;

  // State to manage the slide animation
  const [slideIn, setSlideIn] = useState(false);

  useEffect(() => {
    // Trigger the slide effect on component mount
    setSlideIn(true);
  }, []);

  const renderContent = (
    <>
      {lgUp && isNavHorizontal && <Logo sx={{ mr: 2.5 }} />}

      {!lgUp && (
        <IconButton onClick={onOpenNav}>
          <SvgColor src="/assets/icons/navbar/ic_menu_item.svg" />
        </IconButton>
      )}
      <Slide direction="down" in={slideIn} timeout={500}>
        <Stack
          flexGrow={1}
          direction="row"
          alignItems="center"
          justifyContent="flex"
          spacing={{ xs: 0.5, sm: 1 }}
        >
          <Typography
            sx={{
              color: 'white',
            }}
            variant="h3"
          >
            SIMON
          </Typography>        
        </Stack>
      </Slide>
      <Slide direction="left" in={slideIn} timeout={500} style={{ transitionDelay: slideIn ? '1000ms' : '0ms' }}>
      <Stack>
      <Web3ModalProvider>
            <ConnectWallet />
          </Web3ModalProvider>
        </Stack>
      </Slide>
    </>
  );

  return (
    <AppBar
      sx={{
        display: {xs: 'flex', lg: 'none'},
        bgcolor: '#DFA811',
        height: HEADER.H_MOBILE,
        zIndex: theme.zIndex.appBar + 1,
        ...bgBlur({
          color: '#DFA811',
        }),
        transition: theme.transitions.create(['height'], {
          duration: theme.transitions.duration.shorter,
        }),
        ...(lgUp && {
          width: `calc(100% - ${NAV.W_VERTICAL}px)`,
          height: HEADER.H_DESKTOP,
          ...(offsetTop && {
            height: HEADER.H_DESKTOP_OFFSET,
          }),
          ...(isNavHorizontal && {
            bgcolor: '#DFA811',
            height: HEADER.H_DESKTOP_OFFSET,
          }),
          ...(isNavMini && {
            width: `calc(100% - ${NAV.W_MINI}px)`,
          }),
        }),
      }}
    >
      <Toolbar
        sx={{
          height: 1,
          px: { lg: 5 },
          bgcolor: '#DFA811',
        }}
      >
        {renderContent}
      </Toolbar>
    </AppBar>
  );
}

Header.propTypes = {
  onOpenNav: PropTypes.func,
};
