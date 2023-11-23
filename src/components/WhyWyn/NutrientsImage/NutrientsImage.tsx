import ImageView from '@wyn/components/Common/ImageViewComponent/ImageView';
import { StyledNutrientsImage } from './styled';

const NutrientsImageComponent = () => {
  return (
    <StyledNutrientsImage maxWidth="xl">
      <ImageView src="/images/frame.png" alt="Your Image" />
    </StyledNutrientsImage>
  );
};

export default NutrientsImageComponent;
