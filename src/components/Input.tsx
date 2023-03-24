import React from 'react';

interface InputProps {
  onChange: (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  value: string;
  label: string;
}

export const Input: React.FC<InputProps> = ({ onChange, value, label }) => {
  return (
    <div className="mb-4">
      <Label label={label} />
      <input
        id={label}
        className="border border-gray-300 block rounded-lg p-2 w-full outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export const Textarea: React.FC<InputProps> = ({ onChange, value, label }) => {
  return (
    <div className="mb-4">
      <Label label={label} />
      <textarea
        id={label}
        value={value}
        onChange={onChange}
        className="border border-gray-300 block rounded-lg p-2 w-full outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 h-500 max-h-300"
      />
    </div>
  );
};

interface LabelProp {
  label: string;
}
const Label: React.FC<LabelProp> = ({ label }) => {
  return (
    <label htmlFor={label} className="block text-gray-900">
      {label}
    </label>
  );
};
