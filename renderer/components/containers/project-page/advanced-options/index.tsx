import { FC } from "react";
import DefaultAdvancedOptions from "./DefaultAdvancedOptions";
import MidJourneyAdvancedOptions from "./MidJourneyAdvancedOptions";
import { useAiModalsContext } from "../../../../hooks/useContext";

export interface AdvancedOptionsProps {}

const AdvancedOptions: FC<AdvancedOptionsProps> = (props) => {
  // const { selectedModal } = props;
  const { selectedModal } = useAiModalsContext();

  switch (selectedModal.key) {
    case "Midjourney":
      return <MidJourneyAdvancedOptions />;
    default:
      return <DefaultAdvancedOptions />;
  }
};

export default AdvancedOptions;
