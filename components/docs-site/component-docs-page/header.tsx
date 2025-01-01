import { CodeBlock } from "@/components/atoms/code-block.tsx";
import { H1 } from "@/components/atoms/h1.tsx";
import { Link } from "@/components/atoms/link.tsx";
import { Text } from "@/components/atoms/text.tsx";
import { Stack } from "@/components/helpers/stack.tsx";
import { Card, CardBody } from "@/components/molecules/card.tsx";
import { JSX } from "preact";

type HeaderType = {
  componentName: string;
  overviewNotes: string | JSX.Element | null;
  sourceCodeUrl: string;
  demo: JSX.Element;
  importStatement: string;
};

export const Header = ({
  componentName,
  overviewNotes,
  sourceCodeUrl,
  demo,
  importStatement,
}: HeaderType) => {
  return (
    <header class="mb-10">
      <H1 class="!mt-0 break-words">{componentName}</H1>
      <Stack class="gap-5">
        <Text>
          {overviewNotes && (
            <div class="text-base leading-relaxed text-neutral-700">
              {overviewNotes}
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
            {demo}
          </CardBody>
        </Card>
        <CodeBlock
          language="ts"
          code={importStatement}
        />
      </Stack>
    </header>
  );
};
