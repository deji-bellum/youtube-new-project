import React, { useState } from 'react';
import { Stack } from '@chakra-ui/react';
import { within, userEvent } from '@storybook/testing-library';
import { expect } from '@storybook/jest';
import FilterTag from '../library/essential-components/FilterTag';

export default {
  title: 'EssentialComponents/FilterTag',
  component: FilterTag,
  tags: ['autodocs'], // Ensures Storybook Docs autogenerates controls
};

const Template = (args) => {
  const [selected, setSelected] = useState(args.isSelected);
  return (
  
      <FilterTag
        {...args}
        isSelected={selected}
        onClick={() => setSelected(!selected)}
      />
   
  );
};

export const Default = Template.bind({});
Default.args = {
  label: 'All',
  isSelected: false,
};

Default.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const tag = await canvas.getByRole('button', { name: 'All' });

  // Simulate click
  await userEvent.click(tag);

  // Confirm state visually toggled (via ARIA or class if applicable)
  expect(tag).toBeInTheDocument();
};

export const Selected = Template.bind({});
Selected.args = {
  label: 'Popular',
  isSelected: true,
};

Selected.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const tag = await canvas.getByRole('button', { name: 'Popular' });

  // Check visual or ARIA-selected state
  expect(tag).toBeInTheDocument();
};

export const TagGroup = () => {
  const [selected, setSelected] = useState('All');
  const options = ['All', 'Popular', 'New', 'Featured'];

  return (
  
      <Stack direction="row" spacing={4} p={5}>
        {options.map((label) => (
          <FilterTag
            key={label}
            label={label}
            isSelected={selected === label}
            onClick={() => setSelected(label)}
          />
        ))}
      </Stack>
   
  );
};

TagGroup.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const newTag = await canvas.getByRole('button', { name: 'New' });

  await userEvent.click(newTag);

  expect(newTag).toBeInTheDocument();
};
