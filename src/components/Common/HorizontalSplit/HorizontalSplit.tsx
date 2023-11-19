import React, { ReactNode } from 'react';
import { StyledHorizontalSplitComponent } from './styled';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import SectionHeadingComponent from '@wyn/components/Common/SectionHeading/SectionHeading';
import SectionSpanComponent from '@wyn/components/Common/SectionHeading/SectionSpan';
import { Button, Paper, Rating, Typography } from '@mui/material';
import Image from 'next/image';
import styles from '../../../styles/authentication.module.css';
import Divider from '@mui/material/Divider';

interface HorizontalSplitComponentProps {
  leftComponent: ReactNode;
  rightComponent: ReactNode;
}

const HorizontalSplitComponent = ({
  leftComponent,
  rightComponent,
}: HorizontalSplitComponentProps) => {
  return (
    <StyledHorizontalSplitComponent>
      <Container disableGutters maxWidth="lg">
        <Grid
          container
          rowSpacing={{ xs: 1 }}
          columnSpacing={{ xs: 0, md: 6 }}
          pt={16}
          pb={10}
        >
          <Grid item xs={12} md={6}>
            {leftComponent}
          </Grid>

          <Grid item xs={12} md={6}>
            {rightComponent}
          </Grid>
        </Grid>
      </Container>
    </StyledHorizontalSplitComponent>
  );
};

export default HorizontalSplitComponent;
