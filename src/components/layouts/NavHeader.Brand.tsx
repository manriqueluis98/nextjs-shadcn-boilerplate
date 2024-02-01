import Link from "next/link";
import React from "react";

type Props = {} & React.ComponentProps<typeof Link>;

export default function NavHeaderBrand({ href, ...props }: Props) {
  return (
    <Link
      href={href}
      {...props}
      className="flex items-center justify-center"
      aria-label="Home Link"
    >
      <img
        src="/assets/logos/company-logo.webp"
        alt="Company Logo"
        className="h-[40px] w-[40px] rounded-full"
      ></img>
      <span className="ml-2 text-lg font-semibold">Amadeus Studio</span>
    </Link>
  );
}
