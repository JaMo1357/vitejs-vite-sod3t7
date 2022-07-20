import React from 'react';

interface ButtonProps extends React.ComponentPropsWithoutRef<'button'> {}

export function Button({ ...others }: ButtonProps) {
  console.log('others', others);

  return (
    <button
      {...others}
      className="clickable"
      onClick={() => {
        console.log('clicked');
      }}
    />
  );
}
