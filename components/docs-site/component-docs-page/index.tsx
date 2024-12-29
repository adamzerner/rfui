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
    <Flex class="mt-9 gap-11">
      <div class="hidden flex-shrink-0 lg:block">
        <OnThisPage sectionTitles={sectionTitles} />
      </div>
      <main class="flex-grow overflow-x-hidden">
        {children}
      </main>
    </Flex>
  );
};
