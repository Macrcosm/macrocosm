import { FC, MouseEvent, useState, useRef } from "react";
import { Menu, Transition } from "@headlessui/react";

import Image from "../../shared/image";
import illustration from "../../../public/images/image1.jpg";
import useClickOutside from "../../../hooks/useClickOutside";
import ImageFill from "../../shared/image/ImageFill";

const menu_position = {
  x: 0,
  y: 0,
};

const menu_options = [
  "Download",
  "Upscale",
  "Add to Prompt",
  "Share with community",
  "Share on social network",
  "Copy seed",
  "Remove from canvas",
];

const CanvasContextMenu: FC = () => {
  const [menuPosition, setMenuPosition] = useState(menu_position);
  const [open, setOpen] = useState(false);
  const popperElement = useRef<HTMLDivElement>(null);

  const onContextMenu = (e: MouseEvent) => {
    e.preventDefault();
    setOpen(true);
    setMenuPosition({
      x: e.nativeEvent.offsetX - 8,
      y: e.nativeEvent.offsetY - 8,
    });
  };

  const closeContextMenu = () => setOpen(false);

  useClickOutside(popperElement, closeContextMenu);

  return (
    <Menu as="div" className="relative">
      <Menu.Button onContextMenu={onContextMenu} as="div">
        <ImageFill
          src={illustration}
          alt=""
          className=" object-cover"
          height={480}
          width={480}
          sizes="420px"
        />
      </Menu.Button>
      <Transition show={open}>
        <Menu.Items
          ref={popperElement}
          className="absolute z-10 bg-black-chip/60 backdrop-blur-2xl ring-1 ring-border rounded-xl text-sm py-2
                  child:py-2 child:px-5 child:text-left child:block child:w-full w-52"
          static
          style={{
            top: menuPosition.y,
            left: menuPosition.x,
          }}
        >
          {menu_options.map((option) => (
            <Menu.Item
              as="button"
              className="ui-active:bg-black/20"
              key={option}
              onClick={closeContextMenu}
            >
              {option}
            </Menu.Item>
          ))}
        </Menu.Items>
      </Transition>
    </Menu>
  );
};

export default CanvasContextMenu;
