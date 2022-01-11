/* eslint-disable jsx-a11y/anchor-is-valid */
import { Story } from '@storybook/react';
import React from 'react';
import { BodyText, SummaryList } from '../../src';

export const Standard: Story = (args) => (
  <SummaryList {...args}>
    <SummaryList.Row>
      <SummaryList.Key>Name</SummaryList.Key>
      <SummaryList.Value>Sarah Philips</SummaryList.Value>
      <SummaryList.Actions>
        <a href="#">Change</a>
      </SummaryList.Actions>
    </SummaryList.Row>
    <SummaryList.Row>
      <SummaryList.Key>Date of birth</SummaryList.Key>
      <SummaryList.Value>5 January 1978</SummaryList.Value>
      <SummaryList.Actions>
        <a href="#">Change</a>
      </SummaryList.Actions>
    </SummaryList.Row>
    <SummaryList.Row>
      <SummaryList.Key>Contact information</SummaryList.Key>
      <SummaryList.Value>
        72 Guild Street
        <br />
        London
        <br />
        SE23 6FH
      </SummaryList.Value>
      <SummaryList.Actions>
        <a href="#">Change</a>
      </SummaryList.Actions>
    </SummaryList.Row>
    <SummaryList.Row>
      <SummaryList.Key>Contact details</SummaryList.Key>
      <SummaryList.Value>
        <BodyText>07700 900457</BodyText>
        <BodyText>sarah.phillips@example.com</BodyText>
      </SummaryList.Value>
      <SummaryList.Actions>
        <a href="#">Change</a>
      </SummaryList.Actions>
    </SummaryList.Row>
  </SummaryList>
);

export const SummaryListWithoutActions: Story = (args) => (
  <SummaryList {...args}>
    <SummaryList.Row>
      <SummaryList.Key>Name</SummaryList.Key>
      <SummaryList.Value>Sarah Philips</SummaryList.Value>
    </SummaryList.Row>
    <SummaryList.Row>
      <SummaryList.Key>Date of birth</SummaryList.Key>
      <SummaryList.Value>5 January 1978</SummaryList.Value>
    </SummaryList.Row>
    <SummaryList.Row>
      <SummaryList.Key>Contact information</SummaryList.Key>
      <SummaryList.Value>
        72 Guild Street
        <br />
        London
        <br />
        SE23 6FH
      </SummaryList.Value>
    </SummaryList.Row>
    <SummaryList.Row>
      <SummaryList.Key>Contact details</SummaryList.Key>
      <SummaryList.Value>
        <BodyText>07700 900457</BodyText>
        <BodyText>sarah.phillips@example.com</BodyText>
      </SummaryList.Value>
    </SummaryList.Row>
  </SummaryList>
);

export const SummaryListWithoutBorder: Story = (args) => (
  <SummaryList {...args}>
    <SummaryList.Row>
      <SummaryList.Key>Name</SummaryList.Key>
      <SummaryList.Value>Sarah Philips</SummaryList.Value>
    </SummaryList.Row>
    <SummaryList.Row>
      <SummaryList.Key>Date of birth</SummaryList.Key>
      <SummaryList.Value>5 January 1978</SummaryList.Value>
    </SummaryList.Row>
    <SummaryList.Row>
      <SummaryList.Key>Contact information</SummaryList.Key>
      <SummaryList.Value>
        72 Guild Street
        <br />
        London
        <br />
        SE23 6FH
      </SummaryList.Value>
    </SummaryList.Row>
    <SummaryList.Row>
      <SummaryList.Key>Contact details</SummaryList.Key>
      <SummaryList.Value>
        <BodyText>07700 900457</BodyText>
        <BodyText>sarah.phillips@example.com</BodyText>
      </SummaryList.Value>
    </SummaryList.Row>
  </SummaryList>
);
SummaryListWithoutBorder.args = { noBorder: true };

export default {
  title: 'Components/SummaryList',
  component: SummaryList,
  subcomponents: {
    'SummaryList.Row': SummaryList.Row,
    'SummaryList.Key': SummaryList.Key,
    'SummaryList.Value': SummaryList.Value,
    'SummaryList.Actions': SummaryList.Actions,
  },
};
