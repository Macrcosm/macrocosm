import { FC, useState } from "react";
import { HiOutlineHeart, HiHeart, HiOutlinePlus } from "react-icons/hi";
import { BiChevronLeft } from "react-icons/bi";
import { useRouter } from "next/router";

import Header from "../../shared/header/Header";
import Image from "../../shared/image";
import ImageDropdown from "./ImageDropdown";
import PhotoshopIcon from "../../../icons/Photoshop";
import LogoIcon from "../../../icons/Logo";
import BillButton from "../../shared/button/BillButton";
import { useAuthContext } from "../../../hooks/useContext";
import TextInput from "../../shared/form/TextInput";
import TextArea from "../../shared/form/Textarea";
import Checkbox from "../../shared/form/Checkbox";
import PrimaryButton from "../../shared/button/PrimaryButton";
import Link from "../../shared/link";

const CommunityDetailsPage: FC = () => {
  const router = useRouter();
  const { authUser } = useAuthContext();
  const [liked, setLiked] = useState(true);

  const toggleLiked = () => setLiked((prev) => !prev);

  return (
    <div className="pb-20">
      <Header />
      <div className="container flex items-start gap-32  mt-11 px-4">
        <button
          className="bg-black-chip ring-1 ring-border p-2 rounded-xl"
          onClick={router.back}
        >
          <BiChevronLeft size={24} />
        </button>
        <div>
          <Link
            href={router.asPath + "/profile"}
            className="flex gap-5 items-center w-max"
          >
            <div className="rounded-full h-9 aspect-square bg-yellow grid place-items-center">
              <p>A</p>
            </div>
            <p>Alok Singh</p>
          </Link>
          <div className="flex gap-16 mt-8">
            <div className="relative">
              <Image
                src={`https://picsum.photos/id/979/554/760`}
                width={554}
                height={760}
                alt=""
                className="object-cover"
                priority
              />
              <button
                onClick={toggleLiked}
                className="absolute top-6 right-6 bg-black-chip ring-1 ring-border p-2.5 rounded-xl"
              >
                {liked ? (
                  <HiHeart size={18} className="text-pink" />
                ) : (
                  <HiOutlineHeart size={18} />
                )}
              </button>
            </div>
            <div className="space-y-7">
              <ImageDropdown />
              <div className="space-y-2.5">
                <p>Made Using</p>
                <div className="flex gap-2.5 items-center text-sm">
                  <LogoIcon
                    height={34}
                    width=""
                    className="ring-1 ring-primary p-2 rounded-lg"
                  />
                  <PhotoshopIcon className="w-10 aspect-square" />
                  {authUser && (
                    <BillButton>
                      <HiOutlinePlus size={18} />
                    </BillButton>
                  )}
                </div>
              </div>
              {authUser ? (
                <TextInput
                  label="Name"
                  defaultValue="The edge of the macrocosm"
                />
              ) : (
                <div className="space-y-2.5">
                  <p>Name</p>
                  <p className="text-xl">The edge of the macrocosm</p>
                </div>
              )}
              {authUser ? (
                <TextArea
                  label="Story (Optional)"
                  defaultValue="In tortor arcu facilisi tortor. Mus dui eleifend sagittis
                massa sit enim erat in. Porta at sit pharetra viverra ut
                augue quis. Volutpat aliquet."
                  className="resize-none h-28"
                />
              ) : (
                <div className="space-y-2.5">
                  <p>Story</p>
                  <p className="max-w-[480px] text-xl">
                    In tortor arcu facilisi tortor. Mus dui eleifend sagittis
                    massa sit enim erat in. Porta at sit pharetra viverra ut
                    augue quis. Volutpat aliquet.
                  </p>
                </div>
              )}
              <div className="space-y-2.5">
                <p>Inspired By</p>
                <div className="flex gap-2.5 text-sm">
                  <div className="bg-black px-5 py-2.5 rounded-full font-medium ">
                    Anime
                  </div>
                  <div className="bg-black px-5 py-2.5 rounded-full font-medium ">
                    Picasso
                  </div>
                  {authUser && (
                    <BillButton>
                      <HiOutlinePlus size={18} />
                    </BillButton>
                  )}
                </div>
              </div>
              <div className="space-y-2.5">
                <p>Prompt</p>
                <p className="max-w-[480px] text-xl">
                  A young girl stands at the edge of the macrocosm,
                  brightly-colored universe, her anime-inspired aesthetic
                  glowing in the surreal and vibrant art style
                </p>
              </div>
              {authUser && (
                <>
                  <div className="">
                    <p>Settings</p>
                    <label className="mt-7 flex gap-3.5 text-sm items-start">
                      <Checkbox className="" />
                      <span className="flex flex-col -mt-1.5">
                        Hide prompts from this displayed work
                        <p className="text-grey-700">
                          Prompts will be hidden on work you share
                        </p>
                      </span>
                    </label>
                  </div>
                  <PrimaryButton variant="primary">Save</PrimaryButton>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommunityDetailsPage;
