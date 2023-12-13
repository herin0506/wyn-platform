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

const WhyWynPage = () => {
  const isDesktopView = useMediaQuery('(min-width:960px)');
  const isMobileTabletView = useMediaQuery('(max-width:959px)');
  return (
    <Fragment>
      <Box mt={0}>
        <BannerComponent
          alt="main-banner"
          desktopImgUrl="/images/meettheteam.png"
          mobileImgUrl="/images/meettheteam_mobile.png"
        />
        <Container
          disableGutters={isDesktopView}
          maxWidth="lg"
          className="mt-5"
        >
          <BannerComponent
            alt="main-banner"
            desktopImgUrl="/images/birth.png"
            mobileImgUrl="/images/birth_mobile.png"
          />
          <Typography py={3} variant="h4">
            {meetTheTeam.title}
          </Typography>
          <Divider />
          <Typography variant="h6" mb={5}>
            {meetTheTeam.description}
          </Typography>
        </Container>
        <Container maxWidth="xl">
          <HorizontalSplitComponent
            leftComponent={
              <HorizontalContentSectionComponent {...teamDetails[0]} />
            }
            rightComponent={
              <HorizontalImageSectionComponent
                src="/images/team1.png"
                alt="what we offer details"
              />
            }
            inverseChildInMobileView={true}
          />
          <HorizontalSplitComponent
            leftComponent={
              <HorizontalImageSectionComponent
                src="/images/team2.png"
                alt="what we offer details"
              />
            }
            rightComponent={
              <HorizontalContentSectionComponent {...teamDetails[1]} />
            }
            inverseChildInMobileView={false}
          />
          <HorizontalSplitComponent
            leftComponent={
              <HorizontalContentSectionComponent {...teamDetails[2]} />
            }
            rightComponent={
              <HorizontalImageSectionComponent
                src="/images/team3.png"
                alt="what we offer details"
              />
            }
            inverseChildInMobileView={true}
          />
        </Container>
        <DiscoverCategoriesComponent />
      </Box>
    </Fragment>
  );
};

export default WhyWynPage;
