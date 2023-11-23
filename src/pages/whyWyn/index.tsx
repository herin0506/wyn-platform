import { Container } from '@mui/material';
import BannerComponent from '@wyn/components/Common/Banner/Banner';
import HorizontalSplitComponent from '@wyn/components/Common/HorizontalSplit/HorizontalSplit';
import NaturalHerbsContainer from '@wyn/components/Home/NaturalHerbs/NaturalHerbs';
import Benefits from '@wyn/components/WhyWyn/Benefits/Benefits';
import NutrientsDetails from '@wyn/components/WhyWyn/NutrientsDetails/NutrientsDetails';
import NutrientsImage from '@wyn/components/WhyWyn/NutrientsImage/NutrientsImage';
import WhatWeOfferDetails from '@wyn/components/WhyWyn/WhatWeOfferDetails/WhatWeOfferDetails';
import WhatWeOfferImage from '@wyn/components/WhyWyn/WhatWeOfferImage/WhatWeOfferImage';
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
          leftComponent={<NutrientsImage />}
          rightComponent={<NutrientsDetails {...whyWYNContent} />}
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
          leftComponent={<WhatWeOfferImage />}
          rightComponent={
            <WhatWeOfferDetails {...whatWeOfferContent} />
          }
        />
      </Container>
    </Fragment>
  );
};

export default WhyWynPage;
