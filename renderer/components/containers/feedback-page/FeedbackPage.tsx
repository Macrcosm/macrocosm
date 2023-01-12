import { FcGoogle } from "react-icons/fc";

import AccountLayout from "../../shared/layout/AccountLayout";
import DiscordIcon from "../../../icons/Discord";
import TextArea from "../../shared/form/Textarea";

const FeedbackPage = () => {
  return (
    <AccountLayout>
      <div className="w-[500px]">
        <TextArea placeholder="Message" className=" resize-none h-28 " />
      </div>
      <button className="bg-primary rounded-xl px-5 py-3 mt-5">Send</button>
    </AccountLayout>
  );
};

export default FeedbackPage;
