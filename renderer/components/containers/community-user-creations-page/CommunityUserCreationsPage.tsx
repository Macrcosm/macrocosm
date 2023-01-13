import { useRouter } from "next/router";
import CommunityAccountLayout from "../../shared/layout/CommunityAccountLayout";
import Link from "../../shared/link";
import SearchBar from "../shared/SearchBar";
import ImageFill from "../../shared/image/ImageFill";

const sort_options = ["Popular", "Recent"];
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
];

export default function CommunityUserCreationPage() {
  const router = useRouter();

  return (
    <CommunityAccountLayout>
      <SearchBar />
      <div className="flex gap-5 mt-8 mb-5">
        {sort_options.map((option) => {
          const isActive = router.query.sort === option.toLocaleLowerCase();
          return (
            <Link
              href={{
                query: {
                  sort: option.toLocaleLowerCase(),
                  slug: router.query.slug,
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
    </CommunityAccountLayout>
  );
}
