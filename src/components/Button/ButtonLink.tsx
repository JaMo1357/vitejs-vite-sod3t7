import React from 'react';

interface ButtonLinkProps extends React.HTMLProps<HTMLAnchorElement> {}

export function ButtonLink({ ...others }: ButtonLinkProps) {
  console.log('others', others);

  return (
    <a
      {...others}
      className="clickable"
      href="https://google.com"
      target="blank"
    />
  );
}
