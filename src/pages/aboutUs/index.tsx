import { Container } from '@mui/material';
import BannerComponent from '@wyn/components/Common/Banner/Banner';
import HorizontalContentSectionComponent from '@wyn/components/Common/HorizontalContentSection/HorizontalContentSection';
import HorizontalImageSectionComponent from '@wyn/components/Common/HorizontalImageSection/HorizontalImageSection';
import HorizontalSplitComponent from '@wyn/components/Common/HorizontalSplit/HorizontalSplit';
import {
  birthOfWYN,
  whatWeOfferContent,
  empoweringWomen,
} from '@wyn/utils/constants';
import { Fragment } from 'react';

const AboutUsPage = () => {
  return (
    <Fragment>
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
      </Container>
    </Fragment>
  );
};

export default AboutUsPage;
