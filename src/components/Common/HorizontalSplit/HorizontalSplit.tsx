import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import useMediaQuery from '@mui/material/useMediaQuery';
import { ReactNode } from 'react';
import { StyledHorizontalSplitComponent } from './styled';
import { Box } from '@mui/material';

interface HorizontalSplitComponentProps {
  leftComponent: ReactNode;
  rightComponent: ReactNode;
  desktopBackgroundImage?: string;
  mobileBackgroundImage?: string;
  inverseChildInMobileView: Boolean;
  leftWidth?: number;
  rightWidth?: number;
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
  leftWidth = 50,
  rightWidth = 50,
  enableDivider = false,
  leftBackgroundColor = '',
  rightBackgroundColor = '',
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
      <Grid
        container
        rowSpacing={{ xs: 1 }}
        columnSpacing={{ xs: 0, md: 0 }}
        direction={direction}
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
            paddingRight: isMobileTabletView ? '0px' : '20px',
            backgroundColor: leftBackgroundColor,
          }}
          display={'flex'}
          justifyContent={'end'}
        >
          <Grid
            item
            xs={12}
            md={10}
            px={2}
            py={5}
            display={'flex'}
            justifyContent={'end'}
          >
            {leftComponent}
          </Grid>
        </Grid>
        <Grid
          item
          xs={12}
          md={12 - Math.ceil((leftWidth / 100) * 12)}
          sx={{
            borderLeft:
              enableDivider && isDesktopView ? '1px solid lightgrey' : '0px',
            paddingLeft: isMobileTabletView ? '0px' : '20px',
            backgroundColor: rightBackgroundColor,
          }}
        >
          <Grid item xs={12} md={10} px={2} py={5}>
            {rightComponent}
          </Grid>
        </Grid>
      </Grid>
    </StyledHorizontalSplitComponent>
  );
};

export default HorizontalSplitComponent;
