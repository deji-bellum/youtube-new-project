import React from 'react';
import { Box } from '@chakra-ui/react';
import { userEvent, within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';
import Sidebar from '../existential-components/Sidebar';

export default {
  title: 'Existential Components/Sidebar',
  component: Sidebar,
  parameters: {
    layout: 'fullscreen',
  },
};

// Default story template
const Template = () => (
  <Box w="100vw" h="100vh">
    <Sidebar />
  </Box>
);

export const Default = Template;

Default.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);

  // Get test targets
  const subscriptions = await canvas.findByTestId('sidebar-item-Subscriptions');
  const library = await canvas.findByTestId('sidebar-item-Library');

  // Click 'Subscriptions'
  await userEvent.click(subscriptions);
  expect(subscriptions).toHaveStyle({
    backgroundColor: 'rgb(229, 62, 62)',
    color: 'rgb(255, 255, 255)',
  });

  // Click 'Library'
  await userEvent.click(library);
  expect(library).toHaveStyle({
    backgroundColor: 'rgb(229, 62, 62)',
    color: 'rgb(255, 255, 255)',
  });

  // Ensure 'Subscriptions' is no longer active
  expect(subscriptions).not.toHaveStyle({
    backgroundColor: 'rgb(229, 62, 62)',
  });
};
