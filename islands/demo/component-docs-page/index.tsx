import { Header } from "@/islands/demo/component-docs-page/header.tsx";
import { OnThisPage } from "@/islands/demo/component-docs-page/on-this-page.tsx";
import { Props } from "@/islands/demo/component-docs-page/props.tsx";
import { Sections } from "@/islands/demo/component-docs-page/sections.tsx";
import { Flex } from "@/islands/helpers/flex.tsx";
import { Stack } from "@/islands/helpers/stack.tsx";
import { LeftNav } from "@/routes/index.tsx";
import { JSX } from "preact";

export type ComponentDocsPageType = {
  componentName: string;
  notes?: string | JSX.Element;
  sourceCodeUrl: string;
  sections: {
    title: string;
    description?: string | JSX.Element;
    example: () => JSX.Element;
    exampleCode: () => JSX.Element;
  }[];
  props: {
    name: string;
    required: boolean;
    type: string;
    default: string | null;
    notes: JSX.Element | string | null;
  }[];
};

export const ComponentDocsPage = (
  { componentName, notes, sourceCodeUrl, sections, props }:
    ComponentDocsPageType,
) => {
  const basicExample = sections.find((s) => s.title === "Basic")?.example;

  if (!basicExample) {
    return null;
  }

  return (
    <Flex class="mt-9 gap-11 max-w-full">
      <Stack class="gap-8 hidden lg:flex">
        <OnThisPage sectionTitles={sections.map((s) => s.title)} />
        <LeftNav />
      </Stack>
      <main class="flex-1 max-w-full">
        <Header
          componentName={componentName}
          notes={notes}
          sourceCodeUrl={sourceCodeUrl}
          example={basicExample}
        />
        <Sections sections={sections} />
        <Props props={props} />
      </main>
    </Flex>
  );
};
