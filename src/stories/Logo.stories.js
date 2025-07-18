import React from 'react';
import { expect } from '@storybook/jest';
import { within } from '@storybook/testing-library';
import Logo from '../library/essential-components/Logo';

export default {
  title: 'Essential/Logo',
  component: Logo,
};

const Template = (args) => <Logo {...args} />;

export const Default = Template.bind({});
Default.args = {};

Default.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);

  // 1. Logo container exists
  const text = await canvas.getByText('YouTube');
  expect(text).toBeInTheDocument();

  // 2. Play button (SVG) exists
  const svg = canvas.getByRole('img', { hidden: true }) || canvas.getByTestId('play-icon');
  expect(svg).toBeInTheDocument();

  // 3. Text is bold and has correct styling (optional)
  expect(text).toHaveStyle('font-weight: 700');

  // 4. Cursor is pointer (test inline style on parent Flex box if possible)
  const parent = text.closest('div'); // Assumes Flex renders as div
  expect(parent).toHaveStyle('cursor: pointer');
};
