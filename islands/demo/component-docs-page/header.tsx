import { CodeBlock } from "@/islands/atoms/code-block.tsx";
import { H1 } from "@/islands/atoms/h1.tsx";
import { Link } from "@/islands/atoms/link.tsx";
import { Text } from "@/islands/atoms/text.tsx";
import { ComponentDocsPageType } from "@/islands/demo/component-docs-page/index.tsx";
import { Stack } from "@/islands/helpers/stack.tsx";
import { Card } from "@/islands/molecules/card.tsx";
import { JSX } from "preact";

export const Header = ({ componentName, notes, sourceCodeUrl, example }: {
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
