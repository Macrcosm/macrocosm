import { BiSearch } from "react-icons/bi";
import { FC, PropsWithChildren } from "react";
import { useRouter } from "next/router";

import Link from "../../shared/link";
import Header from "../header/Header";

const links = [
  {
    label: "Trending",
    query: "trending",
  },
  {
    label: "Latest",
    query: "latest",
  },
  {
    label: "Popular",
    query: "popular",
  },
];

const CommunityLayout: FC<PropsWithChildren> = ({ children }) => {
  const router = useRouter();

  return (
    <div>
      <Header />
      <div className="mt-8 ml-[16%]">
        <div className="mt-8 mb-5 flex gap-5">
          {links.map((link) => {
            const isActive = router.query?.sort === link.query;
            return (
              <Link
                key={link.label}
                href={{
                  query: {
                    sort: link.query,
                  },
                  pathname: "/community",
                }}
                className={`text-lg ${isActive ? "underline" : ""}`}
              >
                {link.label}
              </Link>
            );
          })}
        </div>
        {children}
      </div>
    </div>
  );
};

export default CommunityLayout;
