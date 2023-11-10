import React from 'react';
import { StyledHomeScience } from './styled';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import SectionHeadingComponent from '@wyn/components/Common/SectionHeading/SectionHeading';
import SectionSpanComponent from '@wyn/components/Common/SectionHeading/SectionSpan';
import { Typography } from '@mui/material';
import Image from 'next/image';

const MintsScienceComponent = () => {
  return (
    <StyledHomeScience>
      <Box pt={{xs:4,md:10,lg:10,xl:10,sm:4}} pb={{xs:4,md:10,lg:10,xl:10,sm:4}}>
        <Grid container alignItems="center">
          <Grid item md={7} lg={7} xl={7} sm={6} xs={12}>
            <Box component="div" className="__image_wrapper">
              <Image fill src="/images/mints.svg" alt="mints" />
            </Box>
          </Grid>
          <Grid item md={5} lg={5} xl={5} sm={6} xs={12}>
            <SectionHeadingComponent>
              Mints not medicines, backed by
              <SectionSpanComponent content=" science." />
            </SectionHeadingComponent>
            <Typography pt={3} variant="body1">
              Here at WYN, we &lsquo; re all about making wellness feel warm and
              welcoming. That &lsquo;s why we &lsquo;ve introduced nutritional
              mints, not medicines, to redefine your journey to feminine
              well-being....
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </StyledHomeScience>
  );
};

export default MintsScienceComponent;
