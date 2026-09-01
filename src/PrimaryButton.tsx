import React from 'react';

export type PrimaryButtonProps = React.ComponentProps<'button'> & {
  variant?: 'primary' | 'secondary';
};

export function PrimaryButton({ children, ...rest }: PrimaryButtonProps) {
  return <button {...rest}>{children}</button>;
}