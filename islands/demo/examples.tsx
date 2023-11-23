import { ComponentChild } from "preact";

export const Examples = (
  { title, children }: { title: string; children: ComponentChild },
) => {
  return (
    <div>
      <div class="mb-5 text-4xl">{title}</div>
      <div class="flex flex-col gap-7 items-start">{children}</div>
    </div>
  );
};
