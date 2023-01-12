import { BsTwitter } from "react-icons/bs";

import Button from "../../shared/button/Button";
import AccountLayout from "../../shared/layout/AccountLayout";
import DiscordIcon from "../../../icons/Discord";
import ProgressBar from "../shared/ProgressBar";
import ContinuemIcon from "../../../icons/Continuem";
import GoogleIcon from "../../../icons/Google";

const AccountPage = () => {
  return (
    <AccountLayout>
      <div className="mb-7">
        <p className="mb-5">Descriptive Prompt Generation</p>
        <ProgressBar progress={80} />
        <p className="text-grey-700 text-sm mt-2.5">
          80/100 Descriptive Prompt Generation
        </p>
      </div>

      <div className="mb-7">
        <p className="mb-5">Stable Diffusion</p>
        <ProgressBar progress={50} />
        <p className="text-grey-700 text-sm mt-2.5">
          50/100 Credits - 10/25 Image Generations
        </p>
      </div>

      <div className="space-y-5">
        <p>Connected Accounts</p>
        <Button leftIcon={<GoogleIcon />}>aloksinghjsr@gmail.com</Button>
        <Button leftIcon={<DiscordIcon />}>Connect Discord</Button>
        <Button leftIcon={<ContinuemIcon />}>Connect Continuem</Button>
        <Button leftIcon={<BsTwitter color="#1DA1F2" size={24} />}>
          Connect Twitter
        </Button>
      </div>

      <button className="my-7">Delete Account</button>
    </AccountLayout>
  );
};

export default AccountPage;
