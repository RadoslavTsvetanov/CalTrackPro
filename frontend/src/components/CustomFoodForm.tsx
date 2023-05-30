import React, { useState } from 'react';

interface Option {
  value: string;
  label: string;
}

interface OptionsInputProps {
  options: Option[];
  selectedValue: string;
  onChange: (selectedValue: string) => void;
}

const OptionsInput: React.FC<OptionsInputProps> = ({
  options,
  selectedValue,
  onChange,
}) => {
  const handleOptionChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value;
    onChange(value);
  };

  return (
    <select value={selectedValue} onChange={handleOptionChange}>
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};

export default OptionsInput;
