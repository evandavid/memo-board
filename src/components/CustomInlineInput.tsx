/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import InlineInput from 'react-inline-input';

const CustomInlineInput = (props: any) => {
  const { className } = props;
  return (
    <InlineInput {...{ ...props }} className="" inputClasses={className} />
  );
};

export default CustomInlineInput;
