import { useRouter } from "next/router";
import { BiChevronLeft } from "react-icons/bi";

import Header from "../../shared/header/Header";
import Avatar from "../../shared/avatar/Avatar";

export default function CommunityProfilePage() {
  const router = useRouter();

  return (
    <div className="">
      <Header />
      <button
        className="bg-black-chip ring-1 ring-border mt-12 mb-2 mx-8 p-2 rounded-xl"
        onClick={router.back}
      >
        <BiChevronLeft size={24} />
      </button>
      <div className="container px-4">
        <div className="flex items-start gap-20">
          <Avatar name={"A"}/>
        </div>
      </div>
    </div>
  );
}
