import Img, { ImageProps } from "next/image";

export default function ImageFill(props: ImageProps) {
  const { height, width, ...rest } = props;

  return (
    <div
      style={{
        height,
        width,
      }}
      className="relative"
    >
      <Img {...rest} fill />
    </div>
  );
}
