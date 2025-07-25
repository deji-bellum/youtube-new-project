// src/existential-components/Sidebar.js
import React, { useState } from 'react';
import { Box, VStack } from '@chakra-ui/react';
import { FaHome, FaFire, FaYoutube, FaBook, FaHistory } from 'react-icons/fa';
import SidebarItem from '../library/essential-components/SideBarItem';


const items = [
  { label: 'Home', icon: FaHome },
  { label: 'Trending', icon: FaFire },
  { label: 'Subscriptions', icon: FaYoutube },
  { label: 'Library', icon: FaBook },
  { label: 'History', icon: FaHistory },
];

const Sidebar = () => {
  const [activeLabel, setActiveLabel] = useState('Home');

  return (
    <Box w="240px" bg="gray.50" h="100vh" p={2}>
      <VStack align="stretch" spacing={1}>
        {items.map((item) => (
          <SidebarItem
            key={item.label}
            label={item.label}
            icon={item.icon}
            isActive={activeLabel === item.label}
            onClick={() => setActiveLabel(item.label)}
          />
        ))}
      </VStack>
    </Box>
  );
};

export default Sidebar;
