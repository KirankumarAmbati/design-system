import React from 'react';
import { Accordion } from './src';

export default {
  title: 'Accordion',
  component: Accordion,
};

const Template = (args) => <Accordion {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  label: 'Submit',
  variant: 'primary',
  items: [{
    header: 'Accordion-1',
    body: 'Body 1'
}, {
    header: 'Accordion-2',
    body: 'Body 2'
}, {
    header: 'Accordion-3',
    body: 'Body 3'
}]
};
