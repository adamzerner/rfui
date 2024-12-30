import { Flex } from "@/components/helpers/flex.tsx";
import { ComponentChild } from "preact";
import { OnThisPage } from "./on-this-page.tsx";

export type ComponentDocsPageType = {
  examplesSectionTitles: string[];
  children: ComponentChild;
};

export const ComponentDocsPage = (
  { examplesSectionTitles, children }: ComponentDocsPageType,
) => {
  return (
    <Flex class="mt-9 gap-10">
      <div class="hidden flex-shrink-0 lg:block">
        <OnThisPage examplesSectionTitles={examplesSectionTitles} />
      </div>
      <main class="flex-grow">
        {children}
      </main>
    </Flex>
  );
};
