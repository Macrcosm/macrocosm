import { FC, PropsWithChildren } from "react";
import { useRouter } from "next/router";

import Logo from "../logo";
import Link from "../link";
import LogOutDropdown from "../../containers/shared/LogOutDropdown";
import { useAuthContext } from "../../../hooks/useContext";

const Header: FC<PropsWithChildren & { transparent?: boolean }> = (props) => {
  const { children, transparent = false } = props;
  const router = useRouter();
  const { authUser } = useAuthContext();
  return (
    <div
      className={`p-5 flex justify-between items-center ${
        !transparent && "bg-black-chip/60"
      }`}
    >
      <Logo />
      {children}
      <div className="flex gap-5 items-center">
        {authUser ? (
          <>
            <Link
              href="/community?sort=trending"
              className={
                router.pathname.includes("/community") ? "text-pink" : ""
              }
            >
              Community
            </Link>
            <Link
              href="/account/feedback"
              className={
                router.pathname === "/account/feedback" ? "text-pink" : ""
              }
            >
              Give Feedback
            </Link>
            <LogOutDropdown />
          </>
        ) : (
          <>
            <Link
              href="/pricing"
              className={router.pathname.includes("pricing") ? "text-pink" : ""}
            >
              Pricing
            </Link>
            <Link href="/login">Sign In</Link>
          </>
        )}
      </div>
    </div>
  );
};

export default Header;
