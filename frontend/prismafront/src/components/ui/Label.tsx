import React from 'react';
import type { FC, LabelHTMLAttributes } from 'react';

const Label: FC<LabelHTMLAttributes<HTMLLabelElement>> = ({ className, ...props }) => {
  return (
    <label
      className={`block text-sm font-bold text-gray-700 mb-2 ${className}`}
      {...props}
    />
  );
};

export default Label;