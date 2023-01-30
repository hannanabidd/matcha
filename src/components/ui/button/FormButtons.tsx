import React, { FC, useState } from "react";
import { IButtonProps } from "./FormButtonType";

const FormButtons: FC<IButtonProps> = ({
  step,
  setStep,
  handleNext,
  question,
  handlePrevious,
}) => {
  const next = () => {
    // setStep?.((step as number) + 1);
    handleNext(question);
  };
  const previous = () => {
    handlePrevious();
  };

  return (
    <>
      <div
        className="h-[28px] w-[34px] rounded-tl-[5px] rounded-bl-[5px] bg-[var(--primaryColor)] flex justify-center items-center cursor-pointer mr-[5px]"
        onClick={next}>
        <p className="text-[#fff] text-[30px] pt-[10px]">^</p>
      </div>
      <div
        className="h-[28px] w-[34px] rounded-tr-[5px] rounded-br-[5px] bg-[var(--primaryColor)]  flex justify-center items-center cursor-pointer"
        onClick={previous}>
        <p className="text-[#fff] text-[30px] pt-[10px] rotate-180">^</p>
      </div>
    </>
  );
};
export default FormButtons;
