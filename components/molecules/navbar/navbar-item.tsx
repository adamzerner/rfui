import type { ComponentChild, ComponentProps } from "preact";
import { Link } from "../../atoms/link.tsx";
import { Container } from "../../helpers/container.tsx";
import { ChevronRightIcon } from "../../icons/chevron-right.tsx";

export const NavbarItem = (
  { href, isActive = false, children, ...rest }:
    & { href: string; isActive?: boolean; children: ComponentChild }
    & ComponentProps<"li">,
) => {
  const { class: restClass, ...restWithoutClass } = rest;
  let containerClass =
    "inline-block border-b border-b-neutral-200 max-sm:hover:bg-neutral-100/50 sm:border-b-neutral-50";

  if (isActive) {
    containerClass +=
      " font-bold pointer-events-none sm:font-normal sm:border-b-primary-500 max-sm:bg-neutral-100";
  } else {
    containerClass += " sm:hover:border-b-neutral-500 text-neutral-700";
  }

  if (restClass) {
    containerClass += ` ${restClass}`;
  }

  // For `size="xl"` below it doesn't matter that `"xl"` might not be accurate
  return (
    <li class={containerClass} {...restWithoutClass}>
      {/* Mobile */}
      <Container size="xl" class="block sm:hidden">
        <Link
          href={href}
          underline="none"
          aria-current={isActive ? "page" : undefined}
          class="flex items-center justify-between py-6"
        >
          <div>{children}</div>
          <ChevronRightIcon class="relative top-px" />
        </Link>
      </Container>

      {/* Desktop */}
      <Link
        href={href}
        underline="none"
        class="hidden py-6 sm:inline-block"
        aria-current={isActive ? "page" : undefined}
      >
        {children}
      </Link>
    </li>
  );
};
