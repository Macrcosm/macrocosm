import { FC } from "react";
import { HiDotsVertical } from "react-icons/hi";
import { Menu } from "@headlessui/react";
import { Float } from "@headlessui-float/react";

const ImageDropdown: FC = () => {
  return (
    <Menu className="relative" as="div">
      <Float offset={8} placement="bottom-start">
        <Menu.Button>
          <HiDotsVertical size={24} />
        </Menu.Button>

        <Menu.Items
          className="bg-black-chip ring-1 ring-border rounded-xl text-sm 
       py-2 child:py-2 child:px-5 child:text-left child:block w-[146px] child:cursor-pointer"
        >
          <Menu.Item as="li" className="ui-active:bg-black/20 block ">
            Add to Prompt
          </Menu.Item>
          <Menu.Item as="li" className="ui-active:bg-black/20">
            Download
          </Menu.Item>
          <Menu.Item as="li" className="ui-active:bg-black/20">
            Save to Gallery
          </Menu.Item>
          <Menu.Item as="li" className="ui-active:bg-black/20">
            Copy Prompt
          </Menu.Item>
        </Menu.Items>
      </Float>
    </Menu>
  );
};

export default ImageDropdown;
