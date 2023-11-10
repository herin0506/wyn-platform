import React from 'react';
import {
  StyledFooterSection,
  StyledMainRenderedSection,
  StyledMainRootBox,
} from './styled';
import FooterComponent from '../Common/Footer/Footer';
import HeaderNavigationComponent from '../Common/Navigation/Navigation';
import { Hidden } from '@mui/material';
import MobileFooterComponent from '../Common/Footer/MobileFooter';
interface DefaultLayoutComponentProps {
  children: React.ReactNode;
}

const DefaultLayoutComponent = ({ children }: DefaultLayoutComponentProps) => {
  return (
    <StyledMainRootBox>
      <HeaderNavigationComponent />
      <StyledMainRenderedSection>{children}</StyledMainRenderedSection>
      <StyledFooterSection>
        <Hidden only={['xs']}>
          <FooterComponent />
        </Hidden>
        <Hidden only={['sm','md','lg','xl']}>
          <MobileFooterComponent />
        </Hidden>
      </StyledFooterSection>
    </StyledMainRootBox>
  );
};

export default DefaultLayoutComponent;
