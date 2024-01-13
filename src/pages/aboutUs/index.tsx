import { Box, Container, Divider, Typography } from '@mui/material';
import BannerComponent from '@wyn/components/Common/Banner/Banner';
import HorizontalContentSectionComponent from '@wyn/components/Common/HorizontalContentSection/HorizontalContentSection';
import HorizontalImageSectionComponent from '@wyn/components/Common/HorizontalImageSection/HorizontalImageSection';
import HorizontalSplitComponent from '@wyn/components/Common/HorizontalSplit/HorizontalSplit';
import ThumbnailDescriptionListComponent from './../../components/Common/ThumbnailDescriptionList/ThumbnailDescriptionList';
import {
  birthOfWYN,
  whatWeOfferContent,
  empoweringWomen,
  ayurveda,
  menstrualWellness,
  sensualWellness,
  pregnancyPrepareAndCare,
  menopausalWellness,
  dailyWellness,
  guidingPrinciples,
} from '@wyn/utils/constants';
import useMediaQuery from '@mui/material/useMediaQuery';
import DiscoverCategoriesComponent from '@wyn/components/Home/DiscoverCategories/DiscoverCategories';

const AboutUsPage = () => {
  const isMobileTabletView = useMediaQuery('(max-width:959px)');
  return (
    <Box mt={0}>
      <BannerComponent
        alt="main-banner"
        desktopImgUrl="/images/about_us_banner.png"
        mobileImgUrl="/images/about_us_mobile_banner.png"
      />
      <Container maxWidth="xl">
        <HorizontalSplitComponent
          leftComponent={<HorizontalContentSectionComponent {...birthOfWYN} />}
          rightComponent={
            <HorizontalImageSectionComponent
              src="/images/birth.png"
              alt="Your Image"
            />
          }
          inverseChildInMobileView={true}
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
          desktopBackgroundImage="/images/background_light.png"
          //mobileBackgroundImage="/images/background_light.png"
          inverseChildInMobileView={false}
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
          rightComponent={
            <HorizontalContentSectionComponent {...whatWeOfferContent} />
          }
          inverseChildInMobileView={false}
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
          inverseChildInMobileView={true}
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
          rightComponent={
            <HorizontalContentSectionComponent {...menstrualWellness} />
          }
          inverseChildInMobileView={false}
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
          inverseChildInMobileView={true}
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
          inverseChildInMobileView={true}
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
  );
};

export default AboutUsPage;
