import ImageView from '@wyn/components/Common/ImageViewComponent/ImageView';
import { StyledHorizontalImageSection } from './styled';
import PropTypes from 'prop-types';

interface HorizontalImageSectionComponentProps {
  src: string;
  alt: string;
}

const HorizontalImageSectionComponent = ({
  src,
  alt,
}: HorizontalImageSectionComponentProps) => {
  return (
    <StyledHorizontalImageSection maxWidth="xl">
      <ImageView src={src} alt="Your Image" />
    </StyledHorizontalImageSection>
  );
};

HorizontalImageSectionComponent.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};

export default HorizontalImageSectionComponent;
