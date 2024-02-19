import type { ComponentChild } from "preact";

export const NavbarRight = (
  { children }: { children: ComponentChild },
) => {
  return (
    <ul class="flex flex-col items-stretch sm:flex-row sm:gap-6">
      {children}
    </ul>
  );
};
