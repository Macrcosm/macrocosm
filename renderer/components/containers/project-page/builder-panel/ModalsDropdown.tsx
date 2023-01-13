import { FC } from "react";
import { Menu } from "@headlessui/react";
import { BiChevronDown } from "react-icons/bi";
import { Float } from "@headlessui-float/react";

import { modalOptions } from "../../../../data/mock";
import { useAiModalsContext } from "../../../../hooks/useContext";

export interface ModalsDropdownProps {}

const ModalsDropdown: FC<ModalsDropdownProps> = (props) => {
  const { selectedModal, handleModalSelection } = useAiModalsContext();

  return (
    <Menu>
      <Float portal>
        <Menu.Button className="text-left outline-none flex gap-2 items-center mt-2.5">
          <p>{selectedModal.value}</p>
          <BiChevronDown size={24} />
        </Menu.Button>
        <Menu.Items
          className="mt-2 bg-black-chip ring-1 ring-border rounded-xl text-sm py-2
         child:px-5 child:py-[7px] w-[262px]
        "
        >
          {modalOptions.map((option) => (
            <Menu.Item
              key={option.key}
              className=" text-left ui-active:bg-black/20 w-full"
              as="button"
              onClick={() => handleModalSelection(option)}
              value={option.key}
            >
              <p>{option.value}</p>
              <p className="text-grey-700 mt-1.5">{option.description}</p>
            </Menu.Item>
          ))}
        </Menu.Items>
      </Float>
    </Menu>
  );
};

export default ModalsDropdown;
