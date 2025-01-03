import { CodeBlock } from "@/components/atoms/code-block.tsx";
import { InlineCode } from "@/components/atoms/inline-code.tsx";
import { Link } from "@/components/atoms/link.tsx";
import { Progress } from "@/components/atoms/progress.tsx";
import {
  ComponentDocsPage,
  ExampleType,
} from "@/components/docs-site/component-docs-page/index.tsx";
import { Stack } from "@/components/helpers/stack.tsx";

export default () => {
  const overviewNotes = null;
  const examples: ExampleType[] = [{
    title: "Basic",
    demo: <Progress value={40} />,
    code: (
      <CodeBlock class="mt-4" language="tsx" code={`<Progress value={40} />`} />
    ),
  }, {
    title: "Size",
    demo: (
      <Stack class="gap-5">
        <Progress value={40} size="sm" />
        <Progress value={40} size="md" />
        <Progress value={40} size="lg" />
      </Stack>
    ),
    code: (
      <CodeBlock class="mt-4" language="tsx" code={`<Progress value={40} />`} />
    ),
  }];
  const propsTables = [{
    title: null,
    props: [{
      name: "...rest",
      required: false,
      type: 'ComponentProps<"div">',
      default: null,
      notes: (
        <div>
          <div class="leading-relaxed">
            See the docs for{" "}
            <Link href="/rest-parameters">rest parameters</Link>. For{" "}
            <InlineCode>Progress</InlineCode>, you could pass anything you
            normally would pass to <InlineCode>{"<div>"}</InlineCode>{" "}
            because the container{" "}
            <Link href="https://github.com/adamzerner/rfui/blob/master/islands/atoms/progress.tsx">
              looks something like
            </Link>{" "}
            this:
          </div>
          <CodeBlock
            language="tsx"
            code={`<div class={className} {...restWithoutClass}>
  {children}
</div>`}
          />
        </div>
      ),
    }],
  }];

  return (
    <ComponentDocsPage
      componentName="Progress"
      sourceCodeUrl="https://github.com/adamzerner/rfui/blob/master/components/atoms/progress.tsx"
      overviewNotes={overviewNotes}
      examples={examples}
      propsTables={propsTables}
    />
  );
};
