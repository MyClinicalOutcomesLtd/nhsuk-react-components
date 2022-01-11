import { Story } from '@storybook/react';
import React from 'react';
import { Hint, Table } from '../../src';

export const StandardTable: Story = (args) => (
  <Table {...args}>
    <Table.Head>
      <Table.Row>
        <Table.Cell>Skin Symptoms</Table.Cell>
        <Table.Cell>Possible cause</Table.Cell>
      </Table.Row>
    </Table.Head>
    <Table.Body>
      <Table.Row>
        <Table.Cell>Blisters on lips or around the mouth</Table.Cell>
        <Table.Cell>cold sores</Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>Itchy, dry, cracked, sore</Table.Cell>
        <Table.Cell>eczema</Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>Itchy blisters</Table.Cell>
        <Table.Cell>shingles, chickenpox</Table.Cell>
      </Table.Row>
    </Table.Body>
  </Table>
);
StandardTable.args = { caption: 'Skin symptoms and possible causes' };

export const TablePanel: Story = (args) => (
  <Table.Panel heading="Conditions similar to impetigo">
    <Table {...args}>
      <Table.Head>
        <Table.Row>
          <Table.Cell>Skin Symptoms</Table.Cell>
          <Table.Cell>Possible cause</Table.Cell>
        </Table.Row>
      </Table.Head>
      <Table.Body>
        <Table.Row>
          <Table.Cell>Blisters on lips or around the mouth</Table.Cell>
          <Table.Cell>cold sores</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>Itchy, dry, cracked, sore</Table.Cell>
          <Table.Cell>eczema</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>Itchy blisters</Table.Cell>
          <Table.Cell>shingles, chickenpox</Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table>
  </Table.Panel>
);
TablePanel.args = { caption: 'Other possible causes of your symptoms' };

export const ResponsiveTable: Story = (args) => (
  <Table {...args}>
    <Table.Head role="rowgroup">
      <Table.Row>
        <Table.Cell>Age</Table.Cell>
        <Table.Cell>How much?</Table.Cell>
        <Table.Cell>How often?</Table.Cell>
      </Table.Row>
    </Table.Head>
    <Table.Body>
      <Table.Row>
        <Table.Cell>3 to 5 months (weighing more than 5kg)</Table.Cell>
        <Table.Cell>2.5ml</Table.Cell>
        <Table.Cell>Max 3 times in 24 hours</Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>6 to 11 months</Table.Cell>
        <Table.Cell>2.5ml</Table.Cell>
        <Table.Cell>Max 3 to 4 times in 24 hours</Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>1 to 3 years</Table.Cell>
        <Table.Cell>5ml</Table.Cell>
        <Table.Cell>Max 3 times in 24 hours</Table.Cell>
      </Table.Row>
    </Table.Body>
  </Table>
);
ResponsiveTable.args = {
  responsive: true,
  caption: 'Ibuprofen syrup dosages for children',
};

export const NumericCells: Story = (args) => (
  <>
    <Hint>Right-aligned cells are used for numeric values</Hint>
    <Table {...args}>
      <Table.Head>
        <Table.Row>
          <Table.Cell>Location</Table.Cell>
          <Table.Cell isNumeric>Number of cases</Table.Cell>
        </Table.Row>
      </Table.Head>
      <Table.Body>
        <Table.Row>
          <Table.Cell>England</Table.Cell>
          <Table.Cell isNumeric>4,000</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>Wales</Table.Cell>
          <Table.Cell isNumeric>2,500</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>Scotland</Table.Cell>
          <Table.Cell isNumeric>600</Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table>
  </>
);
NumericCells.args = { caption: 'Number of cases' };

export default {
  title: 'Components/Table',
  component: Table,
  subcomponents: {
    'Table.Container': Table.Container,
    'Table.Head': Table.Head,
    'Table.Row': Table.Row,
    'Table.Cell': Table.Cell,
    'Table.Body': Table.Body,
    'Table.Panel': Table.Panel,
  },
};
