import { FC, useState } from "react";
import { Menu, Transition } from "@headlessui/react";
import { HiOutlineHeart, HiHeart, HiDotsVertical } from "react-icons/hi";
import { Float } from "@headlessui-float/react";

import Link from "../../shared/link";
import Image from "../../shared/image";

const menu_options = [
  "Report",
  "Add to Prompt",
  "Download",
  "Save to Gallery",
  "Copy Prompt",
];

interface ImageCardProps {
  image: {
    src: string;
    width: number;
    height: number;
  };
  index: number;
}

const ImageCard: FC<ImageCardProps> = (props) => {
  const { image, index } = props;
  const [show, setShow] = useState(false);
  // const [liked, setLiked] = useState(Math.random() > 0.5);
  const [liked, setLiked] = useState(index < 2);

  return (
    <div
      className="relative"
      onMouseEnter={() => setShow(true)}
      onMouseLeave={() => setShow(false)}
    >
      <Link
        href={{
          pathname: "/community/creations/[slug]",
          query: { slug: index },
        }}
      >
        <Image className="" {...image} priority={index < 8} alt="" />
      </Link>
      <Transition
        show={show || liked}
        className="absolute right-3.5 top-3.5 flex gap-2.5"
      >
        <button
          className="p-2.5 bg-black-chip/70 backdrop-blur-lg rounded-lg"
          onClick={() => setLiked(!liked)}
        >
          {liked ? (
            <HiHeart size={18} className="text-pink" />
          ) : (
            <HiOutlineHeart size={18} />
          )}
        </button>
        {show && (
          <Menu as="div" className="relative">
            <Float placement="bottom-end" portal>
              <Menu.Button className="p-2.5 bg-black-chip/70 backdrop-blur-lg rounded-lg">
                <HiDotsVertical size={18} />
              </Menu.Button>
              <Menu.Items className="bg-black-chip/70 backdrop-blur-lg rounded-lg py-2 text-sm mt-2.5">
                {menu_options.map((option, index) => (
                  <Menu.Item
                    key={index}
                    as="button"
                    className="py-2 px-5 ui-active:bg-black/20 text-left block w-full"
                  >
                    {option}
                  </Menu.Item>
                ))}
              </Menu.Items>
            </Float>
          </Menu>
        )}
      </Transition>
    </div>
  );
};

export default ImageCard;
