import React, { FC, useState } from "react";
import Select from "react-dropdown-select";
import { iMultiProps } from "./MultiType.d";

interface Option {
  label: string;
  value: any;
}

const options: Option[] = [
  { label: "ADHD", value: "option1" },
  { label: "Adoption", value: "option2" },
  { label: "Addiction", value: "option3" },
  { label: "Alcohol Use", value: "option4" },
  { label: "Hypertension", value: "option5" },
  { label: "Anxiety", value: "option6" },
];

const MultiSelectMenu: FC<iMultiProps> = ({
  name,
  call,
  customClass,
  option,
}) => {
  const [selectedValues, setSelectedValues] = useState<Option[]>([]);

  const handleChange = (values: Option[]) => {
    setSelectedValues(values);
  };

  return (
    <Select
      placeholder={name}
      style={{ background: "#e0dfdf", height: "49px" }}
      options={option}
      onChange={handleChange}
      values={selectedValues}
      multi={true}
    />
  );
};

export default MultiSelectMenu;
