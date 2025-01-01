import type { ComponentChild } from "preact";

export const VerticalNavbarSection = (
  { children }: { children: ComponentChild },
) => {
  return (
    <section class="mb-8">
      {children}
    </section>
  );
};
