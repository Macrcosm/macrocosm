import { FC } from "react";
import Image from "../image";

interface AvatarProps {
  src?: string;
  name: string;
  size?: "s" | "m" | "l";
}

const Avatar: FC<AvatarProps> = (props) => {
  const { src, name, size = "s" } = props;

  const _size = size === "s" ? 36 : size === "m" ? 64 : 128;
  const fontSize = size === "s" ? "1rem" : size === "m" ? "1.5rem" : "2.5rem";

  return (
    <div className="rounded-full overflow-hidden ">
      {src ? (
        <Image src={src} width={_size} height={_size} alt="" />
      ) : (
        <div
          className="rounded-full h-32 aspect-square bg-yellow grid place-items-center"
          style={{
            width: _size,
            height: _size,
            fontSize,
          }}
        >
          <p>{name?.charAt(0)}</p>
        </div>
      )}
    </div>
  );
};

export default Avatar;
