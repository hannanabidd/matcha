import { QuizContext } from "@/context/quiz/QuizContext";
import React, { FC, useContext, useState } from "react";
import { iInputProps } from "./InputType.d";

const Input: FC<iInputProps> = ({ name, customClass, call }) => {
  const [value, setValue] = useState<string>("");
  const { data, setData } = useContext(QuizContext);

  const onChange = (e: { target: { value: React.SetStateAction<string> } }) => {
    setValue(e.target.value);
    setData?.([...data, { answer: value }]);
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
