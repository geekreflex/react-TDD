import React from 'react';

interface ButtonProps {
  value: string;
}

export const Button: React.FC<ButtonProps> = ({ value }) => {
  return <button>{value}</button>;
};
