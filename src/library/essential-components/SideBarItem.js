// SidebarItem.js
import React from 'react';
import { Box, Text, HStack, Icon } from '@chakra-ui/react';

const SidebarItem = ({ label, icon, isActive, onClick }) => {
  return (
    <HStack
      onClick={onClick}
      spacing={3}
      p={3}
      cursor="pointer"
      bg={isActive ? 'blue.500' : 'transparent'}
      color={isActive ? 'white' : 'gray.700'}
      _hover={{ bg: 'blue.100' }}
      borderRadius="md"
    >
      <Icon as={icon} boxSize={5} />
      <Text>{label}</Text>
    </HStack>
  );
};

export default SidebarItem;
