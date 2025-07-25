// src/existential-components/SidebarItem.js
import React from 'react';
import { Box, Text, HStack, Icon } from '@chakra-ui/react';

const SidebarItem = ({ label, icon, isActive, onClick }) => {
  return (
    <HStack
      onClick={onClick}
      spacing={3}
      p={3}
      cursor="pointer"
      bg={isActive ? 'red.500' : 'transparent'}
      color={isActive ? 'white' : 'gray.700'}
      _hover={{ bg: isActive ? 'red.500' : 'red.100' }}
      borderRadius="md"
      data-testid={`sidebar-item-${label}`}
    >
      <Icon as={icon} boxSize={5} />
      <Text>{label}</Text>
    </HStack>
  );
};

export default SidebarItem;
