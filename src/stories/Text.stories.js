// src/stories/Text.stories.js
import React from 'react';
import Text from '../library/essential-components/Text';

export default {
  title: 'EssentialComponents/Text',
  component: Text,
  argTypes: {
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg', 'xl', '2xl'],
    },
    weight: {
      control: 'select',
      options: ['normal', 'medium', 'semibold', 'bold'],
    },
    color: { control: 'color' },
    children: { control: 'text' },
  },
};

const Template = (args) => <Text {...args} />;

/* ──────────────────────────────────
 * Single‑prop playground
 * ────────────────────────────────── */
export const Playground = Template.bind({});
Playground.args = {
  children: 'Hello, Chakra Text!',
  size: 'md',
  weight: 'normal',
  color: 'black',
};

/* ──────────────────────────────────
 * Showcase of all sizes
 * ────────────────────────────────── */
export const Sizes = () => (
  <>
    <Text size="sm">Small (sm)</Text>
    <Text size="md">Default (md)</Text>
    <Text size="lg">Large (lg)</Text>
    <Text size="xl">Extra‑Large (xl)</Text>
    <Text size="2xl">2× XL (2xl)</Text>
  </>
);

/* ──────────────────────────────────
 * Showcase of all weights
 * ────────────────────────────────── */
export const Weights = () => (
  <>
    <Text weight="normal">Normal weight</Text>
    <Text weight="medium">Medium weight</Text>
    <Text weight="semibold">Semibold weight</Text>
    <Text weight="bold">Bold weight</Text>
  </>
);
