import React, { useState } from "react";
import Select from "react-dropdown-select";

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

const MultiSelectMenu = () => {
  const [selectedValues, setSelectedValues] = useState<Option[]>([]);

  // const handleChange = (values: ValueType<Option>) => {
  //   setSelectedValues(values);
  // }

  return (
    <Select
      placeholder="Insurance Provider"
      style={{ background: "#e0dfdf", height: "49px" }}
      //   className="w-[50%]"
      options={options}
      onChange={() => {
        console.log("hlo");
      }}
      values={selectedValues}
      multi={true}
    />
  );
};

export default MultiSelectMenu;
