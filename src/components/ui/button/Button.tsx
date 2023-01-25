import React, { FC, useState } from "react";
import { IButtonProps } from "./ButtonType.d";

const Button: FC<IButtonProps> = ({ name, type, customClass, call }) => {
  return (
    <>
      <button
        className={`commonBtn btn-shadow  ${type} ${customClass}`}
        onClick={call}>
        {name}
      </button>
    </>
  );
};
export default Button;
