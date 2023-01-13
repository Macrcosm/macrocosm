import { FC } from "react";
import { HiOutlinePlus } from "react-icons/hi";
import { TbFolder } from "react-icons/tb";

import Link from "../../shared/link";
import { useRouter } from "next/router";

const folders = ["All", "Main", "Archive"];

const SidePanel: FC = () => {
  const router = useRouter();

  return (
    <div className="w-[274px] bg-black-chip/60 h-full divide-y divide-border">
      <p className="m-5 font-medium text-sm">Folders</p>
      <div className="p-5 space-y-5">
        {folders.map((folder) => {
          const active = router.query.folder === folder.toLocaleLowerCase();
          return (
            <Link
              href={{
                query: {
                  folder: folder.toLocaleLowerCase(),
                },
              }}
              className={`flex gap-1.5 items-center text-xs ${
                !active && "text-grey-600"
              }`}
              key={folder}
            >
              <TbFolder size={20} />
              {folder}
            </Link>
          );
        })}
        <button className="flex gap-2.5 items-center text-xs hover:opacity-70">
          <HiOutlinePlus size={14} /> Add New Folder
        </button>
      </div>
    </div>
  );
};

export default SidePanel;
