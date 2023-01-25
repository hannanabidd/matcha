import React, { FC, useState } from "react";
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

  const handleChange = (values: Option[]) => {
    // console.log("value in dropdown", values);
    setSelectedValues(values);
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
