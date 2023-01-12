import { communityImages } from "../../../data/mock";
import Header from "../../shared/header/Header";
import SidePanel from "./SidePanel";
import ImageCard from "./ImageCard";
import SearchBar from "../shared/SearchBar";

const CommunityPage = () => {
  return (
    <div className="h-screen overflow-hidden">
      <Header />
      <div className="flex border-t border-border">
        <SidePanel />
        <div className="p-7 w-full space-y-7 h-[calc(100vh-76px)] overflow-y-auto">
          <SearchBar />
          <div className="waterfall pb-10 ">
            {communityImages.map((image, index) => (
              <ImageCard image={image} key={index} index={index} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommunityPage;
