import {
  Box,
  Container,
  useMediaQuery
} from '@mui/material';
import LeftDetailsComponent from '@wyn/components/BuyNow/LeftDetails/LeftDetails';
import RightDetailsComponent from '@wyn/components/BuyNow/RightDetails/RightDetails';
import HorizontalSplitComponent from '@wyn/components/Common/HorizontalSplit/HorizontalSplit';
import { Fragment } from 'react';

const BuyNow = () => {
  const isDesktopView = useMediaQuery('(min-width:960px)');
  const isMobileTabletView = useMediaQuery('(max-width:959px)');
  return (
    <Fragment>
      <Box mt={10}>
        <Container maxWidth="xl" >
          <HorizontalSplitComponent
            leftComponent={<LeftDetailsComponent />}
            rightComponent={<RightDetailsComponent />}
            inverseChildInMobileView={false}
            leftWidth={50}
            rightWidth={30}
            enableDivider={true}
            leftBackgroundColor=""
            rightBackgroundColor=""
          />
        </Container>
      </Box>
    </Fragment>
  );
};

export default BuyNow;
