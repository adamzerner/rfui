import type { ComponentChild } from "preact";
import { Link } from "../../atoms/link.tsx";
import { Container } from "../../helpers/container.tsx";

export const NavbarDropdownItem = (
  { href, children }: { href: string; children: ComponentChild },
) => {
  return (
    <>
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

      {/* Mobile */}
      <li class="block border-b border-b-neutral-200 text-neutral-700 max-sm:hover:bg-neutral-100/50 sm:hidden sm:border-b-neutral-50 sm:hover:border-b-neutral-500">
        <Container size="xl" class="block sm:hidden">
          <Link
            href={href}
            underline="none"
            class="block break-all py-6"
          >
            {children}
          </Link>
        </Container>
      </li>
    </>
  );
};
