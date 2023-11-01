import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import React from 'react';
import StepComponent from './Step';
import { STEPS } from '@wyn/utils/constants';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';

const JoinUsFormComponent = () => {
  return (
    <Grid
      container
      alignItems="flex-end"
      height="100%"
      item
      justifyContent="start"
      md={7}
    >
      <Grid pl={5} item xs={12}>
        <Card elevation={0}>
          <CardContent>
            <Typography pb={2}>Come join our WYNing initiative</Typography>
            <Divider />
            <Typography pt={2} variant="body2">
              Join us, and together, let &rsquo;s create a supportive community
              where you can showcase our products and achieve financial
              independence.
            </Typography>
            <Grid mt={2} container spacing={3}>
              {STEPS.map((step, index) => (
                <Grid key={index} item md={3}>
                  <StepComponent
                    titleColor={step.labelColor}
                    title={step.step}
                    description={step.info}
                  />
                </Grid>
              ))}
            </Grid>
            <Box mt={2} mb={2}>
              <Typography pt={2} pr={3} variant="body2">
                Register now to embark on this exciting journey of empowerment
                and entrepreneurship with WYN!
              </Typography>
            </Box>
            <Grid rowSpacing={2} columnSpacing={4} container>
              <Grid item md={6}>
                <TextField
                  fullWidth
                  placeholder="Name"
                  label=""
                  variant="standard"
                />
              </Grid>
              <Grid item md={6}>
                <TextField
                  fullWidth
                  placeholder="Date of Birth"
                  label=""
                  variant="standard"
                />
              </Grid>
              <Grid item md={6}>
                <TextField
                  fullWidth
                  placeholder="Mobile"
                  label=""
                  variant="standard"
                />
              </Grid>
              <Grid item md={6}>
                <TextField
                  fullWidth
                  placeholder="Email"
                  label=""
                  variant="standard"
                />
              </Grid>
            </Grid>
            <Grid mt={4} container alignItems="center" justifyContent="center">
              <Button sx={{borderRadius:"100px"}} variant="contained" size="medium">
                Register
              </Button>
            </Grid>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default JoinUsFormComponent;
