import type { ComponentChild } from "preact";
import { Link } from "../../atoms/link.tsx";

export const NavbarDropdownItem = (
  { href, children }: { href: string; children: ComponentChild },
) => {
  return (
    <>
      {/* Mobile */}
      <li class="block sm:hidden">
        <Link
          href={href}
          class="block break-all py-4"
        >
          {children}
        </Link>
      </li>

      {/* Desktop */}
      <li class="hidden sm:block">
        <Link
          href={href}
          underline="none"
          class="block break-all px-4 py-2 hover:bg-neutral-100/30"
        >
          {children}
        </Link>
      </li>
    </>
  );
};
