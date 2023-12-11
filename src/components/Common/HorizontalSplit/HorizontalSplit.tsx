import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import { ReactNode } from 'react';
import { StyledHorizontalSplitComponent } from './styled';

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
          pt={5}
          pb={5}
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
