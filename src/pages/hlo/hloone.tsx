import Button from "@/components/ui/button/Button";
import DropdownMenu from "@/components/ui/dropdown/DropdownMenu";
import Input from "@/components/ui/input/Input";
import MultiSelectMenu from "@/components/ui/multiselect/MultiSelectMenu";
import Option from "@/components/ui/Option/Option";
import Rating from "@/components/ui/rating/Rating";
import Text from "@/components/ui/text/Text";
import React from "react";

const QuizOne = () => {
  return (
    <>
      <section className="section">
        <div className="container flex justify-center">
          <div className="w-[70%]">
            <Text
              name="We want to find you an awesome therapist.
                "
              span="A few questions first..."
              type="heading"
              customClass="text-[48px]"
            />
            <div className="mt-[40px] px-[50px]">
              <Text
                name="What kind of therapy are you looking for?"
                type="paragraph"
              />
              <Text name="Select one" customClass="" />
              <div className="my-[30px]">
                <Option name="Adult " letter="A" />
              </div>
              <div className="my-[30px]">
                <Rating />
              </div>
              <div className="my-[30px]">
                <Input name="hello@gmail.com" />
              </div>
              <div className="my-[30px]">
                <MultiSelectMenu />
              </div>
              <div className="my-[30px]">
                <DropdownMenu />{" "}
              </div>
              <Button name="Next" type="primaryBtn" customClass="h-[36px] " />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default QuizOne;
