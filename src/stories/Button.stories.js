import React from 'react';
import Button from '../library/essential-components/Button'; // adjust path if needed

export default {
  title: 'EssentialComponents/Button',
  component: Button,
  argTypes: {
    colorPalette: { control: 'select', options: ['blue', 'red', 'green', 'gray', 'purple'] },
    variant:    { control: 'select', options: ['solid', 'outline', 'ghost', 'link'] },
    size:       { control: 'select', options: ['xs', 'sm', 'md', 'lg'] },
    children:   { control: 'text' },
  },
};

const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  colorPalette: 'blue',
  variant: 'solid',
  size: 'md',
  children: 'Click Me',
  onClick: () => {},              // will log automatically in Actions panel
};
