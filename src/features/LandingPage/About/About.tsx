import Button from "@/components/ui/button/Button";
import Text from "@/components/ui/text/Text";
import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <>
      <section className="section">
        <div className="container">
          <center>
            <Text name="About Us" type="heading" />
          </center>
          <div className="md:flex md:mt-[50px] mt-[20px]">
            <div className="md:w-[50%]">
              <div className="flex flex-col justify-center h-full">
                <Text name="Take the therapy quiz" type="heading" />
                <Text
                  name="We offer specialized therapy tailored to you. We, along with master clinicians and tech gurus around the country, built a powerful and fun therapy quiz so you can learn about your perfect therapy match. It takes about 4 minutes to complete and you get a free therapy session at the end! "
                  type="paragraph"
                  customClass="md:pr-[150px] sm:pr-[0px] font-khula"
                />
                <Button
                  name="Quiz time!"
                  type="primaryBtn"
                  customClass="md:w-[40%] w-[60%] mt-[10px]"
                />
              </div>
            </div>
            <div className="md:w-[50%]">
              <Image
                src="/images/aboutOne.svg"
                alt="image"
                width={590}
                height={540}
              />
            </div>
          </div>
          <div className="md:flex md:mt-[80px] mt-[20px]">
            <div className="md:w-[50%]">
              <Image
                src="/images/aboutTwo.svg"
                alt="image"
                width={590}
                height={540}
              />
            </div>
            <div className="md:w-[50%] ml-[10px]">
              <div className="flex flex-col justify-center h-full">
                <Text name="Let's talk about it" type="heading" />
                <Text
                  name="We offer specialized therapy tailored to you. We, along with master clinicians and tech gurus around the country, built a powerful and fun therapy quiz so you can learn about your perfect therapy match. It takes about 4 minutes to complete and you get a free therapy session at the end! "
                  type="paragraph"
                  customClass="md:pr-[150px] sm:pr-[0px] font-khula"
                />
                <div className="md:flex">
                  <Button
                    name="Get the iOS app"
                    type="primaryBtn"
                    customClass="md:w-[40%] w-[60%] mt-[10px] md:mr-[10px]"
                  />
                  <Button
                    name="Get the google app"
                    type="primaryBtn"
                    customClass="md:w-[40%] w-[60%] mt-[10px]"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default About;
