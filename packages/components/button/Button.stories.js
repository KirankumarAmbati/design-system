import React from 'react';
import { Button, ButtonBare } from './src';

export default {
  title: 'Button',
  component: Button,
};

const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  label: 'Submit',
  onClick: () => alert(10),
  size: 'md'
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'Submit',
  onClick: () => alert(10),
  variant: 'secondary'
};

export const Tertiary = Template.bind({});
Tertiary.args = {
  label: 'Submit',
  onClick: () => alert(10),
  variant: 'tertiary'
};

export const Success = Template.bind({});
Success.args = {
  label: 'Submit',
  onClick: () => alert(10),
  variant: 'success'
};

export const Info = Template.bind({});
Info.args = {
  label: 'Submit',
  onClick: () => alert(10),
  variant: 'info'
};

export const Warning = Template.bind({});
Warning.args = {
  label: 'Submit',
  onClick: () => alert(10),
  variant: 'warning'
};

export const Error = Template.bind({});
Error.args = {
  label: 'Submit',
  onClick: () => alert(10),
  variant: 'error'
};

const BareButton = (args) => <ButtonBare {...args} />;

export const bare = BareButton.bind({});
bare.args = {
  label: 'Submit',
  onClick: () => alert(10),
  variant: 'primary'
};