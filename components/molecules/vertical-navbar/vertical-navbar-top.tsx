import type { ComponentChild } from "preact";

export const VerticalNavbarTop = (
  { children }: { children: ComponentChild },
) => {
  return (
    <section class="">
      {children}
    </section>
  );
};