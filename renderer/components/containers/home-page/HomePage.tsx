import Header from "../../shared/header/Header";
import PrimaryButton from "../../shared/button/PrimaryButton";
import SearchBar from "../shared/SearchBar";
import ProjectCard from "./ProjectCard";
import SidePanel from "./SidePanel";

const projects = [
  {
    src: "https://picsum.photos/id/345/300/182",
    name: "Project file",
  },
  {
    src: "https://picsum.photos/id/366/300/182",
    name: "Morbi",
  },
  {
    src: "https://picsum.photos/id/367/300/182",
    name: "Vivamus",
  },
  {
    src: "https://picsum.photos/id/368/300/182",
    name: "Nisi",
  },
  {
    src: "https://picsum.photos/id/369/300/182",
    name: "Purus",
  },
  {
    src: "https://picsum.photos/id/370/300/182",
    name: "Random Projuct",
  },
];

export default function HomePage() {
  return (
    <div className="h-screen flex flex-col">
      <Header />
      <div className="flex border-t border-border ">
        <SidePanel />
        <div className="px-7 py-10 flex-1 flex flex-col gap-7 overflow-y-auto h-main relative">
          <div className="flex justify-between items-center gap-5">
            <SearchBar />
            <PrimaryButton variant="primary" className="text-sm ">
              Create New
            </PrimaryButton>
          </div>
          <div className="flex gap-x-5 gap-y-7 flex-wrap">
            {projects.map((project, i) => (
              <ProjectCard {...project} key={i} i={i} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
