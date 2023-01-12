import { FC } from "react";
import Image from "../image";

interface AvatarProps {
  src?: string;
  alt?: string;
}

const Avatar: FC<AvatarProps> = (props) => {
  const { src, alt } = props;
  return (
    <div className="rounded-full overflow-hidden">
      {/* <div className="rounded-full h-32 aspect-square bg-yellow grid place-items-center">
        <p>A</p>
      </div> */}
      <Image
        src="https://picsum.photos/id/959/128"
        width={128}
        height={128}
        alt=""
      />
    </div>
  );
};

export default Avatar;
