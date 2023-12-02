import { Stack } from "@/components/helpers/stack.tsx";
import { ComponentChild } from "preact";

export const Examples = (
  { title, children }: { title: string; children: ComponentChild },
) => {
  return (
    <div>
      <div class="mb-5 text-4xl">{title}</div>
      <Stack class="gap-7 items-start">{children}</Stack>
    </div>
  );
};
