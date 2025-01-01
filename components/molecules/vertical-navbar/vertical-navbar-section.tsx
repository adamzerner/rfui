import type { ComponentChild } from "preact";

export const VerticalNavbarSection = (
  { heading, children }: { heading?: string; children: ComponentChild },
) => {
  return (
    <section class="mb-8">
      {heading && (
        <h3 class="mx-3 mt-4 text-xs font-bold tracking-wide text-neutral-700">
          {heading}
        </h3>
      )}
      {children}
    </section>
  );
};
