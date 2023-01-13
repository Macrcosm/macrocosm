import { FC, Fragment, useState } from "react";
import { Popover } from "@headlessui/react";
import { Float } from "@headlessui-float/react";

import { images } from ".";
import Image from "../../../shared/image";
import ImageCardDropdown from "./ImageCardDropdown";
import ImageFill from "../../../shared/image/ImageFill";

interface ImageCardProps {
  image: typeof images[number];
  index: number;
}

const ImageCard: FC<ImageCardProps> = (props) => {
  const { image, index } = props;
  const [show, setShow] = useState(false);

  return (
    <Popover
      onMouseEnter={() => setShow(true)}
      onMouseLeave={() => setShow(false)}
    >
      <Float show={show} autoPlacement>
        <Popover.Button as="div">
          <ImageFill {...image} alt="" />
        </Popover.Button>

        <Popover.Panel className="z-10 p-5 bg-black-chip ring-1 ring-border rounded-xl w-[322px]">
          <div className="w-[282px] h-[282px] relative">
            <Image src={image.src} alt="" fill className="" />
          </div>
          <div className="flex gap-4 mt-2.5 items-start">
            <p className="text-grey-600 text-base">
              photograph of Medieval knight in suit in the style of the movie
              stranger things photorealistic hyper realistic 35mm lens dramatic
              lighting --ar 3:2 --v 4 --style 4b
            </p>
            <ImageCardDropdown />
          </div>
        </Popover.Panel>
      </Float>
    </Popover>
  );
};

export default ImageCard;
