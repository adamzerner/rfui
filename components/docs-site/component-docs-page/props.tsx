import { CodeBlock } from "@/components/atoms/code-block.tsx";
import { H1 } from "@/components/atoms/h1.tsx";
import { H2 } from "@/components/atoms/h2.tsx";
import { InlineCode } from "@/components/atoms/inline-code.tsx";
import { Link } from "@/components/atoms/link.tsx";
import { Table } from "@/components/atoms/table.tsx";
import { Stack } from "@/components/helpers/stack.tsx";
import { JSX } from "preact";

export const Props = (
  { props, subComponentTitle }: {
    props: {
      name: string;
      required: boolean;
      default: string | null;
      type: string;
      notes: JSX.Element | string | null;
    }[];
    subComponentTitle?: string;
  },
) => {
  return (
    <section class="mt-10">
      {subComponentTitle
        ? (
          <H2 class="mb-8">
            <InlineCode>{subComponentTitle}</InlineCode>
          </H2>
        )
        : (
          <H1 id="props">
            <Link inPageLink href="#props" underline="hover">Props</Link>
          </H1>
        )}
      <Table hover={false} class="min-w-[900px]">
        <thead>
          <tr>
            <th>Prop</th>
            <th class="w-10">Required</th>
            <th class="w-10">Default</th>
            <th>Type and notes</th>
          </tr>
        </thead>
        <tbody>
          {props.map((prop) => (
            <tr>
              <td class="whitespace-nowrap">
                <InlineCode>{prop.name}</InlineCode>
              </td>
              <td>{prop.required ? "✔" : "-"}</td>
              <td class="whitespace-nowrap">
                {prop.default !== null
                  ? <InlineCode>{prop.default}</InlineCode>
                  : "-"}
              </td>
              <td style={{ wordBreak: "break-word" }}>
                <Stack class="gap-4">
                  <CodeBlock lang="ts" code={prop.type} />
                  {prop.notes}
                </Stack>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </section>
  );
};
