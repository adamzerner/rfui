import { Flex } from "@/components/helpers/flex.tsx";
import { ComponentChild } from "preact";
import { OnThisPage } from "./on-this-page.tsx";

export type ComponentDocsPageType = {
  sectionTitles: string[];
  children: ComponentChild;
};

export const ComponentDocsPage = (
  { sectionTitles, children }: ComponentDocsPageType,
) => {
  return (
    <Flex class="mt-9 gap-11 max-w-full">
      <div class="hidden lg:flex">
        <OnThisPage sectionTitles={sectionTitles} />
      </div>
      <main class="flex-1 max-w-full">
        {children}
      </main>
    </Flex>
  );
};
