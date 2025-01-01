import { H2 } from "@/components/atoms/h2.tsx";
import { Text } from "@/components/atoms/text.tsx";
import { getComponentsToImportString } from "@/components/docs-site/component-docs-page/get-components-to-import-string.ts";
import { Header } from "@/components/docs-site/component-docs-page/header.tsx";
import {
  PropsTable,
  PropsTableType,
} from "@/components/docs-site/component-docs-page/props-table.tsx";
import { ComponentsList } from "@/components/docs-site/components-list.tsx";
import { Flex } from "@/components/helpers/flex.tsx";
import { Card } from "@/components/molecules/card.tsx";
import { titleToHref } from "@/utilities/title-to-href.ts";
import { JSX } from "preact";
import { OnThisPage } from "./on-this-page.tsx";

export type ExampleType = {
  title: string;
  description?: JSX.Element | string;
  demo: JSX.Element;
  code: JSX.Element;
};

export type ComponentDocsPageType = {
  componentName: string;
  sourceCodeUrl: string;
  overviewNotes: JSX.Element | string | null;
  examples: ExampleType[];
  propsTables: PropsTableType[];
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
  const componentsToImport = [
    componentName,
    ...propsTables.filter((p) => p.title).map((p) => p.title as string),
  ];
  const componentsToImportString = getComponentsToImportString(
    componentsToImport,
  );
  const importStatement = `import { ${componentsToImportString}} from "rfui";`;

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
        {examples.map((example) => (
          <section>
            <H2 inPageLink={`example-${titleToHref(example.title)}`}>
              {example.title}
            </H2>
            {example.description && (
              <Text size="sm" class="mb-6">
                {example.description}
              </Text>
            )}
            <Card width="full" class="mb-4">{example.demo}</Card>
            {example.code}
          </section>
        ))}
        {propsTables.map((propsTable) => <PropsTable {...propsTable} />)}
      </main>
      <div class="hidden flex-shrink-0 lg:block">
        <OnThisPage
          exampleTitles={exampleTitles}
          propsTableTitles={propsTableTitles}
        />
      </div>
    </Flex>
  );
};
