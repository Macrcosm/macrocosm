import { FC } from "react";
import { BiChevronDown } from "react-icons/bi";

import { Option } from "../../shared/dropdown/Dropdown";

interface DropdownTriggerProps {
  selectedOption: Option;
  label: string;
}

const DropdownTrigger: FC<DropdownTriggerProps> = (props) => {
  const { selectedOption, label } = props;
  return (
    <div>
      <p className="text-sm">{label}</p>
      <div className="flex gap-2 items-center mt-2.5">
        <p className="text-grey-700">{selectedOption.value}</p>
        <BiChevronDown size={24} />
      </div>
    </div>
  );
};

export default DropdownTrigger;
