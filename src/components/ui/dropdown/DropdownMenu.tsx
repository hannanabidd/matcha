import { QuizContext } from "@/context/quiz/QuizContext";
import React, { FC, useContext, useState } from "react";
import Select from "react-dropdown-select";
import { iDropdownProps } from "./DropdownType.d";

interface Option {
  id: number;
  name: string;
  value: string;
}

// const options: Option[] = [
//   { label: "California", value: "option1" },
//   { name: "Texas", value: "option2" },
//   { label: "Florida", value: "option3" },
//   { label: "Alaska", value: "option4" },
//   { label: "Hawaii", value: "option5" },
//   { label: "Ohio", value: "option6" },
// ];

const DropdownMenu: FC<iDropdownProps> = ({
  name,
  customClass,
  call,
  option,
}) => {
  const [selectedValues, setSelectedValues] = useState<Option[]>([]);
  const { data, setData } = useContext(QuizContext);
  console.log("data in dropdown", data);

  const handleChange = (values: Option[]) => {
    // console.log("value in dropdown", values[0].value);
    setSelectedValues(values);
    setData?.([...data, { answer: values[0].value }]);
  };
  return (
    <Select
      placeholder={name}
      options={option}
      onChange={handleChange}
      values={selectedValues}
    />
  );
};

export default DropdownMenu;
