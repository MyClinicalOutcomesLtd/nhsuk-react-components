import React, { FC, HTMLProps } from 'react';
import classNames from 'classnames';

export interface ErrorMessageProps extends HTMLProps<HTMLSpanElement> {
  visuallyHiddenText?: false | string;
}

const ErrorMessage: FC<ErrorMessageProps> = ({
  className,
  visuallyHiddenText = 'Error: ',
  children,
  ...rest
}) => (
  <span className={classNames('nhsuk-error-message', className)} {...rest}>
    {visuallyHiddenText !== false ? (
      <span className="nhsuk-u-visually-hidden">{visuallyHiddenText}</span>
    ) : null}
    {children}
  </span>
);

export default ErrorMessage;
