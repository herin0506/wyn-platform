import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import React from 'react';

interface CollectionInfoComponentProps {
  title: string;
  subTitle?: string;
  infoContent?: string;
}

const CollectionInfoComponent = ({
  title,
  subTitle,
  infoContent,
}: CollectionInfoComponentProps) => {
  return (
    <Grid container>
      <Grid item xs={12}>
        <Typography variant="h4">{title}</Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography mt={2} variant="h4">
          {subTitle}
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography mt={2} variant="body1">
          {infoContent}
        </Typography>
      </Grid>
    </Grid>
  );
};

export default CollectionInfoComponent;
