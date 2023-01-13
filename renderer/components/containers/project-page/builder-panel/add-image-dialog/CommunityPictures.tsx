import { FC } from "react";

import CustomTab from "./CustomTab";
import Image from "../../../../shared/image";

const trending_images = [
  {
    src: "https://picsum.photos/id/10/210/304",
    height: 304,
    width: 210,
  },
  {
    src: "https://picsum.photos/id/14/210/304",
    height: 304,
    width: 210,
  },
  {
    src: "https://picsum.photos/id/13/210/118",
    height: 118,
    width: 210,
  },
  {
    src: "https://picsum.photos/id/12/210/210",
    height: 210,
    width: 210,
  },
];
const latest_images = [
  {
    src: "https://picsum.photos/id/10/210/304",
    height: 304,
    width: 210,
  },
  {
    src: "https://picsum.photos/id/13/210/118",
    height: 118,
    width: 210,
  },
  {
    src: "https://picsum.photos/id/12/210/210",
    height: 210,
    width: 210,
  },
];

const popular_images = [
  {
    src: "https://picsum.photos/id/10/210/304",
    height: 304,
    width: 210,
  },
  {
    src: "https://picsum.photos/id/13/210/118",
    height: 118,
    width: 210,
  },
  {
    src: "https://picsum.photos/id/12/210/210",
    height: 118,
    width: 210,
  },

  {
    src: "https://picsum.photos/id/12/210/210",
    height: 210,
    width: 210,
  },
];

const CommunityPictures: FC = () => {
  return (
    <CustomTab options={["Trending", "Latest", "Popular"]}>
      {trending_images.map(({ src, height, width }, index) => (
        <div
          key={index}
          className="relative"
          style={{
            height,
            width,
          }}
        >
          <Image alt="" src={src} fill />
        </div>
      ))}
      {latest_images.map(({ src, height, width }, index) => (
        <div
          key={index}
          className="relative"
          style={{
            height,
            width,
          }}
        >
          <Image alt="" src={src} fill />
        </div>
      ))}
      {popular_images.map(({ src, height, width }, index) => (
        <div
          key={index}
          className="relative"
          style={{
            height,
            width,
          }}
        >
          <Image alt="" src={src} fill />
        </div>
      ))}
    </CustomTab>
  );
};

export default CommunityPictures;
