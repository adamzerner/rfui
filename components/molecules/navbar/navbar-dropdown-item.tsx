import type { ComponentChild } from "preact";
import { Link } from "../../atoms/link.tsx";

export const NavbarDropdownItem = (
  { href, children }: { href: string; children: ComponentChild },
) => {
  return (
    <>
      {/* Mobile */}
      {
        /* <li class="block sm:hidden">
        <Container
          size="xl"
          class="hover:bg-neutral-100/50"
        >
          <Link href={href} underline="none">
            <Flex class="items-center justify-between py-6">
              <div>{children}</div>
              <ChevronRightIcon class="relative top-px" />
            </Flex>
          </Link>
        </Container>
      </li> */
      }

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
