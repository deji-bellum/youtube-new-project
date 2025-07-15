import React from 'react';
import { Box, Flex, Text } from '@chakra-ui/react';

function Logo() {
  return (
    <Flex align="center" gap={2} cursor="pointer">
      {/* Red play button */}
      <Box
        width="32px"
        height="24px"
        bg="red.600"
        display="flex"
        alignItems="center"
        justifyContent="center"
        borderRadius="sm"
      >
        <svg
          width="16"
          height="16"
          fill="white"
          viewBox="0 0 24 24"
        >
          <path d="M10 16.5l6-4.5-6-4.5v9z" />
        </svg>
      </Box>

      {/* YouTube Text */}
      <Text fontSize="xl" fontWeight="bold" letterSpacing="-0.5px">
        YouTube
      </Text>
    </Flex>
  );
}

export default Logo;
