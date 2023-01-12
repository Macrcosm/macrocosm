import { FC } from "react";
import { useRouter } from "next/router";

import AccountLayout from "../../shared/layout/AccountLayout";
import SearchBar from "../shared/SearchBar";
import Link from "../../shared/link";
import ImageFill from "../../shared/image/ImageFill";

const sort_options = ["Recent", "Popular", "All"];
const art_images = [
  {
    src: "https://picsum.photos/id/340/258/372",
    width: 258,
    height: 146,
  },
  {
    src: "https://picsum.photos/id/341/258/372",
    width: 258,
    height: 372,
  },
  {
    src: "https://picsum.photos/id/342/258/372",
    width: 258,
    height: 258,
  },
  {
    src: "https://picsum.photos/id/343/258/372",
    width: 258,
    height: 258,
  },
  {
    src: "https://picsum.photos/id/344/258/372",
    width: 258,
    height: 372,
  },
  {
    src: "https://picsum.photos/id/345/258/372",
    width: 258,
    height: 372,
  },
  {
    src: "https://picsum.photos/id/354/258/372",
    width: 258,
    height: 372,
  },
  {
    src: "https://picsum.photos/id/355/258/372",
    width: 258,
    height: 372,
  },
  {
    src: "https://picsum.photos/id/348/258/372",
    width: 258,
    height: 372,
  },
  {
    src: "https://picsum.photos/id/349/258/372",
    width: 258,
    height: 372,
  },
];

const AccountArtPage: FC = () => {
  const router = useRouter();

  return (
    <AccountLayout>
      <div>
        <SearchBar />
        <div className="flex gap-5 mt-8 mb-5">
          {sort_options.map((option) => {
            const isActive = router.query.sort === option.toLocaleLowerCase();
            return (
              <Link
                href={{
                  query: {
                    sort: option.toLocaleLowerCase(),
                  },
                }}
                key={option}
                className={`text-lg ${isActive && "underline"}`}
              >
                {option}
              </Link>
            );
          })}
        </div>
        <div className="waterfall">
          {art_images.map((image) => (
            <ImageFill
              key={image.src}
              {...image}
              alt=""
              className="object-cover"
            />
          ))}
        </div>
      </div>
    </AccountLayout>
  );
};

export default AccountArtPage;
