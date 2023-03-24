import React from 'react';

interface InputProps {
  onChange: (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  value: string;
  label: string;
  id: string;
}

export const Input: React.FC<InputProps> = ({ onChange, value, label, id }) => {
  return (
    <div className="mb-4">
      <Label label={label} id={id} />
      <input
        id={id}
        className="border border-gray-300 block rounded-lg p-2 w-full outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 text-sm"
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export const Textarea: React.FC<InputProps> = ({
  onChange,
  value,
  label,
  id,
}) => {
  return (
    <div className="mb-4">
      <Label label={label} id={id} />
      <textarea
        id={id}
        value={value}
        onChange={onChange}
        className="border border-gray-300 block rounded-lg p-2 w-full outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 h-500 max-h-300 text-sm"
      />
    </div>
  );
};

interface LabelProp {
  label: string;
  id: string;
}
const Label: React.FC<LabelProp> = ({ label, id }) => {
  return (
    <label htmlFor={id} className="block text-gray-900 text-sm">
      {label}
    </label>
  );
};
