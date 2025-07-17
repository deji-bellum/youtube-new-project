import React from 'react';
import Logo from '../library/essential-components/Logo';

export default {
  title: 'Essential/Logo',
  component: Logo,
};

const Template = (args) => <Logo {...args} />;

export const Default = Template.bind({});
Default.args = {};
