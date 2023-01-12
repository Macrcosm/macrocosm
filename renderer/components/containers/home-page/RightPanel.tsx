import { FC } from "react";
import { TfiReload } from "react-icons/tfi";
import { BiCopy } from "react-icons/bi";
import { BsImageFill } from "react-icons/bs";

import AdvancedOptions, { AdvancedOptionsProps } from "./advanced-options";
import { modalOptions } from "../../../data/mock";
import PrimaryButton from "../../shared/button/PrimaryButton";
import MidJourneyDiscordPopover from "./MidJourneyDiscordPopover";
import { useAiModalsContext } from "../../../hooks/useContext";

interface RightPanelProps {
  mainIdea: string;
  negatives: string;
}

const RightPanel: FC<RightPanelProps> = (props) => {
  const { selectedModal } = useAiModalsContext();
  return (
    <div className="bg-black-chip/60 w-[328px] divide-y divide-grey-800 flex flex-col h-[calc(100vh-78px)] overflow-y-auto text-sm">
      <div className="p-5">
        <p className="text-base text-grey-600 cursor-edit">
          {
              props.mainIdea ? `${props.mainIdea} ${props.negatives && `[${props.negatives}]`}` : 'Please enter main idea in left panel for prompt.'
          }
        </p>
        <div className="flex gap-8 mt-2.5">
          <button className="bg-primary flex gap-2 items-center px-5 py-3 rounded-xl">
            Make Descriptive
            <TfiReload size={18} />
          </button>
          <button className="flex gap-1.5 items-center" onClick={() => navigator.clipboard.writeText(props.mainIdea)}>
            Copy
            <BiCopy size={18} />
          </button>
        </div>
      </div>
      <div className="mb-5 p-5 flex-1">
        <AdvancedOptions />
      </div>
      {selectedModal.key === modalOptions[1].key ? (
        <MidJourneyDiscordPopover />
      ) : (
        <PrimaryButton
          variant="secondary"
          className="sticky flex gap-2 self-start bottom-5 left-5"
        >
          Generate
          <BsImageFill size={18} className="rounded-md" />
        </PrimaryButton>
      )}
    </div>
  );
};

export default RightPanel;
