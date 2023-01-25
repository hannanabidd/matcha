import React, { FC, useState } from "react";
import { iOptionProps } from "./OptionType.d";

const Option: FC<iOptionProps> = ({ name, letter, select }) => {
  const [selected, setSelected] = useState<any>("");
  console.log("selected", selected);
  console.log("select", select);
  return (
    <div
      className={`md:w-[45%] min-h-[43px] h-auto bg-[#E0DFDF] active:border-[#545ade] border-[1px] flex items-center px-[12px] py-[5px] rounded-[7px] cursor-pointer mb-[10px] ${
        selected == select.id && `border-[#545ade]`
      } `}
      onClick={() => {
        selected == select.id ? setSelected(null) : setSelected(select.id);
      }}>
      <div className="bg-[#fff] min-h-[32px] min-w-[32px] mr-[10px] rounded-[5px] border-black border-[1px] flex items-center justify-center text-justify	">
        <>{letter}</>
      </div>
      <p>{name}</p>
    </div>
  );
};
export default Option;
