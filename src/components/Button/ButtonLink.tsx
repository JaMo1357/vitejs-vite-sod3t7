import React from 'react';

interface ButtonLinkProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  stringProp?: string;
  numberProp?: number;
}

export const ButtonLink = React.forwardRef<HTMLAnchorElement, ButtonLinkProps>(
  (props, ref) => (
    <a
      {...props}
      ref={ref}
      className="clickable"
      href="https://google.com"
      target="blank"
    >
      {props.stringProp}
    </a>
  )
);
