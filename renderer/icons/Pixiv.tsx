import Image from "../components/shared/image";
import pixiv from "../public/icons/pixiv.svg";

export default function PixivIcon() {
  return <Image src={pixiv} alt={"Pixiv Logo"} width={62} height={24} />;
}
