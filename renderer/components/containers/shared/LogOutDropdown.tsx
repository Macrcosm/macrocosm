import { Menu } from "@headlessui/react";

import Link from "../../shared/link";
import { useAuthContext } from "../../../hooks/useContext";

const LogOutDropdown = () => {
  const { logoutUser } = useAuthContext();
  return (
    <Menu as="div" className="relative">
      <Menu.Button>
        <div className="rounded-full h-9 aspect-square bg-yellow grid place-items-center">
          <p>A</p>
        </div>
      </Menu.Button>
      <Menu.Items
        className="absolute right-0 mt-2 z-10 bg-black-chip ring-1 ring-border rounded-xl text-sm 
        child:text-left py-2 child:py-2 child:px-5 child:block 
      "
      >
        <Menu.Item
          as={Link}
          href="/account"
          className="text-left ui-active:bg-black/20"
        >
          Account
        </Menu.Item>
        <Menu.Item
          as="button"
          className="ui-active:bg-black/20 text-left w-full"
          onClick={logoutUser}
        >
          Log Out
        </Menu.Item>
      </Menu.Items>
    </Menu>
  );
};

export default LogOutDropdown;
