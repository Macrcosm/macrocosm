import { FC, useState, Fragment } from "react";
import { FiSearch } from "react-icons/fi";
import ImageCard from "./ImageCard";

export const images = [
  {
    src: "https://picsum.photos/id/10/282/282",
    height: 110,
    width: 70,
  },
  {
    src: "https://picsum.photos/id/20/282/282",
    height: 46,
    width: 70,
  },
  {
    src: "https://picsum.photos/id/30/282/282",
    height: 70,
    width: 70,
  },
  {
    src: "https://picsum.photos/id/40/282/282",
    height: 70,
    width: 70,
  },
  {
    src: "https://picsum.photos/id/50/282/282",
    height: 70,
    width: 70,
  },
  {
    src: "https://picsum.photos/id/60/282/282",
    height: 70,
    width: 70,
  },
  {
    src: "https://picsum.photos/id/11/282/282",
    height: 110,
    width: 70,
  },
  {
    src: "https://picsum.photos/id/22/282/282",
    height: 46,
    width: 70,
  },
  {
    src: "https://picsum.photos/id/13/282/282",
    height: 110,
    width: 70,
  },
  {
    src: "https://picsum.photos/id/24/282/282",
    height: 46,
    width: 70,
  },
  {
    src: "https://picsum.photos/id/15/282/282",
    height: 110,
    width: 70,
  },
  {
    src: "https://picsum.photos/id/26/282/282",
    height: 46,
    width: 70,
  },
];

const GalleryPanel: FC = () => {
  return (
    <div className="p-5">
      <div className="flex gap-3.5 items-center">
        <button>
          <FiSearch size={12} />
        </button>
        <input
          placeholder="Search"
          className="bg-transparent focus:px-1 text-grey-300"
        />
      </div>
      <div className="mt-6 waterfall column-gap-2 column-count-3">
        {images.map((image, index) => (
          <ImageCard image={image} index={index} key={index} />
        ))}
      </div>
    </div>
  );
};

export default GalleryPanel;
