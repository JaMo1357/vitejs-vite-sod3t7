import React from 'react';
import { Button } from './Button';
import { ButtonLink } from './ButtonLink';

interface CustomComponentProps {
  isButton?: boolean;
  stringProp?: string;
  numberProp?: number;
}

export function CustomComponent({
  isButton,
  stringProp,
  numberProp,
  ...others
}: CustomComponentProps) {
  console.log('PROPS', stringProp, numberProp, others);

  let component;

  if (isButton) {
    component = <Button>I am button</Button>;
  } else {
    component = <ButtonLink>I am link</ButtonLink>;
  }

  return component;
}
