import { FC, PropsWithChildren } from "react";
import { BiChevronLeft } from "react-icons/bi";
import { useRouter } from "next/router";
import { FaFacebookF } from "react-icons/fa";
import { BsGlobe2, BsTwitter } from "react-icons/bs";

import Header from "../header/Header";
import ContinuemIcon from "../../../icons/Continuem";
import Avatar from "../avatar/Avatar";
import PixivIcon from "../../../icons/Pixiv";
import Link from "../link";
import BackButton from "../button/BackButton";

const links = [
  {
    label: "Creations",
    href: "/community/[slug]/creations",
    query: {
      sort: "popular",
    },
  },
  {
    label: "About",
    href: "/community/[slug]/about",
  },
];

const CommunityAccountLayout: FC<PropsWithChildren> = ({ children }) => {
  const router = useRouter();

  return (
    <div>
      <Header />
      <div className="container px-4 mt-12">
        <div className="flex items-start gap-20">
          <BackButton />
          <div className="flex-1">
            <div className="flex gap-10 items-center">
              <Avatar
                src="https://picsum.photos/id/959/128"
                size="l"
                name="Alok"
              />
              <div>
                <p className="text-3xl ">Alok Singh</p>
                <p>@alekoi</p>
                <div className="flex gap-3.5 items-center mt-5">
                  <ContinuemIcon />
                  <FaFacebookF size={24} />
                  <BsTwitter size={24} />
                  <PixivIcon />
                  <BsGlobe2 size={24} />
                </div>
              </div>
            </div>
            <div className="flex gap-5 mt-10 w-full">
              {links.map((link, i) => {
                const active = router.pathname === link.href;
                return (
                  <Link
                    key={i}
                    href={{
                      pathname: link.href,
                      query: {
                        ...link.query,
                        slug: "alekoi",
                      },
                    }}
                    className={`text-lg ${active && "underline"} `}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </div>
            <div className="mt-7">{children}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommunityAccountLayout;
