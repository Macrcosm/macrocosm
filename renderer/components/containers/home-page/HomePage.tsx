import Header from "../../shared/header/Header";
import PrimaryButton from "../../shared/button/PrimaryButton";
import SearchBar from "../shared/SearchBar";
import ProjectCard from "./ProjectCard";
import SidePanel from "./SidePanel";
import { ipcRenderer } from "electron";
import {useEffect, useState} from "react";
import {setupMainEventHandlers} from "../../../services/electron.service";

export default function HomePage() {
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    getProjects();
    setupMainEventHandlers('get-projects', (evt, data) => {
      setProjects(data.projects);
    });
  }, []);
  useEffect(() => {
    console.log(projects);
  }, [projects]);
  const getProjects = () => {
    ipcRenderer.send("get-projects", {});
  }
  const createProject = () => {
      ipcRenderer.send("create-project", {});
  }
  return (
    <div className="h-screen flex flex-col">
      <Header />
      <div className="flex border-t border-border ">
        <SidePanel />
        <div className="px-7 py-10 flex-1 flex flex-col gap-7 overflow-y-auto h-[calc(100vh-78px)] relative">
          <div className="flex justify-between items-center gap-5">
            <SearchBar />
            <PrimaryButton onClick={createProject} variant="primary" className="text-sm ">
              Create New
            </PrimaryButton>
          </div>
          <div className="flex gap-x-5 gap-y-7 flex-wrap">
            {projects.map((project, i) => (
              <ProjectCard {...project} key={i} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
