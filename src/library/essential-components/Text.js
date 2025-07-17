// src/library/essential-components/Text.js
import React from 'react';
import PropTypes from 'prop-types';
import { Text as ChakraText } from '@chakra-ui/react';

/**
 * Essential Text component built with Chakra UI.
 *
 * Props:
 *  • size  – font size key (sm | md | lg | xl | 2xl)
 *  • weight – font‑weight key (normal | medium | semibold | bold)
 *  • color – any Chakra color token or CSS color string
 *  • className – optional extra class names
 *  • ...rest – any other Chakra <Text> props
 */
function Text({ children, size, weight, color, className, ...rest }) {
  // Map prop names to Chakra-friendly values
  const fontSizes = {
    sm: 'sm',
    md: 'md',
    lg: 'lg',
    xl: 'xl',
    '2xl': '2xl',
  };

  const fontWeights = {
    normal: 'normal',
    medium: 'medium',
    semibold: 'semibold',
    bold: 'bold',
  };

  return (
    <ChakraText
      fontSize={fontSizes[size] || fontSizes.md}
      fontWeight={fontWeights[weight] || fontWeights.normal}
      color={color}
      className={className}
      {...rest}
    >
      {children}
    </ChakraText>
  );
}

Text.propTypes = {
  children: PropTypes.node.isRequired,
  size: PropTypes.oneOf(['sm', 'md', 'lg', 'xl', '2xl']),
  weight: PropTypes.oneOf(['normal', 'medium', 'semibold', 'bold']),
  color: PropTypes.string,
  className: PropTypes.string,
};

Text.defaultProps = {
  size: 'md',
  weight: 'normal',
  color: 'black',   // Chakra color token or plain CSS color
  className: '',
};

export default Text;
