import { CodeBlock } from "@/components/atoms/code-block.tsx";
import { H1 } from "@/components/atoms/h1.tsx";
import { H2 } from "@/components/atoms/h2.tsx";
import { InlineCode } from "@/components/atoms/inline-code.tsx";
import { Link } from "@/components/atoms/link.tsx";
import { Table } from "@/components/atoms/table.tsx";
import { Text } from "@/components/atoms/text.tsx";
import { Flex } from "@/components/helpers/flex.tsx";
import { Stack } from "@/components/helpers/stack.tsx";
import { Card } from "@/components/molecules/card.tsx";
import { LeftNav } from "@/routes/index.tsx";
import { JSX } from "preact";

/*

TODO:
- Link to corresponding section
- Reconsider table
- Deal with text wrapping

*/

type ComponentDocsPageType = {
  componentName: string;
  sourceCodeUrl: string;
  sections: {
    title: string;
    description?: string | JSX.Element;
    example: () => JSX.Element;
    exampleCode: () => JSX.Element;
  }[];
  props: {
    name: string;
    type: string;
    default: string;
    notes: string;
  }[];
};

export const ComponentDocsPage = (
  { componentName, sourceCodeUrl, sections, props }: ComponentDocsPageType,
) => {
  const basicExample = sections.find((s) => s.title === "Basic")?.example;

  if (!basicExample) {
    throw new Error("All components should have a basic example.");
  }

  return (
    <Flex class="mt-9 gap-11 max-w-full">
      <LeftNav />
      <main class="flex-1 max-w-full">
        <Header
          componentName={componentName}
          sourceCodeUrl={sourceCodeUrl}
          example={basicExample}
        />
        <Sections sections={sections} />
        <Props props={props} />
      </main>
      <OnThisPage sectionTitles={sections.map((s) => s.title)} />
    </Flex>
  );
};

const Header = ({ componentName, sourceCodeUrl, example }: {
  componentName: ComponentDocsPageType["componentName"];
  sourceCodeUrl: ComponentDocsPageType["sourceCodeUrl"];
  example: () => JSX.Element;
}) => {
  return (
    <nav class="mb-10">
      <H1 class="!mt-0">{componentName}</H1>
      <Stack class="gap-5">
        <Text>
          <Link
            href={sourceCodeUrl}
            _includeNewTabIcon
            _newTab
            class="inline w-fit"
          >
            Source code
          </Link>
        </Text>
        <Card width="full" padding="lg">
          {example()}
        </Card>
        <CodeBlock>
          {`import { ${componentName} } from "rfui";`}
        </CodeBlock>
      </Stack>
    </nav>
  );
};

const Sections = (
  { sections }: { sections: ComponentDocsPageType["sections"] },
) => {
  return (
    <>
      {sections.map((section) => (
        <section>
          <H2 id={section.title.toLowerCase()}>
            <Link href={`#${section.title.toLowerCase()}`} underline="hover">
              {section.title}
            </Link>
          </H2>
          {section.description &&
            (
              <Text size="sm" class="!leading-loose mb-6">
                {section.description}
              </Text>
            )}
          <Card width="full">{section.example()}</Card>
          {section.exampleCode()}
        </section>
      ))}
    </>
  );
};

const OnThisPage = ({ sectionTitles }: { sectionTitles: string[] }) => {
  return (
    <nav class="hidden lg:block">
      <div class="font-bold text-neutral-700 mb-4">On this page</div>
      <Stack class="gap-2">
        {sectionTitles.map((sectionTitle) => (
          <Link underline="hover" href={`#${sectionTitle.toLowerCase()}`}>
            {sectionTitle}
          </Link>
        ))}
      </Stack>
    </nav>
  );
};

const Props = ({ props }: { props: ComponentDocsPageType["props"] }) => {
  return (
    <section class="mt-10">
      <H1 id="props">
        <Link href="#props" underline="hover">Props</Link>
      </H1>
      <Table class="w-full">
        <thead>
          <tr>
            <th>Name</th>
            <th>Type</th>
            <th>Default</th>
          </tr>
        </thead>
        <tbody>
          {props.map((prop) => (
            <tr>
              <td>
                {prop.name}
              </td>
              <td>
                <InlineCode>{prop.type}</InlineCode>
              </td>
              <td>
                <InlineCode>{prop.default}</InlineCode>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </section>
  );
};
