// deno-lint-ignore-file no-explicit-any
import { CodeBlock } from "@/components/atoms/code-block.tsx";
import { H1 } from "@/components/atoms/h1.tsx";
import { Link } from "@/components/atoms/link.tsx";
import { Text } from "@/components/atoms/text.tsx";
import { Stack } from "@/components/helpers/stack.tsx";
import { Card, CardBody } from "@/components/molecules/card.tsx";
import { ComponentChild } from "preact";

export const Header = (
  {
    componentName,
    sourceCodeUrl,
    importStatement = `import { ${componentName} } from "rfui";`,
    children,
  }: {
    componentName: string;
    sourceCodeUrl: string;
    importStatement?: string;
    children: ComponentChild;
  },
) => {
  const { notes, example } = getComponents(children);

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
            class="inline w-fit !text-neutral-900"
          >
            Source code
          </Link>
        </Text>
        <Card width="full" padding="lg">
          <CardBody>
            {example}
          </CardBody>
        </Card>
        <CodeBlock
          language="ts"
          code={importStatement}
        />
      </Stack>
    </nav>
  );
};

export const Notes = ({ children }: { children: ComponentChild }) => {
  return <div>{children}</div>;
};

export const Example = ({ children }: { children: ComponentChild }) => {
  return <div>{children}</div>;
};

const getComponents = (children: any) => {
  if (!Array.isArray(children)) {
    return { example: children };
  }

  const notes = children.find(
    (child: any) => child && child.type && child.type.name === Notes.name,
  );

  const example = children.find(
    (child: any) => child && child.type && child.type.name === Example.name,
  );

  if (!example) {
    throw new Error(
      "An `Example` is needed.",
    );
  }

  return { notes, example };
};
