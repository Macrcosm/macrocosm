import { FC } from "react";

import TextInput from "../../shared/form/TextInput";
import TextArea from "../../shared/form/Textarea";
import PrimaryButton from "../../shared/button/PrimaryButton";
import UserAccountLayout from "../../shared/layout/UserAccountLayout";

const UserAboutPage: FC = () => {
  return (
    <UserAccountLayout>
      <div className="max-w-[662px] space-y-5 pb-20">
        <TextInput label="Name" defaultValue="Alok Singh" />
        <TextInput label="Username" defaultValue="Alekoi" />
        <TextArea
          placeholder="Eg. I create real art with a soul. Not ai art. "
          label="About Me"
          className="resize-none h-32"
        />
        <TextInput placeholder="Official Facebook Link" label="Facebook" />
        <TextInput placeholder="Official Instagram Id" label="Instagram" />
        <TextInput placeholder="Official Twitter Id" label="Twitter" />
        <TextInput placeholder="Official Pixiv Id" label="Pixiv" />
        <div>
          <p>Continuem</p>
          <PrimaryButton variant="bg" className="mt-2.5 text-sm">
            Connect Account
          </PrimaryButton>
        </div>
        <TextInput placeholder="Website Link" label="Website" />

        <PrimaryButton variant="bg" className="text-sm">
          Verify Account
        </PrimaryButton>
        <PrimaryButton variant="primary" className="text-sm block">
          Save
        </PrimaryButton>
      </div>
    </UserAccountLayout>
  );
};

export default UserAboutPage;
