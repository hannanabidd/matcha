import React, { FC } from "react";
import { iTextProps } from "./TextType.d";

const Text: FC<iTextProps> = ({ name, type, customClass, span }) => {
  const AsElement = type ?? "span";
  return (
    <>
      <AsElement className={`text ${type} ${customClass}`}></AsElement>
    </>
  );
};
export default Text;
