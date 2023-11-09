import React from 'react';
import { StyledHomeDiscoverCategories } from './styled';
import SectionHeadingComponent from '@wyn/components/Common/SectionHeading/SectionHeading';
import Container from '@mui/material/Container';
import SectionSpanComponent from '@wyn/components/Common/SectionHeading/SectionSpan';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

const HomeDiscoverCategoriesContainer = () => {
  return (
    <StyledHomeDiscoverCategories>
      <Container maxWidth="lg">
        <SectionHeadingComponent>
          We are a <SectionSpanComponent content="dependable ally" /> in your
          journey <br />
          to better health & wellness.
        </SectionHeadingComponent>
        <Box mt={4} textAlign="center">
          <Button size="large" variant="contained">
            DISCOVER CATEGORIES
          </Button>
        </Box>
      </Container>
    </StyledHomeDiscoverCategories>
  );
};

export default HomeDiscoverCategoriesContainer;
