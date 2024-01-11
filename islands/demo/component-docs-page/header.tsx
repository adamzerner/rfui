// deno-lint-ignore-file no-explicit-any
import { CodeBlock } from "@/islands/atoms/code-block.tsx";
import { H1 } from "@/islands/atoms/h1.tsx";
import { Link } from "@/islands/atoms/link.tsx";
import { Text } from "@/islands/atoms/text.tsx";
import { Stack } from "@/islands/helpers/stack.tsx";
import { Card, CardBody } from "@/islands/molecules/card.tsx";
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
            class="inline w-fit"
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

const getComponents = (props: any) => {
  const children = props.props.children;

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
