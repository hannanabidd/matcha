import Text from "@/components/ui/text/Text";
import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="container">
          <div className="md:flex">
            <div className="md:w-[50%] ">
              <div className="flex">
                <Text
                  name="Match with a provider"
                  customClass="pr-[20px] cursor-pointer"
                />
                <Text
                  name="Contact us"
                  customClass="pr-[20px] cursor-pointer"
                />
                <Text name="Careers " customClass="cursor-pointer" />
              </div>
              <div className="flex md:mt-[20px] mt-[10px]">
                <Text name="M2022 Matcha, Inc." customClass="pr-[20px]" />
                <Text
                  name="Privacy"
                  customClass="pr-[20px] underline cursor-pointer"
                />
                <Text
                  name="Terms & Conditions"
                  customClass="underline cursor-pointer"
                />
              </div>
            </div>
            <div className="md:w-[50%] md:mt-[0] mt-[20px]">
              <div className="flex md:justify-end justify-center">
                <p className="text-[var(--primaryColor)]">Follow us</p>
              </div>
              <div className="flex md:justify-end justify-center md:mt-[20px] mt-[10px] ">
                <Image
                  src="/images/instagram.svg"
                  alt="image"
                  width={32}
                  height={32}
                />
                <Image
                  src="/images/TikTok.svg"
                  alt="image"
                  width={32}
                  height={32}
                  className="ml-[20px]"
                />
                <Image
                  src="/images/LinkedIn.svg"
                  alt="image"
                  width={32}
                  height={32}
                  className="ml-[20px]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Footer;
