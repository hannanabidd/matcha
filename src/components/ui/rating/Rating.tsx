import { QuizContext } from "@/context/quiz/QuizContext";
import React, { FC, useContext, useState } from "react";
import Text from "../text/Text";
import { iRatingProps } from "./RatingType.d";

const Rating: FC<iRatingProps> = ({ handleData }) => {
  const ratings = ["1", "2", "3", "4", "5"];
  const [selected, setSelected] = useState<string>("");
  const { data, setData } = useContext(QuizContext);
  // console.log("data in d", data);

  return (
    <div className="flex">
      <div className="h-[72px] flex items-center">
        <Text
          name="Strongly Disagree"
          customClass="mr-[5px] text-[#5C46E5] text-[16px] font-400"
        />
      </div>
      {ratings?.map((value, index) => {
        return (
          <>
            <div
              className={`"min-h-[72px] min-w-[80px] w-[80px] h-[72px] border-[1px] border-[#5C46E5] bg-[#D0C9FF] flex justify-center items-center mr-[10px] cursor-pointer ${
                selected == `${value}` && `bg-[#5C46E5] border-[10px]`
              }"`}
              onClick={() => {
                setSelected(value);
                // setData?.([...data, { answer: value }]);
                handleData(value);
              }}>
              <Text
                name={`${value}`}
                customClass={`text-[30px] text-[#5C46E5]
                  ${selected == `${value}` && `text-[#D0C9FF]`}
                  `}
              />
            </div>
          </>
        );
      })}
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
