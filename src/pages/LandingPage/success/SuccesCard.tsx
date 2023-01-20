import Text from "@/components/ui/text/Text";
import React from "react";

const SuccessCard = () => {
  return (
    <>
      <div className="bg-[url('/images/jack.svg')] h-[387px] w-[305px] p-[10px] flex items-end ">
        <div className="box w-full ">
          <Text
            name="I was tired of searching WebMD and other sites. I wanted to find honest sources and thoughts as to what I was going through. "
            customClass="text-[#fff] leading-[16px] text-[16px] font-khula"
          />
          <Text
            name="Jack K."
            customClass="text-[#ffffff] leading-[22px] text-[20px] text-center mt-[5px]"
          />
          <Text
            name="Brooklyn, NY"
            customClass="text-[#fff] leading-[16px] text-[10px] text-center"
          />
        </div>
      </div>
    </>
  );
};
export default SuccessCard;
