'use client';
import React from 'react';
import { StyledTab, StyledTabsList } from './styled';
import Hidden from '@mui/material/Hidden';

const NavigationMenuComponent = () => {
  const [tabIndex, setTabIndex] = React.useState<string | boolean>(false);
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
    if (
      anchorRef.current &&
      anchorRef.current.contains(event.target as HTMLElement)
    ) {
      return;
    }
    setOpen(false);
  };

  return (
    <>
      <Hidden only={['xs', 'sm']}>
        <StyledTabsList
          value={tabIndex}
          onChange={(_, value) => setTabIndex(value)}
        >
          <StyledTab value="0" label="Shop" />
          <StyledTab
            // aria-haspopup="true"
            // aria-expanded={open ? 'true' : undefined}
            // aria-controls={open ? 'products-menu' : undefined}
            // ref={anchorRef}
            value="1"
            label="Why WYN"
          //onClick={handleToggle}
          />
          <StyledTab value="2" label="About Us" />
          <StyledTab value="3" label="Blog" />
        </StyledTabsList>
      </Hidden>
      <Hidden only={['md', 'lg', 'xl']}>
        <StyledTabsList
          value={tabIndex}
          onChange={(_, value) => setTabIndex(value)}
        >
          <StyledTab value="0" label="Menu" />
          <StyledTab
            // aria-haspopup="true"
            // aria-expanded={open ? 'true' : undefined}
            // aria-controls={open ? 'products-menu' : undefined}
            // ref={anchorRef}
            value="1"
            label="Sign Up"
          //onClick={handleToggle}
          />

        </StyledTabsList>
      </Hidden>
      {/* {tabIndex === '1' && (
        <MegaMenuComponent
          handleClose={handleClose}
          open={open}
          zIndex={null}
          megaMenu={menus}
          anchorEl={anchorRef.current}
          onKeyDown={handleListKeyDown}
        />
      )} */}
    </>
  );
};

export default NavigationMenuComponent;
