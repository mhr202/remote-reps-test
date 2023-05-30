import React, { ChangeEvent, KeyboardEvent, ReactNode, useState } from "react";

interface InputProps {
  placeholder?: string;
  helperText?: string;
  label?: string;
  type?: string;
  id?: string;
  name?: string;
  required?: boolean;
  value?: string;
  handleChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}

export const Input = ({
  type,
  id,
  name,
  label,
  placeholder,
  helperText,
  required,
  value,
  handleChange,
  ...props
}: InputProps) => {
  return (
    <div>
      <label className="block mb-2 text-lg font-semibold text-gray-900 dark:text-white">
        {label}
      </label>
      <input
        type={type}
        name={name}
        id={id}
        className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder={placeholder}
        required={required}
        value={value}
        onChange={handleChange}
      />
      <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
        {helperText}
      </p>
    </div>
  );
};
