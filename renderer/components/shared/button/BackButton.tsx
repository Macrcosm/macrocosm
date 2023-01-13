import { FC } from "react";
import { useRouter } from "next/router";
import { BiChevronLeft } from "react-icons/bi";

const BackButton: FC = () => {
  const router = useRouter();

  return (
    <button
      className="bg-black-chip ring-1 ring-border p-2 rounded-xl self-start hover:bg-black-chip/50 transition-colors"
      onClick={router.back}
    >
      <BiChevronLeft size={24} />
    </button>
  );
};

export default BackButton;
