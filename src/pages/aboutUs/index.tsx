import { Box, Container, Divider, Typography } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';
import BannerComponent from '@wyn/components/Common/Banner/Banner';
import HorizontalContentSectionComponent from '@wyn/components/Common/HorizontalContentSection/HorizontalContentSection';
import HorizontalImageSectionComponent from '@wyn/components/Common/HorizontalImageSection/HorizontalImageSection';
import HorizontalSplitComponent from '@wyn/components/Common/HorizontalSplit/HorizontalSplit';
import DiscoverCategoriesComponent from '@wyn/components/Home/DiscoverCategories/DiscoverCategories';
import {
  ayurveda,
  birthOfWYN,
  dailyWellness,
  empoweringWomen,
  guidingPrinciples,
  menopausalWellness,
  menstrualWellness,
  pregnancyPrepareAndCare,
  sensualWellness,
  whatWeOfferContent,
} from '@wyn/utils/constants';
import { Fragment } from 'react';
import ThumbnailDescriptionListComponent from './../../components/Common/ThumbnailDescriptionList/ThumbnailDescriptionList';

const AboutUsPage = () => {
  const isMobileTabletView = useMediaQuery('(max-width:959px)');
  return (
    <Fragment>
      <Box mt={0}>
        <BannerComponent
          alt="main-banner"
          desktopImgUrl="/images/about_us_banner.png"
          mobileImgUrl="/images/about_us_mobile_banner.png"
        />
        <Container maxWidth="xl">
          <HorizontalSplitComponent
            leftComponent={
              <HorizontalContentSectionComponent {...birthOfWYN} />
            }
            rightComponent={
              <HorizontalImageSectionComponent
                src="/images/birth.png"
                alt="Your Image"
              />
            }
            inverseChildInMobileView={false}
          />
        </Container>
        <Container maxWidth="xl" disableGutters={!isMobileTabletView}>
          <HorizontalSplitComponent
            leftComponent={
              <HorizontalImageSectionComponent
                desktopSrc="/logos/logo_big.png"
                mobileSrc="/logos/logo.png"
                alt="Your Image"
                mobileBackgroundImage="/images/background_light.png"
              />
            }
            rightComponent={
              <HorizontalContentSectionComponent {...empoweringWomen} />
            }
            inverseChildInMobileView={false}
            desktopBackgroundImage="/images/background_light.png"
            //mobileBackgroundImage="/images/background_light.png"
          />
        </Container>
        <Container maxWidth="xl">
          <HorizontalSplitComponent
            leftComponent={
              <HorizontalImageSectionComponent
                src="/images/image7.png"
                alt="Your Image"
              />
            }
            inverseChildInMobileView={false}
            rightComponent={
              <HorizontalContentSectionComponent {...whatWeOfferContent} />
            }
          />
          <ThumbnailDescriptionListComponent {...guidingPrinciples} />

          <HorizontalSplitComponent
            leftComponent={<HorizontalContentSectionComponent {...ayurveda} />}
            rightComponent={
              <HorizontalImageSectionComponent
                src="/images/ayurveda.png"
                alt="Your Image"
              />
            }
            inverseChildInMobileView={false}
          />
          <Typography pb={3} variant="h4" className="text-center">
            {'Discover Your Personal Wellness Journey with WYN'}
          </Typography>
          <Divider />
          <HorizontalSplitComponent
            leftComponent={
              <HorizontalImageSectionComponent
                src="/images/menstrual-wellness.png"
                alt="Your Image"
              />
            }
            inverseChildInMobileView={false}
            rightComponent={
              <HorizontalContentSectionComponent {...menstrualWellness} />
            }
          />
          <HorizontalSplitComponent
            leftComponent={
              <HorizontalContentSectionComponent {...sensualWellness} />
            }
            rightComponent={
              <HorizontalImageSectionComponent
                src="/images/sensual-wellness.png"
                alt="Your Image"
              />
            }
            inverseChildInMobileView={false}
          />
          <HorizontalSplitComponent
            leftComponent={
              <HorizontalImageSectionComponent
                src="/images/pregnancy-prepare-care.png"
                alt="Your Image"
              />
            }
            rightComponent={
              <HorizontalContentSectionComponent {...pregnancyPrepareAndCare} />
            }
            inverseChildInMobileView={false}
          />
          <HorizontalSplitComponent
            leftComponent={
              <HorizontalContentSectionComponent {...menopausalWellness} />
            }
            rightComponent={
              <HorizontalImageSectionComponent
                src="/images/menopause-wellness.png"
                alt="Your Image"
              />
            }
            inverseChildInMobileView={false}
          />
          <HorizontalSplitComponent
            leftComponent={
              <HorizontalImageSectionComponent
                src="/images/everyday-wellness.png"
                alt="Your Image"
              />
            }
            rightComponent={
              <HorizontalContentSectionComponent {...dailyWellness} />
            }
            inverseChildInMobileView={false}
          />
        </Container>
        <DiscoverCategoriesComponent />
      </Box>
    </Fragment>
  );
};

export default AboutUsPage;
