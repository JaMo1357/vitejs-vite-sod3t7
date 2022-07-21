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
  const buttonReference = React.createRef<HTMLButtonElement>();
  const linkReference = React.createRef<HTMLAnchorElement>();
  let component;

  if (isButton) {
    component = <Button ref={buttonReference} stringProp={stringProp} />;
  } else {
    component = <ButtonLink ref={linkReference} stringProp={stringProp} />;
  }

  return component;
}
