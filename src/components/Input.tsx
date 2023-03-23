import React from 'react';

interface InputProps {
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
  label: string;
}

export const Input: React.FC<InputProps> = ({ onChange, value, label }) => {
  return (
    <div>
      <label htmlFor={label} className="block text-gray-900">
        {label}
      </label>
      <input
        id={label}
        className="border border-gray-300 block rounded-lg p-2 w-full outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
        value={value}
        onChange={onChange}
      />
    </div>
  );
};
