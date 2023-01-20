import React, { FC } from "react";
import { IButtonProps } from "./ButtonType.d";

const Button: FC<IButtonProps> = ({ name, type, customClass }) => {
  return (
    <>
      <button className={`commonBtn btn-shadow  ${type} ${customClass}`}>
        {name}
      </button>
    </>
  );
};
export default Button;
