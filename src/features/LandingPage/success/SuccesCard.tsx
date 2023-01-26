import Text from "@/components/ui/text/Text";
import Image from "next/image";
import React, { FC } from "react";

interface Card {
  item: any;
}

const SuccessCard: FC<Card> = ({ item }) => {
  return (
    <>
      <div className={` p-[10px] flex items-end justify-center`}>
        <img
          src={item.image}
          alt="image"
          className=" h-[387px] w-[305px] "
          style={{ height: "387px", width: "305px" }}
        />
        <div className="box w-full absolute z-20 w-[290px] mb-[10px] ">
          <Text
            name={item.para}
            customClass="text-[#fff] leading-[16px] text-[16px] font-khula"
          />
          <Text
            name={item.heading}
            customClass="text-[#ffffff] leading-[22px] text-[20px] text-center mt-[5px]"
          />
          <Text
            name={item.country}
            customClass="text-[#fff] leading-[16px] text-[10px] text-center"
          />
        </div>
      </div>
    </>
  );
};
export default SuccessCard;
