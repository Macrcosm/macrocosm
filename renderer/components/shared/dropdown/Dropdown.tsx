import { Listbox } from "@headlessui/react";
import { FC, ReactNode, useState } from "react";
import { BiChevronDown } from "react-icons/bi";

export interface Option {
  value: string | number;
  key: string | number;
  description?: string;
}

export interface DropdownProps {
  options: Option[];
  Button?: FC;
  label?: string;
  description?: string;
  trigger?: (option: Option) => ReactNode;
}

const Dropdown: FC<DropdownProps> = (props) => {
  const { options, label, description, trigger } = props;
  const [selectedOption, setSelectedOption] = useState(options[0]);

  return (
    <Listbox
      value={selectedOption}
      onChange={setSelectedOption}
      as="div"
      className="relative"
    >
      <Listbox.Button className="text-left">
        {trigger?.(selectedOption) || (
          <div className="flex gap-2 items-center mt-2.5">
            <p className="">{selectedOption.value}</p>
            <BiChevronDown size={24} />
          </div>
        )}
      </Listbox.Button>
      <Listbox.Options className="absolute mt-2 z-10 bg-black-chip  ring-1 ring-border rounded-xl text-sm child:px-5 child:py-2 py-2">
        {description && (
          <p className="text-grey-700 max-w-[134px] font-medium">
            {description}
          </p>
        )}
        {options.map((option) => (
          <Listbox.Option
            key={option.key}
            value={option}
            className="cursor-pointer ui-active:bg-black/20"
          >
            {option.value}
            {option.description && (
              <p className="text-grey-700">{option.description}</p>
            )}
          </Listbox.Option>
        ))}
      </Listbox.Options>
    </Listbox>
  );
};

export default Dropdown;
