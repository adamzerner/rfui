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
    <Flex class="mt-9 max-w-full gap-11">
      <div class="hidden lg:flex">
        <OnThisPage sectionTitles={sectionTitles} />
      </div>
      <main class="max-w-full flex-1">
        {children}
      </main>
    </Flex>
  );
};
