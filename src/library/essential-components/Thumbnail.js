// src/library/essential-components/Thumbnail.js
import React from 'react';
import PropTypes from 'prop-types';
import { Image } from '@chakra-ui/react';


function Thumbnail({
  src,
  alt,
  width = '100%',
  height = 'auto',
  radius = 'md',
  ...rest
}) {
  return (
    <Image
      src={src}
      alt={alt}
      objectFit="cover"
      borderRadius={radius}
      w={width}
      h={height}
      {...rest}
    />
  );
}

Thumbnail.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  radius: PropTypes.oneOfType([
    PropTypes.string, // 'sm', 'md', 'lg', 'full', etc.
    PropTypes.number, // custom pixel radius
  ]),
};

Thumbnail.defaultProps = {
  width: '100%',
  height: 'auto',
  radius: 'md',
};

export default Thumbnail;
