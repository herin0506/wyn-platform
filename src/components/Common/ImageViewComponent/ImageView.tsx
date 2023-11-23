import React from 'react';
import PropTypes from 'prop-types';
interface ImageViewProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
}

const ImageView = ({ src, alt, width, height }: ImageViewProps) => {
  return (
    <div style={{ width: 'auto', height: 'auto', overflow: 'hidden' }}>
      <img
        src={src}
        alt={alt}
        style={{
          maxWidth: width || '100%', // Custom width if provided
          maxHeight: height || 'auto', // Custom height if provided
          display: 'block',
          margin: 'auto',
        }}
      />
    </div>
  );
};

ImageView.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  width: PropTypes.number,
  height: PropTypes.number,
};

export default ImageView;
