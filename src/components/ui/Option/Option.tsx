import React, { FC } from "react";
import { iOptionProps } from "./OptionType.d";

const Option: FC<iOptionProps> = ({ name, letter }) => {
  return (
    <div className="md:w-[49%] min-h-[43px] h-auto bg-[#E0DFDF] flex items-center px-[20px] rounded-[7px] cursor-pointer mb-[5px]">
      <div className="bg-[#fff] h-[31px] w-[31px] mr-[10px] rounded-[7px] flex items-center justify-center">
        {letter}
      </div>
      <p>{name}</p>
    </div>
  );
};
export default Option;
