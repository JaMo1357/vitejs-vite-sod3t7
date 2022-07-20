import React from 'react';

interface ButtonProps extends React.ComponentPropsWithoutRef<'button'> {}

export function Button({ ...others }: ButtonProps) {
  console.log('others', others);
  const buttonStyles = {
    backgroundColor: '#4b8cd2',
    color: 'white',
    padding: '5px 10px',
    borderColor: '#346293',
    borderRadius: '5px',
    cursor: 'pointer',
  };

  return <button {...others} style={buttonStyles} />;
}
