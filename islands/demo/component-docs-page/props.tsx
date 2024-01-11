import { H1 } from "@/islands/atoms/h1.tsx";
import { H2 } from "@/islands/atoms/h2.tsx";
import { InlineCode } from "@/islands/atoms/inline-code.tsx";
import { Link } from "@/islands/atoms/link.tsx";
import { ComponentChild } from "preact";

export const Props = (
  { subComponentTitle, children }: {
    subComponentTitle?: string;
    children: ComponentChild;
  },
) => {
  return (
    <section class={subComponentTitle ? "mt-10" : "mt-10"}>
      {subComponentTitle
        ? (
          <H2 class="mb-8">
            <InlineCode>{subComponentTitle}</InlineCode>
          </H2>
        )
        : (
          <H1 id="props">
            <Link href="#props" underline="hover">Props</Link>
          </H1>
        )}

      <div class="grid grid-cols-1 sm:grid-cols-3 gap-y-5 sm:gap-y-10 justify-items-start place-items-start">
        {children}
      </div>
    </section>
  );
};
