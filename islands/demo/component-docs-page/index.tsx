import { OnThisPage } from "@/islands/demo/component-docs-page/on-this-page.tsx";
import { Flex } from "@/islands/helpers/flex.tsx";
import { Stack } from "@/islands/helpers/stack.tsx";
import { LeftNav } from "@/routes/index.tsx";
import { ComponentChild } from "preact";

export type ComponentDocsPageType = {
  sectionTitles: string[];
  children: ComponentChild;
};

export const ComponentDocsPage = (
  { sectionTitles, children }: ComponentDocsPageType,
) => {
  return (
    <Flex class="mt-9 gap-11 max-w-full">
      <Stack class="gap-8 hidden lg:flex">
        <OnThisPage sectionTitles={sectionTitles} />
        <LeftNav />
      </Stack>
      <main class="flex-1 max-w-full">
        {children}
      </main>
    </Flex>
  );
};
