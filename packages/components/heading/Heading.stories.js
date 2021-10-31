import React from 'react';
import { Heading } from './src';

export default {
  title: 'Heading',
  component: Heading,
};

const Template = (args) => <Heading {...args} />;

export const HeadingOne = Template.bind({});
HeadingOne.args = {
  variant: 'primary',
  label: 'Heading',
  level: 1,
};

export const HeadingBare = Template.bind({});
HeadingBare.args = {
  variant: 'primary',
  label: 'Heading',
  level: 1,
  bare: true
};

export const HeadingTwo = Template.bind({});
HeadingTwo.args = {
  variant: 'secondary',
  label: 'Heading',
  level: 2,
};

export const HeadingThree = Template.bind({});
HeadingThree.args = {
  variant: 'tertiary',
  label: 'Heading',
  level: 3,
};

export const HeadingFour = Template.bind({});
HeadingFour.args = {
  variant: 'info',
  label: 'Heading',
  level: 4,
};

export const HeadingFive = Template.bind({});
HeadingFive.args = {
  variant: 'error',
  label: 'Heading',
  level: 5,
};

export const HeadingSix = Template.bind({});
HeadingSix.args = {
  variant: 'warning',
  label: 'Heading',
  level: 6,
};
