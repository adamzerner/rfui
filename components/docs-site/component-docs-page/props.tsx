import { CodeBlock } from "@/components/atoms/code-block.tsx";
import { H1 } from "@/components/atoms/h1.tsx";
import { H2 } from "@/components/atoms/h2.tsx";
import { InlineCode } from "@/components/atoms/inline-code.tsx";
import { Link } from "@/components/atoms/link.tsx";
import { Table } from "@/components/atoms/table.tsx";
import { ComponentChild, JSX } from "preact";

export const Props = (
  { subComponentTitle, props, children }: {
    subComponentTitle?: string;
    props?: {
      name: string;
      required: boolean;
      default: string | null;
      type: string;
      notes: JSX.Element | string | null;
    }[];
    children?: ComponentChild;
  },
) => {
  if (props) {
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
        <Table hover={false}>
          <thead>
            <tr>
              <th>Prop</th>
              <th class="w-10">Required</th>
              <th class="w-10">Default</th>
              <th class="w-14">Type</th>
              <th>Notes</th>
            </tr>
          </thead>
          <tbody>
            {props.map((prop) => (
              <tr>
                <td class="whitespace-nowrap">
                  <InlineCode>{prop.name}</InlineCode>
                </td>
                <td>{prop.required ? "✔" : "-"}</td>
                <td>
                  {prop.default !== null
                    ? <InlineCode>{prop.default}</InlineCode>
                    : "-"}
                </td>
                <td>
                  <CodeBlock lang="ts" code={prop.type} />
                </td>
                <td class="text-wrap break-words">{prop.notes ?? "-"}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </section>
    );
  }

  return (
    <section class={subComponentTitle ? "mt-10" : "mt-10"}>
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

      <div
        class="grid grid-cols-1 place-items-start justify-items-start gap-x-3 gap-y-5 sm:grid-cols-3 sm:gap-y-10"
        style={{ overflowWrap: "anywhere" }}
      >
        {children}
      </div>
    </section>
  );
};
