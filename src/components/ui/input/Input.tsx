import React, { FC, useState } from "react";
import { iInputProps } from "./InputType.d";

const Input: FC<iInputProps> = ({ name, customClass, handleData }) => {
  const [value, setValue] = useState<string>("");

  const onChange = (e: { target: { value: React.SetStateAction<string> } }) => {
    setValue(e.target.value);
    handleData(value);
  };

  return (
    <>
      <input
        type="text"
        placeholder={name}
        className={`h-[65px] rounded-[5px] w-[400px] ${customClass}`}
        onChange={onChange}
      />
    </>
  );
};
export default Input;
