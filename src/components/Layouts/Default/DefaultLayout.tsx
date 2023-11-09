import React from 'react';
import {
  StyledFooterSection,
  StyledMainRenderedSection,
  StyledMainRootBox,
} from './styled';
import FooterComponent from '../Common/Footer/Footer';
import HeaderNavigationComponent from '../Common/Navigation/Navigation';
interface DefaultLayoutComponentProps {
  children: React.ReactNode;
}

const DefaultLayoutComponent = ({ children }: DefaultLayoutComponentProps) => {
  return (
    <StyledMainRootBox>
      <HeaderNavigationComponent />
      <StyledMainRenderedSection>{children}</StyledMainRenderedSection>
      <StyledFooterSection>
        <FooterComponent />
      </StyledFooterSection>
    </StyledMainRootBox>
  );
};

export default DefaultLayoutComponent;
