import React, { useEffect, useState } from 'react';
import { StyledHeaderNavigation, StyledToolBar } from './styled';
import Box from '@mui/material/Box';
import Image from 'next/image';
import NavMenusComponent from './NavMenus';
import NavigationCartAndSearchComponent from './CartAndSearch';
import Link from 'next/link';
import { APP_ROUTES } from '@wyn/utils/routes';

const HeaderNavigationComponent = () => {
  const [isChangeNavBar, setIsChangeNavBar] = useState(false);
  const changeNavBg = () => {
    window.scrollY >= 100 ? setIsChangeNavBar(true) : setIsChangeNavBar(false);
  };

  useEffect(() => {
    window.addEventListener('scroll', changeNavBg);
    return () => {
      window.removeEventListener('scroll', changeNavBg);
    };
  }, []);

  return (
    <StyledHeaderNavigation
      shouldChangeNavBar={isChangeNavBar}
      position="fixed"
    >
      <StyledToolBar>
        <Box sx={{ flex: 3 }}>
          <NavMenusComponent />
        </Box>
        <Box
          sx={{
            display: 'flex',
            alignItem: 'center',
            justifyContent: 'center',
          }}
        >
          <Box component="div" className="__logo_wrapper">
            <Link href={APP_ROUTES.HOME}>
              <Image alt="wyn_logo" src="/logos/wyn.svg" fill />
            </Link>
          </Box>
        </Box>
        <Box sx={{ flex: 3 }}>
          <NavigationCartAndSearchComponent />
        </Box>
      </StyledToolBar>
    </StyledHeaderNavigation>
  );
};

export default HeaderNavigationComponent;
