import ImageView from '@wyn/components/Common/ImageViewComponent/ImageView';
import { StyledInfoImage } from './styled';

const InfoImageComponent = () => {
  return (
    <StyledInfoImage maxWidth="xl">
      <ImageView src="/images/group.png" alt="Your Image" />
    </StyledInfoImage>
  );
};

export default InfoImageComponent;
