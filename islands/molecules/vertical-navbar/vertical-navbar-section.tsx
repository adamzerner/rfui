import type { ComponentChild } from "preact";
import { useState } from "preact/hooks";

export const VerticalNavbarSection = (
  { heading, hasMarginUnderneath = true, children }: {
    heading?: string;
    hasMarginUnderneath?: boolean;
    children: ComponentChild;
  },
) => {
  const [isExpanded, setIsExpanded] = useState(true);
  const toggleIsExpanded = () => {
    setIsExpanded((v) => !v);
  };

  return (
    <section class={isExpanded && hasMarginUnderneath ? "mb-8" : "mb-6"}>
      {heading && (
        <h3
          class="mt-3 cursor-pointer rounded px-3 py-2 font-bold tracking-wide text-neutral-700 max-sm:text-sm sm:py-1 sm:text-xs sm:hover:bg-neutral-100/50"
          onClick={toggleIsExpanded}
        >
          {heading}
          <span class="ml-2 inline-block align-bottom">
            {isExpanded ? "▾" : "▸"}
          </span>
        </h3>
      )}
      {isExpanded && children}
    </section>
  );
};
