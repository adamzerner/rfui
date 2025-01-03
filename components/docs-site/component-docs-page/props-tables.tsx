import { CodeBlock } from "@/components/atoms/code-block.tsx";
import { H1 } from "@/components/atoms/h1.tsx";
import { H2 } from "@/components/atoms/h2.tsx";
import { InlineCode } from "@/components/atoms/inline-code.tsx";
import { Link } from "@/components/atoms/link.tsx";
import { Table } from "@/components/atoms/table.tsx";
import { Stack } from "@/components/helpers/stack.tsx";
import { titleToHref } from "@/utilities/title-to-href.ts";
import { JSX } from "preact";

type PropsTablesType = {
  propsTables: PropsTableType[];
};

export type PropsTableType = {
  title: string | null;
  props: PropsType;
};

type PropsType = {
  name: string;
  required: boolean;
  default: string | null;
  type: string;
  notes: JSX.Element | string | null;
}[];

export const PropsTables = ({ propsTables }: PropsTablesType) => {
  return (
    <section>
      {propsTables.map((propsTable) => <PropsTable {...propsTable} />)}
    </section>
  );
};

const PropsTable = (
  { props, title }: PropsTableType,
) => {
  return (
    <section class="mt-10 overflow-x-auto">
      {title
        ? (
          <H2 class="mb-8" id={`props-${titleToHref(title)}`}>
            <InlineCode>{title}</InlineCode>
          </H2>
        )
        : (
          <H1 id="props">
            <Link inPageLink href="#props" underline="hover">Props</Link>
          </H1>
        )}
      <Table hover={false} class="min-w-[600px]">
        <thead>
          <tr>
            <th class="min-w-[100px]">Prop</th>
            <th class="min-w-[100px]">Required</th>
            <th class="min-w-[100px]">Default</th>
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
