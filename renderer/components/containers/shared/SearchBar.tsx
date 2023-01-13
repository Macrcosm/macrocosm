import { FC } from "react";
import { BiSearch } from "react-icons/bi";

const SearchBar: FC = () => {
  return (
    <div className="bg-black-chip ring-border ring-1 ring-inset rounded-xl py-4 px-6 flex-1 flex gap-2 items-center max-w-[648px] focus-within:ring-2 focus-within:ring-grey-50 ">
      <BiSearch size={18} />
      <input
        className="bg-transparent w-full outline-none"
        placeholder="Search"
      />
    </div>
  );
};

export default SearchBar;
