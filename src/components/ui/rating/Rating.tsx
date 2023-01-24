import exp from "constants";
import React, { useState } from "react";
import Text from "../text/Text";

const Rating = () => {
  const [selected, setSelected] = useState<string>("");

  return (
    <div className="flex">
      <div className="h-[72px] flex items-center">
        <Text
          name="Strongly Disagree"
          customClass="mr-[5px] text-[#5C46E5] text-[16px] font-400"
        />
      </div>
      <div
        className={`"min-h-[72px] min-w-[80px] w-[80px] h-[72px] border-[1px] border-[#5C46E5] bg-[#D0C9FF] flex justify-center items-center mr-[10px] cursor-pointer ${
          selected == "1" && `bg-[#5C46E5] border-[10px]`
        }"`}
        onClick={() => {
          setSelected("1");
        }}>
        <Text
          name="1"
          customClass={`text-[30px] text-[#5C46E5]
        ${selected == "1" && `text-[#D0C9FF]`}
        `}
        />
      </div>
      <div
        className={`"min-h-[72px] min-w-[80px] w-[80px] h-[72px] border-[1px] border-[#5C46E5] bg-[#D0C9FF] flex justify-center items-center mr-[10px] cursor-pointer ${
          selected == "2" && `bg-[#5C46E5] border-[10px]`
        }"`}
        onClick={() => {
          setSelected("2");
        }}>
        <Text
          name="2"
          customClass={`text-[30px] text-[#5C46E5]
        ${selected == "2" && `text-[#D0C9FF]`}
        `}
        />
      </div>
      <div
        className={`"min-h-[72px] min-w-[80px] w-[80px] h-[72px] border-[1px] border-[#5C46E5] bg-[#D0C9FF] flex justify-center items-center mr-[10px] cursor-pointer ${
          selected == "3" && `bg-[#5C46E5] border-[10px]`
        }"`}
        onClick={() => {
          setSelected("3");
        }}>
        <Text
          name="3"
          customClass={`text-[30px] text-[#5C46E5]
        ${selected == "3" && `text-[#D0C9FF]`}
        `}
        />
      </div>
      <div
        className={`"min-h-[72px] min-w-[80px] w-[80px] h-[72px] border-[1px] border-[#5C46E5] bg-[#D0C9FF] flex justify-center items-center mr-[10px] cursor-pointer ${
          selected == "4" && `bg-[#5C46E5] border-[10px]`
        }"`}
        onClick={() => {
          setSelected("4");
        }}>
        <Text
          name="4"
          customClass={`text-[30px] text-[#5C46E5]
        ${selected == "4" && `text-[#D0C9FF]`}
        `}
        />
      </div>
      <div
        className={`"min-h-[72px] min-w-[80px] w-[80px] h-[72px] border-[1px] border-[#5C46E5] bg-[#D0C9FF] flex justify-center items-center mr-[10px] cursor-pointer ${
          selected == "5" && `bg-[#5C46E5] border-[10px]`
        }"`}
        onClick={() => {
          setSelected("5");
        }}>
        <Text
          name="5"
          customClass={`text-[30px] text-[#5C46E5]
        ${selected == "5" && `text-[#D0C9FF]`}
        `}
        />
      </div>
      <div className="h-[72px] flex items-center">
        <Text
          name="Strongly Agree"
          customClass="ml-[5px] text-[#5C46E5] text-[16px] font-400"
        />
      </div>
    </div>
  );
};
export default Rating;
