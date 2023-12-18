import { CodeBlock } from "@/components/atoms/code-block.tsx";
import { H1 } from "@/components/atoms/h1.tsx";
import { H2 } from "@/components/atoms/h2.tsx";
import { Link } from "@/components/atoms/link.tsx";
import { Text } from "@/components/atoms/text.tsx";
import { Flex } from "@/components/helpers/flex.tsx";
import { Card } from "@/components/molecules/card.tsx";
import { LeftNav } from "@/routes/index.tsx";
import { JSX } from "preact";

type ComponentDocsPageType = {
  componentName: string;
  sourceCodeUrl: string;
  sections: {
    title: string;
    description?: string | JSX.Element;
    example: () => JSX.Element;
    exampleCode: () => JSX.Element;
  }[];
};

export const ComponentDocsPage = (
  { componentName, sourceCodeUrl, sections }: ComponentDocsPageType,
) => {
  return (
    <Flex class="mt-9 gap-11">
      <LeftNav />
      <main class="flex-1">
        <section>
          <H1 class="!mt-0">{componentName}</H1>
          <Text>
            <Link
              href={sourceCodeUrl}
              _includeNewTabIcon
              _newTab
              class="inline"
            >
              Source code
            </Link>
          </Text>
          <CodeBlock class="mt-6">
            {`import { ${componentName} } from "rfui";`}
          </CodeBlock>
        </section>
        {sections.map((section) => (
          <section>
            <H2>{section.title}</H2>
            {section.description &&
              (
                <Text size="sm" class="!leading-loose mb-6">
                  {section.description}
                </Text>
              )}
            <Card>{section.example()}</Card>
            {section.exampleCode()}
          </section>
        ))}
      </main>
      <div>On this page</div>
    </Flex>
  );
};
