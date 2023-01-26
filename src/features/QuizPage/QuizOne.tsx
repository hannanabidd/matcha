import Button from "@/components/ui/button/Button";
import DropdownMenu from "@/components/ui/dropdown/DropdownMenu";
import Input from "@/components/ui/input/Input";
import MultiSelectMenu from "@/components/ui/multiselect/MultiSelectMenu";
import Option from "@/components/ui/Option/Option";
import Rating from "@/components/ui/rating/Rating";
import Text from "@/components/ui/text/Text";
import React, { useEffect, useState } from "react";
import questions from "../../data/quiz.json";
import alphabets from "../../data/alphabets.json";
import FormButtons from "@/components/ui/button/FormButtons";
import Image from "next/image";
import { QuizContext } from "@/context/quiz/QuizContext";
import { useContext } from "react";

const QuizOne = () => {
  const [step, setStep] = useState<number>(0);
  const { data, setData } = useContext(QuizContext);
  // console.log("questions", questions);

  const questionLength = questions.questions.length;
  console.log("data in quiz", data);

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
                              <Option
                                option={data?.options}
                                // selected={selected}
                                // setSelected={setSelected}
                              />
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
            {step == questionLength && (
              <div className="w-[100%]">
                <Text
                  name="All done. Loading your perfect therapy sessions. "
                  type="paragraph"
                  customClass="text-[40px] font-400 leading-[50px] text-center"
                />
                <div className="w-[100%] flex justify-center mt-[100px]">
                  <Image
                    src="/images/loading.svg"
                    alt="img"
                    height={227}
                    width={227}
                  />
                </div>
              </div>
            )}
          </div>
          {step == questionLength ? null : (
            <>
              <div className="flex items-end">
                <FormButtons step={step} setStep={setStep} />
              </div>
            </>
          )}
        </div>
      </section>
    </>
  );
};

export default QuizOne;
