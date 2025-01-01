import { H2 } from "@/components/atoms/h2.tsx";
import { Text } from "@/components/atoms/text.tsx";
import { ExampleType } from "@/components/docs-site/component-docs-page/index.tsx";
import { Card } from "@/components/molecules/card.tsx";
import { titleToHref } from "@/utilities/title-to-href.ts";

type ExamplesType = {
  examples: ExampleType[];
};

export const Examples = ({ examples }: ExamplesType) => {
  return (
    <section>
      {examples.map((example) => (
        <section>
          <H2 inPageLink={`example-${titleToHref(example.title)}`}>
            {example.title}
          </H2>
          {example.description && (
            <Text size="sm" class="mb-6">
              {example.description}
            </Text>
          )}
          <Card width="full" class="mb-4">{example.demo}</Card>
          {example.code}
        </section>
      ))}
    </section>
  );
};
