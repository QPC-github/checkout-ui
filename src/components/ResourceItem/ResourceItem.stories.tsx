import React from 'react';

import {Text} from '../Text';
import {Thumbnail} from '../Thumbnail';
import {TextBlock} from '../TextBlock';
import {Icon} from '../Icon';
import {InlineStack} from '../InlineStack';
import {InlineSuccess} from '../InlineSuccess';

import {ResourceItem, ResourceItemContent} from './ResourceItem';

const meta = {
  component: ResourceItem,
  title: 'ResourceItem',
  decorators: [
    (story: () => JSX.Element) => <div style={{margin: '1em'}}>{story()}</div>,
  ],
};

const placeholder =
  '//cdn.shopify.com/s/assets/checkout/product-blank-98d4187c2152136e9fb0587a99dfcce6f6873f3a9f21ea9135ed7f495296090f.png';

export default meta;

export const defaultState = () => {
  return (
    <ResourceItem>
      <ResourceItemContent primary>
        <Text emphasized>T-shirt</Text>
      </ResourceItemContent>
      <ResourceItemContent>
        <Text>$10.00</Text>
      </ResourceItemContent>
    </ResourceItem>
  );
};

export const withoutPrimaryContent = () => {
  return (
    <ResourceItem>
      <ResourceItemContent>
        <Text emphasized>T-shirt</Text>
      </ResourceItemContent>
      <ResourceItemContent>
        <Text>$10.00</Text>
      </ResourceItemContent>
    </ResourceItem>
  );
};

export const multipleContent = () => {
  return (
    <ResourceItem>
      <ResourceItemContent>
        <Thumbnail
          source={placeholder}
          description="some media source"
          badge={1}
        />
      </ResourceItemContent>
      <ResourceItemContent primary>
        <TextBlock emphasized>T-shirt</TextBlock>
        <TextBlock size="small" subdued>
          Blue
        </TextBlock>
        <InlineStack alignment="center" spacing="xtight">
          <InlineSuccess>
            <Icon source="checkmark" size="default" />
          </InlineSuccess>
          <InlineSuccess>
            <TextBlock>Available</TextBlock>
          </InlineSuccess>
        </InlineStack>
      </ResourceItemContent>
      <ResourceItemContent>
        <Text emphasized>$10.00</Text>
      </ResourceItemContent>
    </ResourceItem>
  );
};
