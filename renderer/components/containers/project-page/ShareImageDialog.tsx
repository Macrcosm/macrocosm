import { FC } from "react";
import { BsTwitter } from "react-icons/bs";

import illustration from "../../../public/images/image1.jpg";
import Dialog from "../../shared/dialog/Dialog";
import ImageFill from "../../shared/image/ImageFill";
import TextArea from "../../shared/form/Textarea";
import Dropdown from "../../shared/dropdown/Dropdown";
import Checkbox from "../../shared/form/Checkbox";
import ContinuemIcon from "../../../icons/Continuem";
import PrimaryButton from "../../shared/button/PrimaryButton";

interface ShareImageDialogProps {
  open: boolean;
  close: () => void;
}

const ShareImageDialog: FC<ShareImageDialogProps> = (props) => {
  const { close, open } = props;
  return (
    <Dialog open={open} onClose={close}>
      <div className="space-y-6">
        <h2 className="text-4xl font-medium">Share</h2>
        <ImageFill src={illustration} width={118} height={118} alt="" />
        <TextArea
          placeholder="E.g. Check out what I created"
          label="Post Journal"
          className="w-[334px] h-32 resize-none"
        />
        <Dropdown selectedOption={{ key: "0", value: "Feeling Hopeful" }} setSelectedOption={() => {}} options={[{ key: "0", value: "Feeling Hopeful" }]} />
        <Dropdown selectedOption={{ key: "0", value: "Macrocosm" }} setSelectedOption={() => {}} options={[{ key: "0", value: "Macrocosm" }]} />

        <label className="flex items-center gap-5">
          <Checkbox />
          <span className="flex gap-2.5 items-center">
            <BsTwitter color="#1DA1F2" size={24} /> Twitter
          </span>
        </label>

        <label className="flex items-center gap-5">
          <Checkbox defaultChecked />
          <span className="flex gap-2.5 items-center">
            <ContinuemIcon /> Continuem
          </span>
        </label>

        <PrimaryButton className="text-sm" variant="primary">
          Share
        </PrimaryButton>
      </div>
    </Dialog>
  );
};

export default ShareImageDialog;
