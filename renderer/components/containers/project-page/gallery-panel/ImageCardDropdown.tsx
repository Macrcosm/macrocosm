import { FC } from "react";
import { HiDotsVertical } from "react-icons/hi";
import { Popover, Menu } from "@headlessui/react";

const ImageCardDropdown: FC = () => {
  return (
    <Menu>
      <Menu.Button className="mt-2">
        <HiDotsVertical size={20} />
      </Menu.Button>
      <Menu.Items
        className="absolute z-10 left-full bg-black-chip ring-1 ring-border rounded-xl text-sm py-2 
                  child:py-2 child:px-5 child:text-left child:w-full w-[198px]"
      >
        <Menu.Item as="button" className="ui-active:bg-black/20">
          Download
        </Menu.Item>
        <Menu.Item as="button" className="ui-active:bg-black/20">
          Add to Prompt
        </Menu.Item>
        <Menu.Item as="button" className="ui-active:bg-black/20">
          Share with community
        </Menu.Item>
        <Menu.Item as="button" className="ui-active:bg-black/20">
          Copy Seed
        </Menu.Item>
        <Menu.Item as="button" className="ui-active:bg-black/20">
          Delete Forever
        </Menu.Item>
      </Menu.Items>
    </Menu>
  );
};

export default ImageCardDropdown;
