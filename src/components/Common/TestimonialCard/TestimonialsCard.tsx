import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Typography } from '@mui/material';
import { StyledTestimonialImageBox } from './styled';

const TestimonialsCardComponent = () => {
  return (
    <Grid container direction="row" alignItems="stretch">
      <Grid item md={6} lg={6} xl={6} sm={6}>
        <Box sx={{ height: '100%' }}>
          <Grid
            container
            direction="column"
            style={{ height: '100%' }}
            justifyContent="space-between"
            alignItems="stretch"
          >
            <Grid item>
              <Typography variant="body1">
                Chewable mints are easy to consume anywhere at home, work or in
                travel. After 15-20 days I can see results that no hot flashes
                even in summer. I feel energetic throughout the day.
              </Typography>
            </Grid>
            <Grid item>
              <Box mt={2}>
                <Typography sx={{ fontSize: 40 }} variant="h1">
                  -Mitashree Lobo
                </Typography>
                <Typography variant="body2" sx={{ fontStyle: 'italic' }}>
                  Homemaker
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Grid>
      <Grid item md={6} lg={6} xl={6} sm={6}>
        <Box sx={{ height: '100%' }}>
          <Grid
            justifyContent="end"
            alignItems="stretch"
            container
            style={{ height: '100%' }}
            sx={(theme) => ({})}
          >
            <Grid item>
              <StyledTestimonialImageBox></StyledTestimonialImageBox>
            </Grid>
          </Grid>
        </Box>
      </Grid>
    </Grid>
  );
};

export default TestimonialsCardComponent;
