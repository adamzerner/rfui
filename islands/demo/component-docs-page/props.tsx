import { CodeBlock } from "@/islands/atoms/code-block.tsx";
import { H1 } from "@/islands/atoms/h1.tsx";
import { InlineCode } from "@/islands/atoms/inline-code.tsx";
import { Link } from "@/islands/atoms/link.tsx";
import { ComponentDocsPageType } from "@/islands/demo/component-docs-page/index.tsx";
import { Stack } from "@/islands/helpers/stack.tsx";

export const Props = ({ props }: { props: ComponentDocsPageType["props"] }) => {
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
