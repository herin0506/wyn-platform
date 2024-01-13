import { Box, Container, useMediaQuery } from '@mui/material';
import LeftDetailsComponent from '@wyn/components/BuyNow/LeftDetails/LeftDetails';
import RightDetailsComponent from '@wyn/components/BuyNow/RightDetails/RightDetails';
import HorizontalSplitComponent from '@wyn/components/Common/HorizontalSplit/HorizontalSplit';
import { Fragment } from 'react';

const BuyNow = () => {
  const isDesktopView = useMediaQuery('(min-width:960px)');
  const isMobileTabletView = useMediaQuery('(max-width:959px)');
  return (
    <Box mt={10}>
      <HorizontalSplitComponent
        leftComponent={<LeftDetailsComponent />}
        rightComponent={<RightDetailsComponent />}
        inverseChildInMobileView={false}
        leftWidth={55}
        rightWidth={45}
        enableDivider={true}
        leftBackgroundColor=""
        rightBackgroundColor="#f5f5f5"
      />
    </Box>
  );
};

export default BuyNow;
