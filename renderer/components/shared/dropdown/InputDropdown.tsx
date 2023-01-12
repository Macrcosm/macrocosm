import { Popover } from "@headlessui/react";
import { FC, ReactNode, useState } from "react";
import { BiChevronDown } from "react-icons/bi";

export interface InputDropdownProps {
  label?: string;
  description: string;
  defaultValue?: number;
  min?: number;
  step?: string | number;
}

const InputDropdown: FC<InputDropdownProps> = (props) => {
  const { label, description, defaultValue = 1, min = 1, step } = props;
  const [value, setValue] = useState(defaultValue);

  return (
    <Popover as="div" className="relative">
      <Popover.Button className="text-left">
        <p className="text-sm">{label}</p>
        <div className="flex gap-2 items-center mt-2.5">
          <p className="text-grey-700">{value}</p>
          <BiChevronDown size={24} />
        </div>
      </Popover.Button>
      <Popover.Panel className="absolute z-10 bg-black-chip p-5 ring-1 ring-border rounded-xl text-sm flex flex-col gap-3.5 !text-left">
        <input
          value={value}
          type="number"
          onChange={(e) => setValue(parseFloat(e.target.value))}
          className="ring-border ring-1 bg-grey-900 px-5 py-4 text-base rounded-xl"
          min={min}
          step={step}
        />
        <p className="text-grey-700 font-medium">{description}</p>
      </Popover.Panel>
    </Popover>
  );
};

export default InputDropdown;
