import React from 'react';
import PropTypes from 'prop-types';
interface ImageViewProps {
  src: string;
  alt: string;
  width?: string;
  height?: string;
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

export default ImageView;
