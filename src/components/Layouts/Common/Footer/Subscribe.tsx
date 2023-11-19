import React from 'react';
import Grid from '@mui/material/Grid';
import SectionHeadingComponent from '@wyn/components/Common/SectionHeading/SectionHeading';
import SectionSpanComponent from '@wyn/components/Common/SectionHeading/SectionSpan';
import { StyledButton, StyledInputField } from './styled';
import Box from '@mui/material/Box';

const SubscribeComponent = () => {
  return (
    <Grid container alignItems="center">
      <Grid xs={12} item md={6} lg={6} xl={6} sm={6}>
        <SectionHeadingComponent
          sx={(theme) => ({
            [theme.breakpoints.only('xs')]: {
              fontSize: 22,
              textAlign:"center",
              marginBottom:2
            },
          })}
        >
          Science on your shelf-
          <SectionSpanComponent content="and in your inbox." />
        </SectionHeadingComponent>
      </Grid>
      <Grid xs={12} item md={6} lg={6} xl={6} sm={6}>
        <Box>
          <Grid
            container
            alignItems="center"
            justifyContent={{
              xs: 'start',
              sm: 'end',
              md: 'end',
              lg: 'end',
              xl: 'end',
            }}
          >
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
