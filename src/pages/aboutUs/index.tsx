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
import { Fragment } from 'react';

const AboutUsPage = () => {
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
          />
          <HorizontalSplitComponent
            leftComponent={
              <HorizontalImageSectionComponent
                src="/logos/logo_big.png"
                alt="Your Image"
              />
            }
            rightComponent={
              <HorizontalContentSectionComponent {...empoweringWomen} />
            }
          />
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
          />
        </Container>
      </Box>
    </Fragment>
  );
};

export default AboutUsPage;
