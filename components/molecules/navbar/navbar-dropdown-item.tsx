import type { ComponentChild } from "preact";
import { Link } from "../../atoms/link.tsx";
import { ChevronRightIcon } from "../../icons/chevron-right.tsx";

export const NavbarDropdownItem = (
  { href, children }: { href: string; children: ComponentChild },
) => {
  return (
    <>
      {/* Mobile */}
      <li class="block sm:hidden">
        <Link
          href={href}
          underline="none"
          class="flex items-center gap-3 break-all py-4 italic"
        >
          {children}{" "}
          <ChevronRightIcon class="relative top-px inline !h-4 !w-4" />
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
