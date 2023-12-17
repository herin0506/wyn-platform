import {
  Box,
  Container,
  Divider,
  Typography,
  useMediaQuery,
} from '@mui/material';
import BannerComponent from '@wyn/components/Common/Banner/Banner';
import HorizontalContentSectionComponent from '@wyn/components/Common/HorizontalContentSection/HorizontalContentSection';
import HorizontalImageSectionComponent from '@wyn/components/Common/HorizontalImageSection/HorizontalImageSection';
import HorizontalSplitComponent from '@wyn/components/Common/HorizontalSplit/HorizontalSplit';
import {
  meetTheTeam,
  whatWeOfferContent,
  teamDetails,
} from '@wyn/utils/constants';
import { Fragment } from 'react';
import DiscoverCategoriesComponent from '@wyn/components/Home/DiscoverCategories/DiscoverCategories';
import LeftDetailsComponent from '@wyn/components/BuyNow/LeftDetails/LeftDetails';
import RightDetailsComponent from '@wyn/components/BuyNow/RightDetails/RightDetails';

const WhyWynPage = () => {
  const isDesktopView = useMediaQuery('(min-width:960px)');
  const isMobileTabletView = useMediaQuery('(max-width:959px)');
  return (
    <Fragment>
      <Box mt={14}>
        <Container maxWidth="xl">
          <HorizontalSplitComponent
            leftComponent={
              <LeftDetailsComponent />
            }
            rightComponent={
              <RightDetailsComponent />
            }
            inverseChildInMobileView={true}
          />
        </Container>
      </Box>
    </Fragment>
  );
};

export default WhyWynPage;
