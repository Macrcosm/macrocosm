import { FC, useState } from "react";
import { FiPlus, FiSearch } from "react-icons/fi";
import dynamic from "next/dynamic";

import TextArea from "../../../shared/form/Textarea";
import useDiscloser from "../../../../hooks/useDiscloser";
import AddImageDialog from "./add-image-dialog";
import ImageStyleDialog from "./ImageStyleDialog";

const ModalsDropdown = dynamic(() => import("./ModalsDropdown"), {
  ssr: false,
});
const TokenizedInput = dynamic(
  () => import("../../../shared/form/TokenizedInput"),
  {
    ssr: false,
  }
);

export interface BuilderPanelProps {
  mainIdea: string;
  setMainIdea: Function;
  negatives: string;
  setNegatives: Function;
  inTheStyleOf: string[];
  setInTheStyleOf: Function;
}

const BuilderPanel: FC<BuilderPanelProps> = (props) => {
  const [copy, setCopy] = useState(false);
  const { close, isOpen, open } = useDiscloser();
  const imageStyleDiscloser = useDiscloser();
  const [gallery, setGallery] = useState("My Pictures");

  return (
    <>
      <AddImageDialog
        open={isOpen}
        onClose={close}
        onChange={setGallery}
        option={gallery}
      />
      <ImageStyleDialog
        open={imageStyleDiscloser.isOpen}
        onClose={imageStyleDiscloser.close}
        openAddImageDialog={() => {
          imageStyleDiscloser.close();
          open();
        }}
      />
      <div className="divide-y divide-grey-800">
        <div className="flex gap-3.5 p-5 items-center relative">
          <ModalsDropdown />
        </div>
        <form className="flex flex-col gap-5 p-5">
          <TextArea
            className="resize-none h-64"
            placeholder="E.g. edge of the macrocosm"
            label="Main Idea"
            value={props.mainIdea}
            onChange={e => props.setMainIdea(e.target.value)}
          />
          <TextArea
            className="resize-none h-28"
            placeholder="E.g. car, house, dog (Separate elements by comma)"
            label="Do Not Include"
            value={props.negatives}
            onChange={e => props.setNegatives(e.target.value)}
          />

          <button className="text-grey-700 text-left" type="reset">
            Clear All
          </button>
        </form>
        <div className="flex flex-col gap-3.5 p-5">
          <button className="flex gap-3.5 items-center" onClick={open}>
            <FiPlus size={12} />
            Add Image
          </button>
          <div className="flex gap-3.5 items-center">
            <div className="flex gap-3.5 items-center flex-1 ">
              <button>
                <FiSearch size={12} />
              </button>
              <div className="flex-1 ">
                <input
                  placeholder="Search"
                  className="bg-transparent text-grey-300 w-full "
                />
              </div>
            </div>
            {/*<button onClick={() => setCopy(!copy)} className="">*/}
            {/*  {copy ? "C" : "M"}*/}
            {/*</button>*/}
          </div>
        </div>
        <div className="flex flex-col gap-3.5 p-5">
          <button
            className="flex gap-3.5 items-center"
            onClick={imageStyleDiscloser.open}
          >
            <FiPlus size={12} />
            In the style of
          </button>
          <TokenizedInput />
        </div>
      </div>
    </>
  );
};

export default BuilderPanel;
