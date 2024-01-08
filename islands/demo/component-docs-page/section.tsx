// deno-lint-ignore-file no-explicit-any
import { H2 } from "@/islands/atoms/h2.tsx";
import { Text } from "@/islands/atoms/text.tsx";
import { Card } from "@/islands/molecules/card.tsx";
import { ComponentChild } from "preact";

export const Section = (
  { title, children }: { title: string; children: ComponentChild },
) => {
  const { description, example, exampleCode } = getComponents(children);

  if (!example || !exampleCode) {
    return null;
  }

  return (
    <section>
      <H2 inPageLink={title.toLowerCase().split(/\s+/).join("-")}>
        {title}
      </H2>
      {description &&
        (
          <Text size="sm" class="mb-6">
            {description}
          </Text>
        )}
      <Card width="full" class="mb-4">{example()}</Card>
      {exampleCode()}
    </section>
  );
};

export const Description = ({ children }: { children: ComponentChild }) => (
  <>{children}</>
);

export const Example = ({ children }: { children: ComponentChild }) => (
  <>{children}</>
);

export const ExampleCode = ({ children }: { children: ComponentChild }) => (
  <>{children}</>
);

const getComponents = (props: any) => {
  const children = props.props.children.props.children;

  if (!Array.isArray(children)) {
    throw new Error("`Section` exepcts an array as `children`.");
  }

  const description = children.find(
    (child: any) => child && child.type && child.type.name === Description.name,
  );

  const example = children.find(
    (child: any) => child && child.type && child.type.name === Example.name,
  );

  const exampleCode = children.find(
    (child: any) => child && child.type && child.type.name === ExampleCode.name,
  );

  if (!example) {
    throw new Error(
      "An `Example` is needed.",
    );
  } else if (!exampleCode) {
    throw new Error(
      "An `ExampleCode` is needed.",
    );
  }

  return { description, example, exampleCode };
};
