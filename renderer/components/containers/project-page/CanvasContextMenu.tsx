import { FC, MouseEvent, useState, useRef } from "react";
import { Menu, Transition } from "@headlessui/react";

import Image from "../../shared/image";
import illustration from "../../../public/images/image1.jpg";
import useClickOutside from "../../../hooks/useClickOutside";
import ImageFill from "../../shared/image/ImageFill";
import useDiscloser from "../../../hooks/useDiscloser";

const menu_position = {
  x: 0,
  y: 0,
};

export interface CanvasContextMenuProps {
  openShareImageDialog: () => void;
}

const CanvasContextMenu: FC<CanvasContextMenuProps> = (props) => {
  const { openShareImageDialog } = props;
  const [menuPosition, setMenuPosition] = useState(menu_position);
  const { close, open, isOpen } = useDiscloser();
  const popperElement = useRef<HTMLDivElement>(null);
  useClickOutside(popperElement, close);

  const onContextMenu = (e: MouseEvent) => {
    e.preventDefault();
    setMenuPosition({
      x: e.nativeEvent.offsetX - 8,
      y: e.nativeEvent.offsetY - 8,
    });
    open();
  };

  const closeMenu = (callback?: () => void) => () => {
    close();
    callback?.();
  };

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
      <Transition show={isOpen}>
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
          <Menu.Item
            as="button"
            className="ui-active:bg-black/20"
            onClick={closeMenu()}
          >
            Download
          </Menu.Item>
          <Menu.Item
            as="button"
            className="ui-active:bg-black/20"
            onClick={closeMenu()}
          >
            Upscale
          </Menu.Item>
          <Menu.Item
            as="button"
            className="ui-active:bg-black/20"
            onClick={closeMenu()}
          >
            Share with community
          </Menu.Item>
          <Menu.Item
            as="button"
            className="ui-active:bg-black/20"
            onClick={closeMenu(openShareImageDialog)}
          >
            Share on social network
          </Menu.Item>
          <Menu.Item
            as="button"
            className="ui-active:bg-black/20"
            onClick={closeMenu()}
          >
            Copy seed
          </Menu.Item>
          <Menu.Item
            as="button"
            className="ui-active:bg-black/20"
            onClick={closeMenu()}
          >
            Remove from canvas
          </Menu.Item>
        </Menu.Items>
      </Transition>
    </Menu>
  );
};

export default CanvasContextMenu;
