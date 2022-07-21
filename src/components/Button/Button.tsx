import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  stringProp?: string;
  numberProp?: number;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (props, ref) => (
    <button
      type="button"
      {...props}
      ref={ref}
      className="clickable"
      onClick={() => {
        alert('Button clicked');
      }}
    >
      {props.stringProp}
    </button>
  )
);
