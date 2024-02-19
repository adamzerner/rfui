import type { ComponentChild } from "preact";

export const NavbarLeft = (
  { children }: { children: ComponentChild },
) => {
  return (
    <ul class="flex flex-col items-stretch sm:flex-row sm:gap-6">{children}</ul>
  );
};
