'use client';
import React from 'react';
import { StyledTab, StyledTabsList } from './styled';
import Hidden from '@mui/material/Hidden';
import ShopMenuComponent from './ShopMenu';
import { useRouter } from 'next/navigation';
import { APP_ROUTES } from '@wyn/utils/routes';

const NavigationMenuComponent = () => {
  const [tabIndex, setTabIndex] = React.useState<string | boolean>(false);
  const router = useRouter();
  const [open, setOpen] = React.useState(false);
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
    console.log(event);
    if (
      anchorRef.current &&
      anchorRef.current.contains(event.target as HTMLElement)
    ) {
      return;
    }
    setOpen(false);
  };

  const handleNavigation = (route: string) => {
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
          <StyledTab value="2" label="About Us" onClick={() => handleNavigation(APP_ROUTES.ABOUT_US)} />
          <StyledTab value="3" label="Blog" onClick={() => handleNavigation(APP_ROUTES.BLOG)}  />
        </StyledTabsList>
      </Hidden>
      <Hidden only={['md', 'lg', 'xl']}>
        <StyledTabsList
          value={tabIndex}
          onChange={(_, value) => setTabIndex(value)}
        >
          <StyledTab value="0" label="Menu" />
          <StyledTab value="1" label="Sign Up" />
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
    </>
  );
};

export default NavigationMenuComponent;
