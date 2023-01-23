import {FC, useEffect, useState} from "react";
import DefaultAdvancedOptions from "./DefaultAdvancedOptions";
import MidJourneyAdvancedOptions from "./MidJourneyAdvancedOptions";
import {useAiModalsContext} from "../../../../hooks/useContext";
import {default_modal_options, mid_journey_options} from "../../../../data/mock";

export interface AdvancedOptionsProps {
  selectedModal: any;
  advancedData: any,
  setAdvancedData: (value) => void;
}


const AdvancedOptions: FC<AdvancedOptionsProps> = (props) => {
  const { selectedModal, advancedData, setAdvancedData } = props;
  switch (selectedModal?.key) {
    case "Midjourney":
      return <MidJourneyAdvancedOptions advancedData={advancedData} setAdvancedData={setAdvancedData}/>;
    default:
      return <DefaultAdvancedOptions advancedData={advancedData} setAdvancedData={setAdvancedData}/>;
  }
};

export default AdvancedOptions;
