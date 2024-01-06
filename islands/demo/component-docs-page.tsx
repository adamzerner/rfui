import { CodeBlock } from "@/islands/atoms/code-block.tsx";
import { H1 } from "@/islands/atoms/h1.tsx";
import { H2 } from "@/islands/atoms/h2.tsx";
import { InlineCode } from "@/islands/atoms/inline-code.tsx";
import { Link } from "@/islands/atoms/link.tsx";
import { Text } from "@/islands/atoms/text.tsx";
import { Flex } from "@/islands/helpers/flex.tsx";
import { Stack } from "@/islands/helpers/stack.tsx";
import { Card } from "@/islands/molecules/card.tsx";
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

const Header = ({ componentName, notes, sourceCodeUrl, example }: {
  componentName: ComponentDocsPageType["componentName"];
  notes: ComponentDocsPageType["notes"];
  sourceCodeUrl: ComponentDocsPageType["sourceCodeUrl"];
  example: () => JSX.Element;
}) => {
  return (
    <nav class="mb-10">
      <H1 class="!mt-0">{componentName}</H1>
      <Stack class="gap-5">
        <Text>
          {notes && (
            <div class="text-base leading-relaxed text-neutral-700">
              {notes}
            </div>
          )}
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
        <CodeBlock
          language="ts"
          code={`import { ${componentName} } from "rfui";`}
        />
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
          <H2 inPageLink={section.title.toLowerCase().split(/\s+/).join("-")}>
            {section.title}
          </H2>
          {section.description &&
            (
              <Text size="sm" class="mb-6">
                {section.description}
              </Text>
            )}
          <Card width="full" class="mb-4">{section.example()}</Card>
          {section.exampleCode()}
        </section>
      ))}
    </>
  );
};

export const OnThisPage = ({ sectionTitles }: { sectionTitles: string[] }) => {
  return (
    <nav class="pb-8 border-b border-b-neutral-100">
      <div class="font-bold text-neutral-700 mb-4">On this page</div>
      <Stack class="gap-2">
        {sectionTitles.map((sectionTitle) => (
          <Link
            underline="hover"
            href={`#${sectionTitle.toLowerCase().split(/\s+/).join("-")}`}
          >
            {sectionTitle}
          </Link>
        ))}
        <Link underline="hover" href="#props">
          Props
        </Link>
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
      <div class="grid grid-cols-1 sm:grid-cols-3 gap-y-5 sm:gap-y-10 justify-items-start place-items-start">
        {props.map((prop) => (
          <>
            <div class="first-of-type:mt-0 mt-8 sm:mt-0">
              <InlineCode class="text-2xl">
                {prop.name}
              </InlineCode>
              {prop.required &&
                <sup class="text-supporting-red-500 text-2xl ml-1">*</sup>}
            </div>
            <Stack class="gap-5 col-span-2 text-sm">
              <div class="self-start">
                <div class="mb-3">Required</div>
                <CodeBlock language="ts" code={prop.required.toString()} />
              </div>
              <div class="self-start">
                <div class="mb-3">Type</div>
                <CodeBlock language="ts" code={prop.type} />
              </div>
              <div class="self-start">
                <div class="mb-3">Default</div>
                {prop.default
                  ? (
                    <CodeBlock
                      language="ts"
                      code={prop.default}
                    />
                  )
                  : <div class="text-xs">none</div>}
              </div>
              {prop.notes &&
                (
                  <div>
                    <div class="mb-3">Notes</div>
                    <div>{prop.notes}</div>
                  </div>
                )}
            </Stack>
          </>
        ))}
      </div>
    </section>
  );
};
