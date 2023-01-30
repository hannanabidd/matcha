import DropdownMenu from "@/components/ui/dropdown/DropdownMenu";
import Input from "@/components/ui/input/Input";
import MultiSelectMenu from "@/components/ui/multiselect/MultiSelectMenu";
import Option from "@/components/ui/Option/Option";
import Rating from "@/components/ui/rating/Rating";
import Text from "@/components/ui/text/Text";
import React, { useEffect, useState } from "react";
import questions from "../../data/quiz.json";
import FormButtons from "@/components/ui/button/FormButtons";
import Image from "next/image";
import { QuizContext } from "@/context/quiz/QuizContext";
import { useContext } from "react";

const QuizOne = () => {
  const [step, setStep] = useState<number>(0);
  const [error, setError] = useState<any>("");
  const { data, setData } = useContext(QuizContext);
  const [answers, setAnswers] = useState<any>();

  const questionLength = questions.questions.length;
  console.log("data in quiz", data);

  const handleData = (data: string) => {
    // console.log(data);
    setAnswers(data);
  };
  const handleNext = (question: any) => {
    // console.log("question", question?.type);
    if (question.type == "option") {
      if (answers) {
        setData?.([...data, { id: step, answer: answers }]);
        setStep(question.id + 1);
        setAnswers(undefined);
        setError(null);
      } else {
        setError(question.error);
      }
    } else if (question.type == "mcq") {
      if (answers) {
        setData?.([...data, { id: step, answer: answers }]);
        setStep(question.id + 1);
        setAnswers(undefined);
        setError(null);
      } else {
        setError(question.error);
      }
    } else if (question.type == "input") {
      if (answers) {
        setData?.([...data, { id: step, answer: answers }]);
        setStep(question.id + 1);
        setAnswers(undefined);
        setError(null);
      } else {
        setError(question.error);

        setError("Please enter your email");
      }
    } else if (question.type == "select") {
      if (answers) {
        setData?.([...data, { id: step, answer: answers }]);
        setStep(question.id + 1);
        setAnswers(undefined);
        setError(null);
      } else {
        setError(question.error);

        // setError("s");
      }
    } else {
      if (answers) {
        setData?.([...data, { id: step, answer: answers }]);
        setStep(question.id + 1);
        setAnswers(undefined);
        setError(null);
      } else {
        setError(question.error);
      }
    }
  };
  const handlePrevious = (question: any) => {
    if (step == 0) {
      <></>;
    } else {
      data.pop();
      setStep(step - 1);
      setAnswers(undefined);
    }
  };

  return (
    <>
      <section className="section">
        <div className="container flex justify-center min-h-[70vh]">
          <div className="w-[70%] my-[20px] h-full ">
            {step == 0 && (
              <>
                <Text
                  name="We want to find you an awesome therapist."
                  span="A few questions first..."
                  type="heading"
                  customClass="md:text-[48px] text-[28px] md:leading-[60px] leading-[35px]"
                />
              </>
            )}
            {questions.questions?.map((data: any, index: any) => {
              // console.log("data", questions);
              return (
                <>
                  <div className="" key={data.id}>
                    {step === data.id && (
                      <>
                        <div>
                          <Text
                            name={data.question}
                            type="paragraph"
                            customClass="md:text-[40px] text-[24px] md:leading-[50px] leading-[35px] font-400 leading-[50px]"
                          />
                          <Text name={data.select} customClass="" />
                          <Text name={error} customClass="text-[#FF0000]" />
                          <div>
                            {data?.type == "option" ? (
                              <>
                                <Option
                                  option={data?.options}
                                  handleData={handleData}
                                />
                              </>
                            ) : data?.type == "select" ? (
                              <div className="w-[50%]">
                                <DropdownMenu
                                  name={data?.placeholder}
                                  option={data?.options}
                                  handleData={handleData}
                                />
                              </div>
                            ) : data?.type == "mcq" ? (
                              <Rating handleData={handleData} />
                            ) : data?.type == "multi" ? (
                              <div className="w-[50%]">
                                <MultiSelectMenu
                                  name="-Multiple Select"
                                  option={data.options}
                                  handleData={handleData}
                                />
                              </div>
                            ) : (
                              <Input
                                name={data?.placeholder}
                                handleData={handleData}
                              />
                            )}
                          </div>
                          <button
                            className="commonBtn primaryBtn h-[32px] mt-[30px] rounded-[11px]"
                            onClick={() => {
                              handleNext(data);
                              // setStep(data.id + 1);
                            }}>
                            NEXT
                          </button>
                        </div>
                        {step == questionLength ? null : (
                          <>
                            <div className="flex items-end justify-end ">
                              <FormButtons
                                step={step}
                                setStep={setStep}
                                handleNext={handleNext}
                                question={data}
                                handlePrevious={handlePrevious}
                              />
                            </div>
                          </>
                        )}
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
        </div>
      </section>
    </>
  );
};

export default QuizOne;
