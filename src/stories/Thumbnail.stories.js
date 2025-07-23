// src/stories/Thumbnail.stories.js

import React from 'react';
import { within, userEvent, waitFor } from '@storybook/testing-library';
import { expect } from '@storybook/jest';
import Thumbnail from '../library/essential-components/Thumbnail';

export default {
  title: 'EssentialComponents/Thumbnail',
  component: Thumbnail,
};

const Template = (args) => <Thumbnail {...args} />;

export const Default = Template.bind({});
Default.args = {
  src: 'https://via.placeholder.com/300x200.png?text=Default+Thumbnail',
  alt: 'Default Thumbnail',
};

Default.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const img = await canvas.getByAltText('Default Thumbnail');
  await waitFor(() => expect(img).toBeInTheDocument());
  await waitFor(() => expect(img).toHaveAttribute('src', expect.stringContaining('Default+Thumbnail')));
};

export const CustomSize = Template.bind({});
CustomSize.args = {
  src: 'https://via.placeholder.com/150x100.png?text=Custom+Size',
  alt: 'Custom size thumbnail',
  width: '150px',
  height: '100px',
};

CustomSize.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const img = await canvas.getByAltText('Custom size thumbnail');
  expect(img).toHaveAttribute('width', '150');
  expect(img).toHaveAttribute('height', '100');
};

export const RoundedFull = Template.bind({});
RoundedFull.args = {
  src: 'https://via.placeholder.com/200.png?text=Rounded+Full',
  alt: 'Rounded full thumbnail',
  radius: 'full',
  width: '200px',
  height: '200px',
};

RoundedFull.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const img = await canvas.getByAltText('Rounded full thumbnail');
  expect(img).toHaveAttribute('src', expect.stringContaining('Rounded+Full'));
};

export const WithBoxShadow = Template.bind({});
WithBoxShadow.args = {
  src: 'https://via.placeholder.com/250x150.png?text=Shadow',
  alt: 'Thumbnail with shadow',
  width: '250px',
  height: '150px',
  shadow: 'md',
};

WithBoxShadow.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const img = await canvas.getByAltText('Thumbnail with shadow');
  expect(img).toBeInTheDocument();
};
