import React from 'react';
import { StyledIconWithTextCardWrapper } from './styled';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Image from 'next/image';

interface IconWithTextCardComponentProps {
  iconUrl: string;
  label: string;
}

const IconWithTextComponent = ({
  iconUrl,
  label,
}: IconWithTextCardComponentProps) => {
  return (
    <StyledIconWithTextCardWrapper>
      <Grid container direction="column" alignItems="center">
        <Grid item md={12} sm={12} lg={12} xl={12}>
          <Box component="div" className="__icon_box">
            <Image
              fill
              objectFit="contained"
              alt={label}
              src={iconUrl}
            />
          </Box>
        </Grid>
        <Grid xs item md={12} sm={12} lg={12} xl={12}>
          <Typography textAlign="center" variant="body2">
            {label}
          </Typography>
        </Grid>
      </Grid>
    </StyledIconWithTextCardWrapper>
  );
};

export default IconWithTextComponent;
