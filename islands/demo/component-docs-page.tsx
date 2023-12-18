import { CodeBlock } from "@/components/atoms/code-block.tsx";
import { H1 } from "@/components/atoms/h1.tsx";
import { H2 } from "@/components/atoms/h2.tsx";
import { Link } from "@/components/atoms/link.tsx";
import { Text } from "@/components/atoms/text.tsx";
import { Flex } from "@/components/helpers/flex.tsx";
import { Stack } from "@/components/helpers/stack.tsx";
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
    <Flex class="mt-9 gap-11 max-w-full">
      <LeftNav />
      <main class="flex-1 max-w-full">
        <Header componentName={componentName} sourceCodeUrl={sourceCodeUrl} />
        <Sections sections={sections} />
      </main>
      <OnThisPage sectionTitles={sections.map((s) => s.title)} />
    </Flex>
  );
};

const Header = ({ componentName, sourceCodeUrl }: {
  componentName: ComponentDocsPageType["componentName"];
  sourceCodeUrl: ComponentDocsPageType["sourceCodeUrl"];
}) => {
  return (
    <header>
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
    </header>
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
          <Card>{section.example()}</Card>
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
