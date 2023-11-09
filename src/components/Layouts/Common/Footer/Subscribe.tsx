import React from 'react';
import Grid from '@mui/material/Grid';
import SectionHeadingComponent from '@wyn/components/Common/SectionHeading/SectionHeading';
import SectionSpanComponent from '@wyn/components/Common/SectionHeading/SectionSpan';
import { StyledButton, StyledInputField } from './styled';
import Box from '@mui/material/Box';

const SubscribeComponent = () => {
  return (
    <Grid container alignItems="center">
      <Grid item md={6} lg={6} xl={6} sm={6}>
        <SectionHeadingComponent>
          Science on your shelf- <br />
          <SectionSpanComponent content="and in your inbox." />
        </SectionHeadingComponent>
      </Grid>
      <Grid item md={6} lg={6} xl={6} sm={6}>
        <Box>
          <Grid container alignItems="center" justifyContent="end">
            <Grid item>
              <StyledInputField placeholder="Your email here" />
            </Grid>
            <Grid item>
              <StyledButton variant="contained">SUBSCRIBE</StyledButton>
            </Grid>
          </Grid>
        </Box>
      </Grid>
    </Grid>
  );
};

export default SubscribeComponent;
