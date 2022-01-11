import React from 'react';
import { Hint } from '../../src';

export const Standard = (): JSX.Element => (
  <Hint>
    It’s on your National Insurance card, benefit letter, payslip or P60. For example, ‘QQ 12 34 56
    C’.
  </Hint>
);

export default {
  title: 'Typography/Hint',
  component: Hint,
};
