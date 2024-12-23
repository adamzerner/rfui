import type { ComponentChild } from "preact";
import { Link } from "../../atoms/link.tsx";
import { Container } from "../../helpers/container.tsx";
import { ChevronRightIcon } from "../../icons/chevron-right.tsx";

export const NavbarDropdownItem = (
  { href, children }: { href: string; children: ComponentChild },
) => {
  return (
    <>
      {/* Mobile */}
      <li class="block border-b border-b-neutral-200 text-neutral-700 max-sm:hover:bg-neutral-100/50 sm:hidden sm:border-b-neutral-50 sm:hover:border-b-neutral-500">
        <Container size="xl" class="block sm:hidden">
          <Link
            href={href}
            underline="none"
            class="flex items-center justify-between gap-4 py-6"
          >
            <div class="grow break-all">{children}</div>
            <ChevronRightIcon class="relative top-px min-w-fit" />
          </Link>
        </Container>
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
