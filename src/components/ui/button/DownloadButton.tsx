import Image from "next/image";
import React, { FC } from "react";
import { IButtonProps } from "./ButtonType.d";

const DownloadButton: FC<IButtonProps> = ({ name, span, image }) => {
  return (
    <>
      <button className="flex btn-shadow rounded-[10px] bg-[#F0F5F7] h-[63px] w-[204px] justify-center items-center mr-[10px]">
        <Image src={image} alt="aple" width={26} height={32} />
        <p className="text-[10px] pl-[15px] flex item-start flex-col">
          {name} <br /> <span className="text-[16px] font-bold">{span}</span>
        </p>
      </button>
    </>
  );
};
export default DownloadButton;
