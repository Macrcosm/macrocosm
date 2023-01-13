import React from "react";
import LogoIcon from "../../../icons/Logo";
import Link from "../link";

export default function Logo() {
  return (
    <Link
      href={{
        pathname: "/",
        query: {
          folder: "all",
        },
      }}
    >
      <LogoIcon />
    </Link>
  );
}
