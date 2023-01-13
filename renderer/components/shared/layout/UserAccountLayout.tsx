import { FC, PropsWithChildren } from "react";
import { useRouter } from "next/router";
import { FaFacebookF } from "react-icons/fa";
import { BsTwitter, BsGlobe, BsGlobe2 } from "react-icons/bs";

import Link from "../link";
import classnames from "../../../utils/classnames";
import Header from "../header/Header";
import ContinuemIcon from "../../../icons/Continuem";
import PixivIcon from "../../../icons/Pixiv";
import Avatar from "../avatar/Avatar";

const links = [
  {
    label: "Account",
    href: "/account",
  },
  {
    label: "About",
    href: "/account/about",
  },
  {
    label: "My Art",
    href: "/account/my-art",
    query: {
      sort: "recent",
    },
  },
  {
    label: "Subscription",
    href: "/account/subscription",
  },
  {
    label: "Give Feedback",
    href: "/account/feedback",
  },
];

const UserAccountLayout: FC<PropsWithChildren> = ({ children }) => {
  const router = useRouter();

  return (
    <div>
      <Header />
      <div className="container px-5">
        <div className="sticky top-0 bg-bg pt-10 pb-7 mt-10 mb-2 z-10">
          <div className="">
            <div className="flex gap-10 items-center">
              <Avatar size="l" name="Alok" />
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
          </div>
          <div className="flex gap-5 mt-10">
            {links.map((link) => {
              const isActive = router.pathname === link.href;
              return (
                <Link
                  href={{
                    pathname: link.href,
                    query: link?.query,
                  }}
                  className={classnames(
                    isActive ? "underline" : "",
                    "hover:underline text-lg"
                  )}
                  key={link.label}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>
        </div>
        {children}
      </div>
    </div>
  );
};

export default UserAccountLayout;
