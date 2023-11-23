import { ComponentChild } from "preact";

export const Examples = ({ children }: { children: ComponentChild }) => {
  return <div class="flex flex-col gap-8 items-start">{children}</div>;
};
