import React from 'react';
import { Alert } from './src';

export default {
  title: 'Alert',
  component: Alert,
};

const Template = (args) => <Alert {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  label: 'Submit',
  variant: 'primary'
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'Submit',
  variant: 'secondary'
};

export const Tertiary = Template.bind({});
Tertiary.args = {
  label: 'Submit',
  variant: 'tertiary'
};

export const Success = Template.bind({});
Success.args = {
  label: 'Submit',
  variant: 'success'
};

export const SuccessLight = Template.bind({});
SuccessLight.args = {
  label: 'Submit',
  variant: 'success-light'
};

export const Info = Template.bind({});
Info.args = {
  label: 'Submit',
  variant: 'info'
};

export const InfoLight = Template.bind({});
InfoLight.args = {
  label: 'Submit',
  variant: 'info-light'
};

export const Warning = Template.bind({});
Warning.args = {
  label: 'Submit',
  variant: 'warning'
};

export const WarningLight = Template.bind({});
WarningLight.args = {
  label: 'Submit',
  variant: 'warning-light'
};

export const Error = Template.bind({});
Error.args = {
  label: 'Submit',
  variant: 'error'
};

export const ErrorLight = Template.bind({});
ErrorLight.args = {
  label: 'Submit',
  variant: 'error-light'
};