import ImageView from '@wyn/components/Common/ImageViewComponent/ImageView';
import { StyledWhatWeOfferImage } from './styled';

const WhatWeOfferImageComponent = () => {
  return (
    <StyledWhatWeOfferImage maxWidth="xl">
      <ImageView src="/images/image7.png" alt="Your Image" />
    </StyledWhatWeOfferImage>
  );
};

export default WhatWeOfferImageComponent;
