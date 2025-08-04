"use client";

import React from "react";

type InputProps = {
  type?: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  required?: boolean;
  className?: string;
};

function Input({
  type,
  name,
  value,
  onChange,
  placeholder,
  className,
  required = false,
}: InputProps) {
  const baseClasses =
    "!px-4 !py-2 focus:ring-1 rounded border w-full focus:outline-none focus:ring-red-500 ";
  return (
    <input
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      required={required}
      className={`${baseClasses} ${className}`}
    />
  );
}

export default Input;
