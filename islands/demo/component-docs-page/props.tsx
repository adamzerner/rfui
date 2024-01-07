import { H1 } from "@/islands/atoms/h1.tsx";
import { Link } from "@/islands/atoms/link.tsx";
import { ComponentChild } from "preact";

export const Props = ({ children }: { children: ComponentChild }) => {
  return (
    <section class="mt-10">
      <H1 id="props">
        <Link href="#props" underline="hover">Props</Link>
      </H1>
      <div class="grid grid-cols-1 sm:grid-cols-3 gap-y-5 sm:gap-y-10 justify-items-start place-items-start">
        {children}
      </div>
    </section>
  );
};
