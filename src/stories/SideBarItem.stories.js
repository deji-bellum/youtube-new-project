// src/stories/SidebarItem.stories.js
import React, { useState } from 'react';
import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';
import { FaHome, FaStar } from 'react-icons/fa';
import SidebarItem from '../library/essential-components/SideBarItem';

export default {
  title: 'EssentialComponents/SidebarItem',
  component: SidebarItem,
  argTypes: {
    label: { control: 'text' },
    isActive: { control: 'boolean' },
    icon: { table: { disable: true } }, // we’ll handle icons manually
  },
};

// Reusable Template
const Template = (args) => <SidebarItem {...args} />;

// Default Story
export const Default = Template.bind({});
Default.args = {
  label: 'Home',
  icon: FaHome, // Pass icon component
  isActive: false,
};

// Active Story
export const Active = Template.bind({});
Active.args = {
  label: 'Trending',
  icon: FaStar,
  isActive: true,
};

// Interactive Story
export const Interactive = () => {
  const [active, setActive] = useState(false);
  return (
    <SidebarItem
      icon={FaStar}
      label={active ? 'Selected' : 'Click Me'}
      isActive={active}
      onClick={() => setActive(!active)}
    />
  );
};

// 🧪 Play function for Default
Default.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const item = await canvas.findByText('Home');
  expect(item).toBeInTheDocument();
};

// 🧪 Play function for Active
Active.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const item = await canvas.findByText('Trending');
  expect(item).toBeInTheDocument();
};
