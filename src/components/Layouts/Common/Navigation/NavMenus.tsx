'use client';
import React from 'react';
import { StyledDialogCloseIcon, StyledTab, StyledTabsList } from './styled';
import Hidden from '@mui/material/Hidden';
import ShopMenuComponent from './ShopMenu';
import { useRouter } from 'next/navigation';
import { APP_ROUTES } from '@wyn/utils/routes';
import DialogContent from '@mui/material/DialogContent';
import Box from '@mui/material/Box';
import { StyledDialog } from '@wyn/components/JoinUsModel/styled';
import Image from 'next/image';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import MobileNavigationComponent from './MobileNavigation';

const NavigationMenuComponent = () => {
  const [tabIndex, setTabIndex] = React.useState<string | boolean>(false);
  const router = useRouter();
  const [open, setOpen] = React.useState(false);
  const [mobileNav, setMobileNav] = React.useState(false);
  const anchorRef = React.useRef<HTMLDivElement>(null);
  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  function handleListKeyDown(event: React.KeyboardEvent) {
    if (event.key === 'Tab') {
      event.preventDefault();
      setOpen(false);
    } else if (event.key === 'Escape') {
      setOpen(false);
    }
  }

  const handleClose = (event: Event | React.SyntheticEvent) => {
    if (
      anchorRef.current &&
      anchorRef.current.contains(event.target as HTMLElement)
    ) {
      return;
    }
    setOpen(false);
  };

  const handleNavigation = (route: string) => {
    setMobileNav(false);
    router.push(route);
  };

  return (
    <>
      <Hidden only={['xs', 'sm']}>
        <StyledTabsList
          value={tabIndex}
          onChange={(_, value) => setTabIndex(value)}
        >
          <StyledTab
            value="0"
            label="Shop"
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
            aria-controls={open ? 'products-menu' : undefined}
            ref={anchorRef}
            onClick={handleToggle}
          />
          <StyledTab
            value="1"
            label="Why WYN"
            onClick={() => handleNavigation(APP_ROUTES.WHY_WYN)}
          />
          <StyledTab
            value="2"
            label="About Us"
            onClick={() => handleNavigation(APP_ROUTES.ABOUT_US)}
          />
          <StyledTab
            value="3"
            label="Blog"
            onClick={() => handleNavigation(APP_ROUTES.BLOG)}
          />
        </StyledTabsList>
      </Hidden>
      <Hidden only={['md', 'lg', 'xl']}>
        <StyledTabsList
          value={tabIndex}
          onChange={(_, value) => setTabIndex(value)}
        >
          <StyledTab value="0" label="Menu" onClick={() => setMobileNav(true)} />
          <StyledTab
            value="1"
            label="Sign Up"
            onClick={() => handleNavigation(APP_ROUTES.SIGN_UP)}
          />
        </StyledTabsList>
      </Hidden>
      {tabIndex === '0' && (
        <ShopMenuComponent
          handleClose={handleClose}
          open={open}
          zIndex={null}
          anchorEl={anchorRef.current}
          onKeyDown={handleListKeyDown}
        />
      )}
      <StyledDialog fullScreen open={mobileNav}>
        <DialogContent>
          <Box>
            <Image
              width={50}
              height={53}
              alt="logo"
              src="/logos/wyn.svg"
              onClick={() => handleNavigation(APP_ROUTES.HOME)}
            />
          </Box>
          <Box mt={6}>
            <MobileNavigationComponent onClose={() => setMobileNav(false)} />
          </Box>
          <StyledDialogCloseIcon>
            <IconButton
              onClick={() => {
                setMobileNav(false);
              }}
              sx={{ padding: 0 }}
            >
              <CloseIcon />
            </IconButton>
          </StyledDialogCloseIcon>
        </DialogContent>
      </StyledDialog>
    </>
  );
};

export default NavigationMenuComponent;
