import ImageView from '@wyn/components/Common/ImageViewComponent/ImageView';
import { StyledHorizontalImageSection } from './styled';
import PropTypes from 'prop-types';
import useMediaQuery from '@mui/material/useMediaQuery';

interface HorizontalImageSectionComponentProps {
  src?: string;
  desktopSrc?: string;
  mobileSrc?: string;
  alt: string;
  desktopBackgroundImage?: string;
  mobileBackgroundImage?: string;
}

const HorizontalImageSectionComponent = ({
  src,
  alt,
  desktopSrc,
  mobileSrc,
  desktopBackgroundImage,
  mobileBackgroundImage,
}: HorizontalImageSectionComponentProps) => {
  const isDesktopView = useMediaQuery('(min-width:960px)');
  const isMobileTabletView = useMediaQuery('(max-width:959px)');

  return (
    <StyledHorizontalImageSection
      maxWidth="xl"
      sx={{
        ...(isDesktopView && {
          backgroundImage: `url('${desktopBackgroundImage}')`,
        }),
        ...(isMobileTabletView && {
          backgroundImage: `url('${mobileBackgroundImage}')`,
        }),
      }}
    >
      <ImageView
        src={(isDesktopView ? desktopSrc : mobileSrc) || src || ''}
        alt={alt}
      />
    </StyledHorizontalImageSection>
  );
};

export default HorizontalImageSectionComponent;
