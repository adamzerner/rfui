import type { ComponentChild } from "preact";
import { Link } from "../../atoms/link.tsx";
import { Container } from "../../helpers/container.tsx";
import { Flex } from "../../helpers/flex.tsx";
import { ChevronRightIcon } from "../../icons/chevron-right.tsx";

export const NavbarDropdownItem = (
  { href, children }: { href: string; children: ComponentChild },
) => {
  return (
    <>
      {/* Mobile */}
      <Container
        size="xl"
        class="block hover:bg-neutral-100/50 sm:hidden"
      >
        <Link href={href} underline="none">
          <Flex class="items-center justify-between py-6">
            <div>{children}</div>
            <ChevronRightIcon class="relative top-px" />
          </Flex>
        </Link>
      </Container>

      {/* Desktop */}
      <Link
        href={href}
        underline="none"
        class="hidden break-all px-4 py-2 hover:bg-neutral-100/30 sm:block"
      >
        {children}
      </Link>
    </>
  );
};
