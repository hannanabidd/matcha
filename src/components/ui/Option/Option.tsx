import React, { FC, useContext, useState } from "react";
import { iOptionProps } from "./OptionType.d";
import alphabets from "../../../data/alphabets.json";
import { QuizContext } from "@/context/quiz/QuizContext";

const Option: FC<iOptionProps> = ({ option, handleData }) => {
  const [selected, setSelected] = useState<any>("");
  const { data, setData } = useContext(QuizContext);

  return (
    <>
      {option?.map((d: any, index: any) => {
        return (
          <div
            className={`md:w-[45%] min-h-[43px] h-auto bg-[#E0DFDF] active:border-[#545ade] border-[1px] flex items-center px-[12px] py-[5px] rounded-[7px] cursor-pointer mb-[10px] ${
              selected == d.name && `border-[#545ade]`
            } `}
            key={d?.id}
            onClick={() => {
              selected == d.name ? setSelected(null) : setSelected(d.name);
              handleData(d?.name);
            }}>
            <div className="bg-[#fff] min-h-[32px] min-w-[32px] mr-[10px] rounded-[5px] border-black border-[1px] flex items-center justify-center text-justify	">
              <>{alphabets[index]}</>
            </div>
            <p>{d.name}</p>
          </div>
        );
      })}
    </>
  );
};
export default Option;
