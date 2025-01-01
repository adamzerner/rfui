import type { ComponentChild } from "preact";
import { Link } from "../../atoms/link.tsx";

export const VerticalNavbarItem = (
  { href, isActive, children }: {
    href: string;
    isActive: boolean;
    children: ComponentChild;
  },
) => {
  return (
    <Link
      href={href}
      class="my-2 block rounded px-3 py-2 hover:bg-neutral-100"
      underline="none"
    >
      {children}
    </Link>
  );
};
