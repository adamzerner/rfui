import type { ComponentChild } from "preact";

export const VerticalNavbarItem = (
  { href, isActive, children }: {
    href: string;
    isActive: boolean;
    children: ComponentChild;
  },
) => {
  return (
    <div class="">
      {children}
    </div>
  );
};
