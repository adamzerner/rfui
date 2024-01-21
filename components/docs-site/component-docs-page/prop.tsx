import { CodeBlock } from "@/components/atoms/code-block.tsx";
import { InlineCode } from "@/components/atoms/inline-code.tsx";
import { Stack } from "@/components/helpers/stack.tsx";
import { ComponentChild } from "preact";

export const Prop = ({ prop, children }: {
  prop: {
    name: string;
    required: boolean;
    type: string;
    default: string | null;
  };
  children?: ComponentChild;
}) => {
  return (
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
        {children &&
          (
            <div>
              <div class="mb-3">Notes</div>
              <div>{children}</div>
            </div>
          )}
      </Stack>
    </>
  );
};
