import DownloadButton from "@/components/ui/button/DownloadButton";
import Text from "@/components/ui/text/Text";
import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <>
      <section className="section">
        <div className="container">
          <div className="md:flex">
            <div className="md:w-[50%]">
              <div className="flex flex-col justify-center h-full">
                <Text name="Share the " span="Health" type="heading" />
                <Text
                  name="Ask, Answer and Connect: find info you need from licensed professionals and people who have been there before."
                  type="paragraph"
                  customClass="lg:pr-[150px] sm:pr-[0px] font-khula"
                />
                <div className="flex mt-[30px]">
                  <DownloadButton
                    name="Download on the"
                    image="/images/apple.svg"
                    span="App Store"
                  />
                  <DownloadButton
                    name="GET IT ON"
                    image="/images/playStore.svg"
                    span="Play Store"
                  />
                </div>
              </div>
            </div>
            <div className="md:w-[50%]">
              <Image
                src="/images/hero.svg"
                alt="image"
                width={564}
                height={521}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
