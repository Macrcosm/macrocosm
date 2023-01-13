import { FC } from "react";
import Link from "../../shared/link";
import { useRouter } from "next/router";
import Checkbox from "../../shared/form/Checkbox";

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
  {
    label: "Liked",
    query: "liked",
  },
  {
    label: "Following",
    query: "following",
  },
  {
    label: "Artist",
    query: "artist",
  },
];

const filters = [
  "Macrocosm",
  "Photoshop",
  "Illustrator",
  "Krita",
  "Sketchbook",
  "Pencil",
  "Pen",
];

const SidePanel: FC = () => {
  const router = useRouter();

  return (
    <div className="w-[274px] bg-black-chip/60 divide-y divide-border accent-pink">
      <div className="p-5 space-y-3.5 text-xs">
        {links.map(({ label, query }) => {
          const isActive = router.query?.sort === query;
          return (
            <Link
              href={{
                query: {
                  sort: query,
                },
              }}
              key={label}
              className={`block font-medium  ${!isActive && "text-grey-700"}`}
            >
              {label}
            </Link>
          );
        })}
      </div>
      <div className="space-y-4 p-5">
        {filters.map((filter, index) => (
          <label className="block text-xs" key={filter}>
            <Checkbox
              defaultChecked={index < 2}
              type="checkbox"
              className="mr-2"
            />
            {filter}
          </label>
        ))}
      </div>
    </div>
  );
};

export default SidePanel;
