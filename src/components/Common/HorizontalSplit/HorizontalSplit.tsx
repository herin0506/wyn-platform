import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import { ReactNode } from 'react';
import { StyledHorizontalSplitComponent } from './styled';
import useMediaQuery from '@mui/material/useMediaQuery';
import { Divider } from '@mui/material';

interface HorizontalSplitComponentProps {
  leftComponent: ReactNode;
  rightComponent: ReactNode;
  desktopBackgroundImage?: string;
  mobileBackgroundImage?: string;
  inverseChildInMobileView: Boolean;
  leftWidth?:number;
  rightWidth?:number;
  enableDivider?: Boolean;
  leftBackgroundColor?: string;
  rightBackgroundColor?: string;
}

const HorizontalSplitComponent = ({
  leftComponent,
  rightComponent,
  desktopBackgroundImage,
  mobileBackgroundImage,
  inverseChildInMobileView,
  leftWidth=50,
  rightWidth=50,
  enableDivider=false,
  leftBackgroundColor='',
  rightBackgroundColor='',
}: HorizontalSplitComponentProps) => {
  const isDesktopView = useMediaQuery('(min-width:960px)');
  const isMobileTabletView = useMediaQuery('(max-width:959px)');
  const direction =
    inverseChildInMobileView && isMobileTabletView ? 'column-reverse' : 'row';

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
          columnSpacing={{ xs: 0, md: 0 }}
          direction={direction}
          pt={8}
          pb={8}
          display={'flex'}
          justifyContent={'center'}
        >
          <Grid
            item
            xs={12}
            md={Math.ceil((leftWidth / 100) * 12)}
            sx={{
              borderRight:
                enableDivider && isDesktopView ? '1px solid lightgrey' : '0px',
              paddingRight: isMobileTabletView ? '0px' : '40px',
              backgroundColor: leftBackgroundColor,
            }}
          >
            {leftComponent}
          </Grid>

          {/* {enableDivider &&
          <Divider
            orientation={'vertical'}
            flexItem
            sx={{ borderRight: '2px solid black', margin: '0px 0px' }}
          />} */}
          <Grid
            item
            xs={12}
            md={Math.ceil((rightWidth / 100) * 12)}
            sx={{
              borderLeft:
                enableDivider && isDesktopView ? '1px solid lightgrey' : '0px',
              paddingLeft: isMobileTabletView ? '0px' : '40px',
              backgroundColor: rightBackgroundColor,
            }}
          >
            {rightComponent}
          </Grid>
        </Grid>
      </Container>
    </StyledHorizontalSplitComponent>
  );
};

export default HorizontalSplitComponent;
