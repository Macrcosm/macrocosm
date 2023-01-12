import { FC, useState } from "react";
import { Menu } from "@headlessui/react";
import { IoMdCloseCircleOutline } from "react-icons/io";
import { BiChevronDown, BiSearch } from "react-icons/bi";
import { IoLinkOutline } from "react-icons/io5";

import Dialog, { DialogProps } from "../../../shared/dialog/Dialog";
import PrimaryButton from "../../../shared/button/PrimaryButton";
import ImageFill from "../../../shared/image/ImageFill";

const options = [
  "All",
  "Art Movements",
  "Mediums",
  "Aesthetic",
  "Lighting",
  "Camera",
  "Emotion",
  "Color",
];
const filters = ["Picasso", "Cowboy Bebop"];
const images = [
  {
    src: "https://picsum.photos/id/12/573/116",
    width: 206,
    height: 116,
    name: "Picasso",
  },
  {
    src: "https://picsum.photos/id/11/206/116",
    width: 206,
    height: 116,
    name: "Monet",
  },
  {
    src: "https://picsum.photos/id/10/206/116",
    width: 206,
    height: 116,
    name: "Satoshi Kon",
  },
  {
    src: "https://picsum.photos/id/13/206/116",
    width: 206,
    height: 116,
    name: "Satoshi Kon",
  },
  {
    src: "https://picsum.photos/id/14/206/116",
    width: 206,
    height: 116,
    name: "Satoshi Kon",
  },
  {
    src: "https://picsum.photos/id/15/206/116",
    width: 206,
    height: 116,
    name: "Picasso",
  },
  {
    src: "https://picsum.photos/id/16/206/116",
    width: 206,
    height: 116,
    name: "Satoshi Kon",
  },
  {
    src: "https://picsum.photos/id/17/206/116",
    width: 206,
    height: 116,
    name: "Satoshi Kon",
  },
  {
    src: "https://picsum.photos/id/18/206/116",
    width: 206,
    height: 116,
    name: "Picasso",
  },
];

interface ImageStyleDialogProps extends Omit<DialogProps, "children"> {
  openAddImageDialog: () => void;
}

const ImageStyleDialog: FC<ImageStyleDialogProps> = (props) => {
  const { onClose, openAddImageDialog, open } = props;
  const [option, setOption] = useState(options[0]);

  return (
    <Dialog onClose={onClose} open={open}>
      <div className="w-[700px] px-3">
        <h3 className="text-2xl font-medium">Style</h3>
        <p className="text-sm text-grey-700 mt-1.5 max-w-lg">
          Art Movements, Mediums, Aesthetic, Lighting, Camera, Emotion,
          Color
        </p>
        <div className="mt-5 px-5 py-2.5  bg-black-chip rounded-xl ring-1 ring-border flex gap-5 items-center">
          <Menu as="div" className="relative text-sm">
            <Menu.Button className="rounded-lg px-3 py-2.5 ring-1 ring-border flex gap-2 items-center">
              {option}
              <BiChevronDown size={24} />
            </Menu.Button>
            <Menu.Items className="absolute mt-2 z-10 bg-black-chip ring-1 ring-border rounded-xl child:px-5 child:py-2 py-2 child:text-left">
              {options.map((o) => (
                <Menu.Item
                  as="button"
                  className="ui-active:bg-black/20 block w-full whitespace-nowrap"
                  key={o}
                  onClick={() => setOption(o)}
                >
                  {o}
                </Menu.Item>
              ))}
            </Menu.Items>
          </Menu>
          <div className="flex gap-2 items-center flex-1">
            <BiSearch size={18} />
            <input
              className="text-grey-500 bg-transparent outline-none flex-1"
              placeholder="Search"
            />
          </div>
        </div>
        <div className="mt-6 flex justify-between items-center">
          <div className="flex gap-2.5 items-center flex-wrap">
            {filters.map((filter) => (
              <div
                key={filter}
                className="flex gap-3 text-sm items-center px-5 py-2.5 bg-black rounded-full"
              >
                {filter}
                <button>
                  <IoMdCloseCircleOutline size={16} />
                </button>
              </div>
            ))}
          </div>
          {/*<PrimaryButton variant="primary" onClick={openAddImageDialog}>*/}
          {/*  Add*/}
          {/*</PrimaryButton>*/}
        </div>
        <p className="my-5 text-lg">Popular</p>
        <div className="grid grid-cols-3 gap-x-2.5 gap-y-6 overflow-y-auto max-h-[300px] p-2">
          {images.map(({ name, ...image }, index) => {
            const isSelected = index === 0;
            return (
              <div key={index}>
                <div className="relative">
                  <ImageFill
                    {...image}
                    aria-selected={isSelected}
                    alt=""
                    className="rounded-xl object-cover relative aria-selected:ring-2 ring-primary opacity-60"
                  />
                  {isSelected && (
                    <IoMdCloseCircleOutline
                      size={16}
                      className="absolute top-3 right-4"
                    />
                  )}
                </div>
                <div className="flex gap-2.5 items-center mt-2.5 text-grey-500">
                  <p className="text-sm">{name}</p>
                  <IoLinkOutline size={14} />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Dialog>
  );
};

export default ImageStyleDialog;
