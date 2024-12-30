import { H2 } from "@/components/atoms/h2.tsx";
import { Text } from "@/components/atoms/text.tsx";
import {
  Example,
  Header,
  Notes,
} from "@/components/docs-site/component-docs-page/header.tsx";
import {
  PropsTable,
  PropsTableType,
} from "@/components/docs-site/component-docs-page/props-table.tsx";
import { Flex } from "@/components/helpers/flex.tsx";
import { Card } from "@/components/molecules/card.tsx";
import { JSX } from "preact";
import { ExamplesSectionType } from "./examples-section-type.ts";
import { OnThisPage } from "./on-this-page.tsx";

export type ComponentDocsPageType = {
  componentName: string;
  sourceCodeUrl: string;
  importStatement?: string;
  overviewNotes: string | JSX.Element | null;
  examplesSections: ExamplesSectionType[];
  propsTables: PropsTableType[];
};

export const ComponentDocsPage = (
  {
    componentName,
    sourceCodeUrl,
    importStatement,
    overviewNotes,
    examplesSections,
    propsTables,
  }: ComponentDocsPageType,
) => {
  const examplesSectionTitles = examplesSections.map((s) => s.title);

  return (
    <Flex class="mt-9 gap-10">
      <div class="hidden flex-shrink-0 lg:block">
        <OnThisPage examplesSectionTitles={examplesSectionTitles} />
      </div>
      <main class="flex-grow">
        <Header
          componentName={componentName}
          sourceCodeUrl={sourceCodeUrl}
          importStatement={importStatement}
        >
          <Example>{examplesSections[0].example}</Example>
          {overviewNotes && <Notes>{overviewNotes}</Notes>}
        </Header>
        {examplesSections.map((section) => (
          <section>
            <H2 inPageLink={section.title.toLowerCase().split(/\s+/).join("-")}>
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
    </Flex>
  );
};
