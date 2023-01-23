import Button from "@/components/ui/button/Button";
import Option from "@/components/ui/Option/Option";
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
                <Option name="Adult" letter="A" />
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
