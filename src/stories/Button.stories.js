import { within, userEvent } from '@storybook/testing-library';
import { expect } from '@storybook/jest';
import { Button } from '@chakra-ui/react';

const meta = {
  title: 'EssentialComponents/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    colorPalette: {
      control: 'select',
      options: ['blue', 'red', 'green', 'gray', 'purple'],
    },
    variant: {
      control: 'select',
      options: ['solid', 'outline', 'ghost', 'link'],
    },
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg'],
    },
    children: {
      control: 'text',
    },
    onClick: {
      action: 'clicked',
    },
  },
  args: {
    children: 'Click Me',
    size: 'md',
    variant: 'solid',
    colorPalette: 'blue',

  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: { onClick: fn() },
};


export default meta;

export const Primary = {
  args: {
    colorPalette: 'blue',
    children: 'Click Me',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const button = await canvas.getByRole('button', { name: /click me/i });

    await userEvent.click(button);

    expect(button).toBeInTheDocument();

  },
};
