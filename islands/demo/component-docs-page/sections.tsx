import { H2 } from "@/islands/atoms/h2.tsx";
import { Text } from "@/islands/atoms/text.tsx";
import { ComponentDocsPageType } from "@/islands/demo/component-docs-page/index.tsx";
import { Card } from "@/islands/molecules/card.tsx";

export const Sections = (
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
