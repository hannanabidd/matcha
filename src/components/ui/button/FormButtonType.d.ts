import React from "react";
export interface IButtonProps {
    step?: number;
    setStep?: React.Dispatch<React.SetStateAction<number>>;
    handleNext?: any
    question?: string
    handlePrevious?:any
  }
  