import { Container } from '@mui/material';
import BannerComponent from '@wyn/components/Common/Banner/Banner';
import HorizontalContentSectionComponent from '@wyn/components/Common/HorizontalContentSection/HorizontalContentSection';
import HorizontalImageSectionComponent from '@wyn/components/Common/HorizontalImageSection/HorizontalImageSection';
import HorizontalSplitComponent from '@wyn/components/Common/HorizontalSplit/HorizontalSplit';
import NaturalHerbsContainer from '@wyn/components/Home/NaturalHerbs/NaturalHerbs';
import Benefits from '@wyn/components/WhyWyn/Benefits/Benefits';
import { whatWeOfferContent, whyWYNContent } from '@wyn/utils/constants';
import { Fragment } from 'react';

const WhyWynPage = () => {
  return (
    <Fragment>
      <BannerComponent
        alt="main-banner"
        desktopImgUrl="/images/Vector.png"
        mobileImgUrl="/images/Vector_mobile.png"
      />
      <Container maxWidth="xl">
        <HorizontalSplitComponent
          leftComponent={
            <HorizontalImageSectionComponent
              src="/images/frame.png"
              alt="Nutrients Details Image"
            />
          }
          rightComponent={<HorizontalContentSectionComponent {...whyWYNContent} />}
        />
      </Container>
      <Container maxWidth="xl">
        <Benefits />
      </Container>
      <Container disableGutters maxWidth="xl">
        <NaturalHerbsContainer />
      </Container>
      <Container maxWidth="xl">
        <HorizontalSplitComponent
          leftComponent={
            <HorizontalImageSectionComponent
              src="/images/image7.png"
              alt="what we offer details"
            />
          }
          rightComponent={<HorizontalContentSectionComponent {...whatWeOfferContent} />}
        />
      </Container>
    </Fragment>
  );
};

export default WhyWynPage;
