import { Box, Container } from '@mui/material';
import BannerComponent from '@wyn/components/Common/Banner/Banner';
import HorizontalContentSectionComponent from '@wyn/components/Common/HorizontalContentSection/HorizontalContentSection';
import HorizontalImageSectionComponent from '@wyn/components/Common/HorizontalImageSection/HorizontalImageSection';
import HorizontalSplitComponent from '@wyn/components/Common/HorizontalSplit/HorizontalSplit';
import NaturalHerbsContainer from '@wyn/components/Home/NaturalHerbs/NaturalHerbs';
import ThumbnailDescriptionListComponent from './../../components/Common/ThumbnailDescriptionList/ThumbnailDescriptionList';
import {
  whatWeOfferContent,
  whyWYNContent,
  benefitsData,
} from '@wyn/utils/constants';
const WhyWynPage = () => {
  return (
    <Box mt={0}>
      <BannerComponent
        alt="main-banner"
        desktopImgUrl="/images/Vector.png"
        mobileImgUrl="/images/Vector_mobile.png"
      />
      <Container maxWidth="xl">
        <HorizontalSplitComponent
          inverseChildInMobileView={true}
          leftComponent={
            <HorizontalImageSectionComponent
              src="/images/frame.png"
              alt="Nutrients Details Image"
            />
          }
          rightComponent={
            <HorizontalContentSectionComponent {...whyWYNContent} />
          }
        />
      </Container>
      <Container maxWidth="xl">
        <ThumbnailDescriptionListComponent
          heading={benefitsData?.heading}
          itemList={benefitsData?.itemList}
        />
      </Container>
      <Container disableGutters maxWidth="xl">
        <NaturalHerbsContainer />
      </Container>
      <Container maxWidth="xl">
        <HorizontalSplitComponent
          inverseChildInMobileView={true}
          leftComponent={
            <HorizontalImageSectionComponent
              src="/images/image7.png"
              alt="what we offer details"
            />
          }
          rightComponent={
            <HorizontalContentSectionComponent {...whatWeOfferContent} />
          }
        />
      </Container>
    </Box>
  );
};

export default WhyWynPage;
