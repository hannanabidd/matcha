import React, { FC } from "react";
import { iTextProps } from "./TextType.d";

const Text: FC<iTextProps> = ({ name, type, customClass, span }) => {
  return (
    <>
      <h1 className={`text ${type} ${customClass}`}>
        {name}
        <span className="text-[#756EA5]">{span}</span>
      </h1>
    </>
  );
};
export default Text;
