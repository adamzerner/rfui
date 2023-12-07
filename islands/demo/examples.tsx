import { Stack } from "@/components/helpers/stack.tsx";
import { ComponentChild } from "preact";

type ExamplesType = { title: string; children: ComponentChild };

export const Examples = (
  { title, children }: ExamplesType,
) => {
  return (
    <div>
      <div class="mb-5 text-4xl">{title}</div>
      <Stack class="gap-7 items-start">{children}</Stack>
    </div>
  );
};
