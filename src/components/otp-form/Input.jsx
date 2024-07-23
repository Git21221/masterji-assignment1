import React, { forwardRef } from "react";

const Input = forwardRef((props, ref) => {
  const { value, onChange, onKeyDown, maxLength, index, className } = props;
  return (
    <>
      <input
        type="text"
        className={`rounded-xl text-center focus:outline-none text-[48px] bg-[#DBE2EF] w-[90px] h-[100px] ${className}`}
        value={value}
        onChange={onChange}
        onKeyDown={onKeyDown}
        maxLength={maxLength}
        ref={ref}
        data-index={index}
      />
    </>
  );
});

export default Input;
