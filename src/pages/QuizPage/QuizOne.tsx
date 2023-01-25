import Button from "@/components/ui/button/Button";
import DropdownMenu from "@/components/ui/dropdown/DropdownMenu";
import Input from "@/components/ui/input/Input";
import MultiSelectMenu from "@/components/ui/multiselect/MultiSelectMenu";
import Option from "@/components/ui/Option/Option";
import Rating from "@/components/ui/rating/Rating";
import Text from "@/components/ui/text/Text";
import React, { useState } from "react";
import questions from "../../data/quiz.json";
import alphabets from "../../data/alphabets.json";

const QuizOne = () => {
  const [step, setStep] = useState<number>(0);
  // console.log("questions", questions);

  return (
    <>
      <section className="section">
        <div className="container flex justify-center min-h-[80vh]">
          <div className="w-[70%]">
            {step == 0 && (
              <>
                <Text
                  name="We want to find you an awesome therapist."
                  span="A few questions first..."
                  type="heading"
                  customClass="text-[48px]"
                />
              </>
            )}
            {questions.questions?.map((data: any, index: any) => {
              // console.log("data", data?.option);
              return (
                <>
                  <div className="my-[20px]" key={data.id}>
                    {step === data.id && (
                      <>
                        <Text
                          name={data.question}
                          type="paragraph"
                          customClass="text-[40px] font-400 leading-[50px]"
                        />
                        <Text name={data.select} customClass="" />
                        <div>
                          {data?.type == "option" ? (
                            <>
                              {data?.options?.map((e: any, i: any) => {
                                return (
                                  <Option
                                    name={e?.name}
                                    letter={alphabets[i]}
                                    select={e}
                                  />
                                );
                              })}
                            </>
                          ) : data?.type == "select" ? (
                            <div className="w-[50%]">
                              <DropdownMenu
                                name={data?.placeholder}
                                option={data?.options}
                              />
                            </div>
                          ) : data?.type == "mcq" ? (
                            <Rating />
                          ) : data?.type == "multi" ? (
                            <div className="w-[50%]">
                              <MultiSelectMenu
                                name="-Multiple Select"
                                option={data.options}
                              />
                            </div>
                          ) : (
                            <Input name={data?.placeholder} />
                          )}
                        </div>
                        <button
                          className="commonBtn primaryBtn h-[32px] mt-[30px] rounded-[11px]"
                          onClick={() => {
                            setStep(data.id + 1);
                          }}>
                          NEXT
                        </button>
                      </>
                    )}
                  </div>
                </>
              );
            })}
          </div>
          <div className="flex items-end">
            <div
              className="h-[28px] w-[34px] rounded-tl-[5px] rounded-bl-[5px] bg-[var(--primaryColor)] flex justify-center items-center cursor-pointer mr-[5px]"
              onClick={() => setStep(step + 1)}>
              <p className="text-[#fff] text-[30px] pt-[10px]">^</p>
            </div>
            <div
              className="h-[28px] w-[34px] rounded-tr-[5px] rounded-br-[5px] bg-[var(--primaryColor)]  flex justify-center items-center cursor-pointer"
              onClick={() => setStep(step - 1)}>
              <p className="text-[#fff] text-[30px] pt-[10px] rotate-180">^</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default QuizOne;
