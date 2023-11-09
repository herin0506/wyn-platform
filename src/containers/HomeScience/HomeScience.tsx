import React from 'react';
import { StyledHomeScience } from './styled';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import SectionHeadingComponent from '@wyn/components/Common/SectionHeading/SectionHeading';
import SectionSpanComponent from '@wyn/components/Common/SectionHeading/SectionSpan';
import { Typography } from '@mui/material';
import Image from 'next/image';

const HomeScienceContainer = () => {
  return (
    <StyledHomeScience maxWidth="xl">
      <Container maxWidth="lg">
        <Box pt={10} pb={10}>
          <Grid container alignItems="center">
            <Grid item md={7}>
              <Box component="div" className="__image_wrapper">
                <Image fill src="/images/mints.svg" alt='minnts' />
              </Box>
            </Grid>
            <Grid item md={5}>
              <SectionHeadingComponent>
                Mints not medicines, backed by
                <SectionSpanComponent content=" science." />
              </SectionHeadingComponent>
              <Typography pt={3} variant="body1">
                Here at WYN, we &lsquo; re all about making wellness feel warm
                and welcoming. That &lsquo;s why we &lsquo;ve introduced
                nutritional mints, not medicines, to redefine your journey to
                feminine well-being....
              </Typography>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </StyledHomeScience>
  );
};

export default HomeScienceContainer;
