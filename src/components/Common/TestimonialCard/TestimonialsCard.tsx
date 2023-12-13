import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Typography } from '@mui/material';
import { StyledTestimonialImageBox } from './styled';

interface TestimonialsCardComponentProps {
  data: any;
}

const TestimonialsCardComponent = ({
  data,
}: TestimonialsCardComponentProps) => {
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
              <Typography variant="body1">{data?.description}</Typography>
            </Grid>
            <Grid item>
              <Box mt={2}>
                <Typography sx={{ fontSize: 40 }} variant="h1">
                  -{data?.name}
                </Typography>
                <Typography variant="body2" sx={{ fontStyle: 'italic' }}>
                  {data?.designnation}
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
            sx={() => ({})}
          >
            <Grid item>
              <StyledTestimonialImageBox sx={{ backgroundImage: `url(${data?.imgUrl})` }} />
            </Grid>
          </Grid>
        </Box>
      </Grid>
    </Grid>
  );
};

export default TestimonialsCardComponent;
