import React from 'react';
import PropTypes from 'prop-types';
import { Button as ChakraButton } from '@chakra-ui/react';

/**
 * Essential Button – the one source of truth for all buttons.
 * Supports both Chakra’s colorScheme and colorPalette systems.
 */
function Button({
  colorScheme,
  colorPalette,
  variant = 'solid',
  size = 'md',
  onClick,
  children,
  ...rest
}) {
  return (
    <ChakraButton
      colorScheme={colorScheme}   // legacy Chakra
      colorPalette={colorPalette} // your customized Chakra system
      variant={variant}
      size={size}
      onClick={onClick}
      {...rest}
    >
      {children}
    </ChakraButton>
  );
}

Button.propTypes = {
  colorScheme: PropTypes.string,
  colorPalette: PropTypes.string,  // ✅ new prop
  variant: PropTypes.oneOf(['solid', 'outline', 'ghost', 'link', 'unstyled', 'surface', 'subtle']),
  size: PropTypes.oneOf(['xs', 'sm', 'md', 'lg']),
  onClick: PropTypes.func,
  children: PropTypes.node.isRequired,
};

Button.defaultProps = {
  colorScheme: undefined,
  colorPalette: 'blue',   // ✅ fallback if no colorScheme is used
  variant: 'solid',
  size: 'md',
  onClick: () => {},
};

export default Button;
