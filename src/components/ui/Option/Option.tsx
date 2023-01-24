import React, { FC, useState } from "react";
import { iOptionProps } from "./OptionType.d";

const Option: FC<iOptionProps> = ({ name, letter }) => {
  const [selected, setSelected] = useState<boolean>(false);
  return (
    <div
      className={`md:w-[45%] min-h-[43px] h-auto bg-[#E0DFDF] active:border-[#545ade] border-[1px] flex items-center px-[12px] py-[5px] rounded-[7px] cursor-pointer mb-[5px] ${
        selected && `border-[#545ade]`
      } `}
      onClick={() => {
        setSelected(!selected);
      }}>
      <div className="bg-[#fff] min-h-[32px] min-w-[32px] mr-[10px] rounded-[5px] border-black border-[1px] flex items-center justify-center text-justify	">
        {letter}
      </div>
      <p>{name}</p>
    </div>
  );
};
export default Option;
