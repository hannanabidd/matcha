import React, { FC, useContext, useState } from "react";
import alphabets from "../../../data/alphabets.json";
import DropdownMenu from "../dropdown/DropdownMenu";
import Text from "../text/Text";
import { iOptionalProps } from "./OptionalType.d";

const Option: FC<iOptionalProps> = ({ option, handleData, question }) => {
  const [selected, setSelected] = useState<any>("");

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
      {selected == "Yes" && (
        <>
          <Text
            name={question.Children?.question}
            type="paragraph"
            customClass="md:text-[40px] text-[24px] md:leading-[50px] leading-[35px] font-400 leading-[50px]"
          />
          <Text name={question?.Children?.select} customClass="" />
          <div className="w-[50%]">
            <DropdownMenu
              option={question?.Children?.options}
              name={"Insurance provide"}
              handleData={handleData}
            />
          </div>
        </>
      )}
    </>
  );
};
export default Option;
