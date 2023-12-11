import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import { ReactNode } from 'react';
import { StyledHorizontalSplitComponent } from './styled';
import useMediaQuery from '@mui/material/useMediaQuery';

interface HorizontalSplitComponentProps {
  leftComponent: ReactNode;
  rightComponent: ReactNode;
  desktopBackgroundImage?: string;
  mobileBackgroundImage?: string;
}

const HorizontalSplitComponent = ({
  leftComponent,
  rightComponent,
  desktopBackgroundImage,
  mobileBackgroundImage,
}: HorizontalSplitComponentProps) => {
  const isDesktopView = useMediaQuery('(min-width:960px)');
  const isMobileTabletView = useMediaQuery('(max-width:959px)');

  return (
    <StyledHorizontalSplitComponent
      sx={{
        ...(isDesktopView && {
          backgroundImage: `url('${desktopBackgroundImage}')`,
        }),
        ...(isMobileTabletView && {
          backgroundImage: `url('${mobileBackgroundImage}')`,
        }),
      }}
    >
      <Container disableGutters maxWidth="lg">
        <Grid
          container
          rowSpacing={{ xs: 1 }}
          columnSpacing={{ xs: 0, md: 6 }}
          pt={8}
          pb={8}
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
