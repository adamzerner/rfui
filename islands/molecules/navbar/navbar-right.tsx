import type { ComponentChild } from "preact";

export const NavbarRight = (
  { children }: { children: ComponentChild },
) => {
  return (
    <ul class="flex flex-col sm:flex-row items-stretch sm:gap-6">
      {children}
    </ul>
  );
};
