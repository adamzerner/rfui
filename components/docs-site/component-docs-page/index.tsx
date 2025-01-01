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

export type ExamplesSectionType = {
  title: string;
  description?: string | JSX.Element;
  example: JSX.Element;
  exampleCode: JSX.Element;
};

export type ComponentDocsPageType = {
  componentName: string;
  sourceCodeUrl: string;
  overviewNotes: string | JSX.Element | null;
  examplesSections: ExamplesSectionType[];
  propsTables: PropsTableType[];
};

export const ComponentDocsPage = (
  {
    componentName,
    sourceCodeUrl,
    overviewNotes,
    examplesSections,
    propsTables,
  }: ComponentDocsPageType,
) => {
  const examplesSectionTitles = examplesSections.map((s) => s.title);
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
          example={examplesSections[0].example}
          importStatement={importStatement}
        />
        {examplesSections.map((section) => (
          <section>
            <H2 inPageLink={`example-${titleToHref(section.title)}`}>
              {section.title}
            </H2>
            {section.description && (
              <Text size="sm" class="mb-6">
                {section.description}
              </Text>
            )}
            <Card width="full" class="mb-4">{section.example}</Card>
            {section.exampleCode}
          </section>
        ))}
        {propsTables.map((propsTable) => <PropsTable {...propsTable} />)}
      </main>
      <div class="hidden flex-shrink-0 lg:block">
        <OnThisPage
          examplesSectionTitles={examplesSectionTitles}
          propsTableTitles={propsTableTitles}
        />
      </div>
    </Flex>
  );
};
