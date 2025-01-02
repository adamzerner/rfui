import type { ComponentChild } from "preact";

export const VerticalNavbarBottom = (
  { children }: { children: ComponentChild },
) => {
  return (
    <section>
      {children}
    </section>
  );
};
