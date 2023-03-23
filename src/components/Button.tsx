import React from 'react';

interface ButtonProps {
  value: string;
  click: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export const Button: React.FC<ButtonProps> = ({ value, click }) => {
  return (
    <button
      onClick={click}
      className="bg-blue-700 rounded px-4 py-2 text-gray-100 hover:bg-blue-500"
    >
      {value}
    </button>
  );
};
