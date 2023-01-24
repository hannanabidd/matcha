import React, { useState } from "react";
import Select from "react-dropdown-select";

interface Option {
  label: string;
  value: any;
}

const options: Option[] = [
  { label: "California", value: "option1" },
  { label: "Texas", value: "option2" },
  { label: "Florida", value: "option3" },
  { label: "Alaska", value: "option4" },
  { label: "Hawaii", value: "option5" },
  { label: "Ohio", value: "option6" },
];

const DropdownMenu = () => {
  const [selectedValues, setSelectedValues] = useState<Option[]>([]);

  // const handleChange = (values: ValueType<Option>) => {
  //   setSelectedValues(values);
  // }

  return (
    <Select
      placeholder="Enter State"
      options={options}
      onChange={() => {
        console.log("hlo");
      }}
      values={selectedValues}
      className="react-dropdown-select-option"
      // classNamePrefix="react-select"
    />
  );
};

export default DropdownMenu;
