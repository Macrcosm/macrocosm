import { FC, MouseEvent, MouseEventHandler, useState, useRef } from "react";
import { Menu, Transition } from "@headlessui/react";

import ImageFill from "../../shared/image/ImageFill";
import useDiscloser from "../../../hooks/useDiscloser";
import useClickOutside from "../../../hooks/useClickOutside";
import { useRouter } from "next/router";

interface ProjectCardProps {
  src: string;
  name: string;
  i: number;
}

const ProjectCard: FC<ProjectCardProps> = (props) => {
  const { name, src, i } = props;
  const { close, open, isOpen } = useDiscloser();
  const router = useRouter();
  const elementRef = useRef<HTMLButtonElement>(null);
  const popperRef = useRef<HTMLUListElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useClickOutside(elementRef, close, popperRef);

  const onContextMenu = (e: MouseEvent) => {
    e.preventDefault();
    setPosition({ x: e.nativeEvent.offsetX, y: e.nativeEvent.offsetY });
    open();
  };

  const onClick = (callback?: () => {}) => () => {
    close();
    callback?.();
  };

  return (
    <Menu as="div" className="relative">
      <Menu.Button onContextMenu={onContextMenu} ref={elementRef}>
        <ImageFill
          width={300}
          height={182}
          src={src}
          alt={name}
          sizes="300px"
          className="rounded-xl"
        />
        <p className="text-sm pt-3.5 pl-3.5 text-left">{name}</p>
      </Menu.Button>
      <Transition show={isOpen}>
        <Menu.Items
          as="ul"
          ref={popperRef}
          static
          className="absolute z-10 w-[142px] bg-black-chip/60 ring-border ring-1 backdrop-blur-xl rounded-xl text-sm py-2 child:px-5 child:py-2 child:block child:w-full"
          style={{
            top: position.y,
            left: position.x,
          }}
        >
          <Menu.Item
            as="button"
            className=" text-left ui-active:bg-black/20"
            onClick={onClick(() => router.push(`/project`))}
          >
            Open
          </Menu.Item>
          <Menu.Item
            as="button"
            className=" text-left ui-active:bg-black/20"
            onClick={onClick()}
          >
            Rename
          </Menu.Item>
          <Menu.Item
            as="button"
            className=" text-left ui-active:bg-black/20"
            onClick={onClick()}
          >
            Duplicate
          </Menu.Item>
          <Menu.Item
            as="button"
            className=" text-left ui-active:bg-black/20"
            onClick={onClick()}
          >
            Move to Folder
          </Menu.Item>
          <Menu.Item
            as="button"
            className=" text-left ui-active:bg-black/20"
            onClick={onClick()}
          >
            Delete
          </Menu.Item>
        </Menu.Items>
      </Transition>
    </Menu>
  );
};

export default ProjectCard;
