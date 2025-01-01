import { Header } from "@/components/docs-site/component-docs-page/header.tsx";
import { ComponentsList } from "@/components/docs-site/components-list.tsx";
import { Flex } from "@/components/helpers/flex.tsx";
import { JSX } from "preact";
import { Examples } from "./examples.tsx";
import { getImportStatement } from "./get-import-statement.ts";
import { OnThisPage } from "./on-this-page.tsx";
import { PropsTables, PropsTableType } from "./props-tables.tsx";

export type ComponentDocsPageType = {
  componentName: string;
  sourceCodeUrl: string;
  overviewNotes: JSX.Element | string | null;
  examples: ExampleType[];
  propsTables: PropsTableType[];
};

export type ExampleType = {
  title: string;
  description?: JSX.Element | string;
  demo: JSX.Element;
  code: JSX.Element;
};

export const ComponentDocsPage = (
  {
    componentName,
    sourceCodeUrl,
    overviewNotes,
    examples,
    propsTables,
  }: ComponentDocsPageType,
) => {
  const exampleTitles = examples.map((e) => e.title);
  const propsTableTitles = propsTables.map((p) => p.title ?? componentName);
  const importStatement = getImportStatement(componentName, propsTables);

  return (
    <Flex class="mt-9 gap-10">
      <section class="hidden xl:block">
        <ComponentsList />
      </section>
      <main class="flex-grow overflow-x-hidden" id="overview">
        <Header
          componentName={componentName}
          overviewNotes={overviewNotes}
          sourceCodeUrl={sourceCodeUrl}
          demo={examples[0].demo}
          importStatement={importStatement}
        />
        <Examples examples={examples} />
        <PropsTables propsTables={propsTables} />
      </main>
      <section class="hidden flex-shrink-0 lg:block">
        <OnThisPage
          exampleTitles={exampleTitles}
          propsTableTitles={propsTableTitles}
        />
      </section>
    </Flex>
  );
};
