import React from 'react';
import PropTypes from 'prop-types';
import { Button } from '@chakra-ui/react';

function FilterTag({ label, isSelected, onClick }) {
  return (
    <Button
      onClick={onClick}
      size="sm"
      fontSize="sm"
      fontWeight="medium"
      px={4}
      py={1}
      borderRadius="full"
      border="1px solid"
      transition="all 0.2s"
      bg={isSelected ? 'black' : 'gray.100'}
      color={isSelected ? 'white' : 'gray.800'}
      borderColor={isSelected ? 'black' : 'gray.300'}
      _hover={{
        bg: isSelected ? 'black' : 'gray.200',
      }}
    >
      {label}
    </Button>
  );
}

FilterTag.propTypes = {
  label: PropTypes.string.isRequired,
  isSelected: PropTypes.bool,
  onClick: PropTypes.func,
};

FilterTag.defaultProps = {
  isSelected: false,
  onClick: () => {},
};

export default FilterTag;
