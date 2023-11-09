import React from 'react';
import SectionHeadingComponent from '@wyn/components/Common/SectionHeading/SectionHeading';
import SectionSpanComponent from '@wyn/components/Common/SectionHeading/SectionSpan';
import { StyledHomeNaturalHerbs } from './styled';
import NuturalHerbsComponent from '@wyn/components/Common/NuturalHerbs/NuturalHerbs';

const NaturalHerbsContainer = () => {
  return (
    <StyledHomeNaturalHerbs>
      <SectionHeadingComponent textAlign="center">
        Science backed nutrients
        <SectionSpanComponent content=" with natural herbs" />
      </SectionHeadingComponent>
      <NuturalHerbsComponent />
    </StyledHomeNaturalHerbs>
  );
};

export default NaturalHerbsContainer;
