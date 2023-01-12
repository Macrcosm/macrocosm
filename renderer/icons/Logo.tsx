import { SVGProps } from "react";

export default function LogoIcon(props: SVGProps<SVGSVGElement>) {
  const { width, height, ...rest } = props;
  return (
    <svg
      width={width || "87"}
      height={height || "32"}
      viewBox="0 0 87 32"
      {...rest}
    >
      <circle cx="16" cy="16" r="16" fill="#1855F4" />
      <circle cx="75.5" cy="15.5" r="11.5" fill="#DB16FB" />
      <ellipse cx="48" cy="15.5" rx="8" ry="8.5" fill="#FBBC04" />
    </svg>
  );
}
