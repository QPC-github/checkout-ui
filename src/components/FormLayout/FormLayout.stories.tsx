import React from 'react';
import {withKnobs} from '@storybook/addon-knobs';

import {themeWithKnobs} from '../../storybook-utilities';
import {TextField} from '../TextField';
import {Select} from '../Select';

import {FormLayout, FormLayoutGroup} from './FormLayout';

const meta = {
  title: 'FormLayout',
  component: FormLayout,
  decorators: [withKnobs, themeWithKnobs('textFields', 'select')],
};

export default meta;

export const defaultState = () => {
  const selectCountryProps = {
    id: 'select',
    name: 'country',
    label: 'Country',
    options: [
      {
        value: 'CA',
        label: 'Canada',
      },
      {
        value: 'US',
        label: 'United States',
      },
      {
        value: 'UK',
        label: 'United Kingdom',
      },
    ],
  };

  const selectProvinceProps = {
    id: 'select',
    name: 'province',
    label: 'Province',
    options: [
      {
        value: 'QC',
        label: 'Quebec',
      },
      {
        value: 'ON',
        label: 'Ontario',
      },
      {
        value: 'PEI',
        label: 'Prince Edward Island',
      },
    ],
  };

  return (
    <FormLayout>
      <FormLayoutGroup>
        <Select {...selectCountryProps} />
        <Select {...selectProvinceProps} />
      </FormLayoutGroup>
      <TextField label="Address" name="address1" id="address1" />
      <TextField label="Apartment, suite, etc." name="address2" id="address2" />
    </FormLayout>
  );
};
