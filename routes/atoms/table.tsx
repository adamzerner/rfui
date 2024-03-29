import { CodeBlock } from "@/components/atoms/code-block.tsx";
import { H2 } from "@/components/atoms/h2.tsx";
import { InlineCode } from "@/components/atoms/inline-code.tsx";
import { Link } from "@/components/atoms/link.tsx";
import { Table } from "@/components/atoms/table.tsx";
import { Text } from "@/components/atoms/text.tsx";
import {
  Example,
  Header,
  Notes,
} from "@/components/docs-site/component-docs-page/header.tsx";
import { ComponentDocsPage } from "@/components/docs-site/component-docs-page/index.tsx";
import { Prop } from "@/components/docs-site/component-docs-page/prop.tsx";
import { Props } from "@/components/docs-site/component-docs-page/props.tsx";
import { SectionType } from "@/components/docs-site/component-docs-page/section-type.ts";
import { Stack } from "@/components/helpers/stack.tsx";
import { Card } from "@/components/molecules/card.tsx";

export default () => {
  const notes = null;
  const sections: SectionType[] = [{
    title: "Basic",
    example: (
      <Table>
        <thead>
          <tr>
            <th>name</th>
            <th>age</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Alice</td>
            <td>19</td>
          </tr>
          <tr>
            <td>Bob</td>
            <td>25</td>
          </tr>
        </tbody>
      </Table>
    ),
    exampleCode: (
      <CodeBlock
        class="mt-4"
        language="tsx"
        code={`<Table>
  <thead>
    <tr>
      <th>name</th>
      <th>age</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Alice</td>
      <td>19</td>
    </tr>
    <tr>
      <td>Bob</td>
      <td>25</td>
    </tr>
  </tbody>
</Table>`}
      />
    ),
  }, {
    title: "No border",
    description: (
      <div>
        Set <InlineCode>bordered</InlineCode> to <InlineCode>false</InlineCode>.
      </div>
    ),
    example: (
      <Table bordered={false}>
        <thead>
          <tr>
            <th>name</th>
            <th>age</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Alice</td>
            <td>19</td>
          </tr>
          <tr>
            <td>Bob</td>
            <td>25</td>
          </tr>
        </tbody>
      </Table>
    ),
    exampleCode: (
      <CodeBlock
        class="mt-4"
        language="tsx"
        code={`<Table bordered={false}>
  <thead>
    <tr>
      <th>name</th>
      <th>age</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Alice</td>
      <td>19</td>
    </tr>
    <tr>
      <td>Bob</td>
      <td>25</td>
    </tr>
  </tbody>
</Table>`}
      />
    ),
  }, {
    title: "No hover",
    description: (
      <div>
        Set <InlineCode>hover</InlineCode> to <InlineCode>false</InlineCode>.
      </div>
    ),
    example: (
      <Table hover={false}>
        <thead>
          <tr>
            <th>name</th>
            <th>age</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Alice</td>
            <td>19</td>
          </tr>
          <tr>
            <td>Bob</td>
            <td>25</td>
          </tr>
        </tbody>
      </Table>
    ),
    exampleCode: (
      <CodeBlock
        class="mt-4"
        language="tsx"
        code={`<Table hover={false}>
  <thead>
    <tr>
      <th>name</th>
      <th>age</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Alice</td>
      <td>19</td>
    </tr>
    <tr>
      <td>Bob</td>
      <td>25</td>
    </tr>
  </tbody>
</Table>`}
      />
    ),
  }, {
    title: "Striped",
    description: (
      <Stack class="gap-3">
        <div>
          Set <InlineCode>striped</InlineCode> to <InlineCode>true</InlineCode>
          {" "}
          and <InlineCode>bordered</InlineCode> to{" "}
          <InlineCode>false</InlineCode>.
        </div>
        <div>
          Discussions of utilizing zebra stripes:
          <Link href="https://ux.stackexchange.com/q/3562/39046">
            https://ux.stackexchange.com/q/3562/39046
          </Link>,{" "}
          <Link href="https://ux.stackexchange.com/q/60715/39046">
            https://ux.stackexchange.com/q/60715/39046
          </Link>.
        </div>
      </Stack>
    ),
    example: (
      <Table striped bordered={false}>
        <thead>
          <tr>
            <th>name</th>
            <th>age</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Alice</td>
            <td>19</td>
          </tr>
          <tr>
            <td>Bob</td>
            <td>25</td>
          </tr>
          <tr>
            <td>Carol</td>
            <td>22</td>
          </tr>
          <tr>
            <td>Dave</td>
            <td>34</td>
          </tr>
        </tbody>
      </Table>
    ),
    exampleCode: (
      <CodeBlock
        class="mt-4"
        language="tsx"
        code={`<Table striped bordered={false}>
  <thead>
    <tr>
      <th>name</th>
      <th>age</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Alice</td>
      <td>19</td>
    </tr>
    <tr>
      <td>Bob</td>
      <td>25</td>
    </tr>
    <tr>
      <td>Carol</td>
      <td>22</td>
    </tr>
    <tr>
      <td>Dave</td>
      <td>34</td>
    </tr>
  </tbody>
</Table>`}
      />
    ),
  }, {
    title: "Striped with border",
    description: (
      <div>
        Set <InlineCode>striped</InlineCode> to <InlineCode>true</InlineCode>.
      </div>
    ),
    example: (
      <Table striped>
        <thead>
          <tr>
            <th>name</th>
            <th>age</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Alice</td>
            <td>19</td>
          </tr>
          <tr>
            <td>Bob</td>
            <td>25</td>
          </tr>
          <tr>
            <td>Carol</td>
            <td>22</td>
          </tr>
          <tr>
            <td>Dave</td>
            <td>34</td>
          </tr>
        </tbody>
      </Table>
    ),
    exampleCode: (
      <CodeBlock
        class="mt-4"
        language="tsx"
        code={`<Table striped>
  <thead>
    <tr>
      <th>name</th>
      <th>age</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Alice</td>
      <td>19</td>
    </tr>
    <tr>
      <td>Bob</td>
      <td>25</td>
    </tr>
    <tr>
      <td>Carol</td>
      <td>22</td>
    </tr>
    <tr>
      <td>Dave</td>
      <td>34</td>
    </tr>
  </tbody>
</Table>`}
      />
    ),
  }, {
    title: "Sticky header",
    description: (
      <Stack class="gap-3">
        <div>
          Set <InlineCode>stickyHeader</InlineCode> to{" "}
          <InlineCode>true</InlineCode>.
        </div>
        <div>
          Making the header sticky is helpful when the user needs to
          cross-reference and avoid losing context.
        </div>
      </Stack>
    ),
    example: (
      <Table stickyHeader>
        <thead>
          <tr>
            <th>name</th>
            <th>age</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Alice</td>
            <td>19</td>
          </tr>
          <tr>
            <td>Bob</td>
            <td>25</td>
          </tr>
        </tbody>
      </Table>
    ),
    exampleCode: (
      <CodeBlock
        class="mt-4"
        language="tsx"
        code={`<Table stickyHeader>
  <thead>
    <tr>
      <th>name</th>
      <th>age</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Alice</td>
      <td>19</td>
    </tr>
    <tr>
      <td>Bob</td>
      <td>25</td>
    </tr>
  </tbody>
</Table>`}
      />
    ),
  }, {
    title: "Sticky first column",
    description: (
      <Stack class="gap-3">
        <div>
          Set <InlineCode>stickyFirstColumn</InlineCode> to{" "}
          <InlineCode>true</InlineCode>.
        </div>
        <div>
          Making the first column sticky is helpful when the user needs to
          cross-reference and avoid losing context.
        </div>
      </Stack>
    ),
    example: (
      <Table stickyFirstColumn>
        <thead>
          <tr>
            <th>name</th>
            <th>age</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Alice</td>
            <td>19</td>
          </tr>
          <tr>
            <td>Bob</td>
            <td>25</td>
          </tr>
        </tbody>
      </Table>
    ),
    exampleCode: (
      <CodeBlock
        class="mt-4"
        language="tsx"
        code={`<Table stickyFirstColumn>
  <thead>
    <tr>
      <th>name</th>
      <th>age</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Alice</td>
      <td>19</td>
    </tr>
    <tr>
      <td>Bob</td>
      <td>25</td>
    </tr>
  </tbody>
</Table>`}
      />
    ),
  }, {
    title: "Sticky header and first column",
    description: (
      <div>
        Set <InlineCode>stickyHeader</InlineCode> to{" "}
        <InlineCode>true</InlineCode> and{" "}
        <InlineCode>stickyFirstColumn</InlineCode> to{" "}
        <InlineCode>true</InlineCode>.
      </div>
    ),
    example: (
      <Table stickyHeader stickyFirstColumn>
        <thead>
          <tr>
            <th>name</th>
            <th>age</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Alice</td>
            <td>19</td>
          </tr>
          <tr>
            <td>Bob</td>
            <td>25</td>
          </tr>
        </tbody>
      </Table>
    ),
    exampleCode: (
      <CodeBlock
        class="mt-4"
        language="tsx"
        code={`<Table stickyHeader>
  <thead>
    <tr>
      <th>name</th>
      <th>age</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Alice</td>
      <td>19</td>
    </tr>
    <tr>
      <td>Bob</td>
      <td>25</td>
    </tr>
  </tbody>
</Table>`}
      />
    ),
  }, {
    title: "Condensed",
    description: (
      <div>
        Set <InlineCode>condensed</InlineCode> to <InlineCode>true</InlineCode>.
      </div>
    ),
    example: (
      <Table condensed>
        <thead>
          <tr>
            <th>name</th>
            <th>age</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Alice</td>
            <td>19</td>
          </tr>
          <tr>
            <td>Bob</td>
            <td>25</td>
          </tr>
        </tbody>
      </Table>
    ),
    exampleCode: (
      <CodeBlock
        class="mt-4"
        language="tsx"
        code={`<Table condensed>
  <thead>
    <tr>
      <th>name</th>
      <th>age</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Alice</td>
      <td>19</td>
    </tr>
    <tr>
      <td>Bob</td>
      <td>25</td>
    </tr>
  </tbody>
</Table>`}
      />
    ),
  }];
  const props = [{
    name: "bordered",
    required: false,
    type: "boolean",
    default: "true",
    notes: null,
  }, {
    name: "hover",
    required: false,
    type: "boolean",
    default: "true",
    notes: null,
  }, {
    name: "striped",
    required: false,
    type: "boolean",
    default: "false",
    notes: (
      <div>
        Discussions of utilizing zebra stripes:{" "}
        <Link href="https://ux.stackexchange.com/q/3562/39046">
          https://ux.stackexchange.com/q/3562/39046
        </Link>,{" "}
        <Link href="https://ux.stackexchange.com/q/60715/39046">
          https://ux.stackexchange.com/q/60715/39046
        </Link>.
      </div>
    ),
  }, {
    name: "condensed",
    required: false,
    type: "boolean",
    default: "false",
    notes: null,
  }, {
    name: "stickyHeader",
    required: false,
    type: "boolean",
    default: "false",
    notes:
      "Making the header sticky is helpful when the user needs to cross-reference and avoid losing context.",
  }, {
    name: "stickyFirstColumn",
    required: false,
    type: "boolean",
    default: "false",
    notes:
      "Making the first column sticky is helpful when the user needs to cross-reference and avoid losing context.",
  }, {
    name: "children",
    required: true,
    type: "ComponentChild",
    default: null,
    notes: null,
  }, {
    name: "...rest",
    required: false,
    type: 'ComponentProps<"table">',
    default: null,
    notes: (
      <div>
        <div class="leading-relaxed">
          See the docs for{" "}
          <Link href="/rest-parameters">rest parameters</Link>. For{" "}
          <InlineCode>Table</InlineCode>, you could pass anything you normally
          would pass to <InlineCode>{"<table>"}</InlineCode>{" "}
          because the return value{" "}
          <Link href="https://github.com/adamzerner/rfui/blob/master/islands/atoms/table.tsx">
            looks something like
          </Link>{" "}
          this:
        </div>
        <CodeBlock
          language="tsx"
          code={`<table
  class={className}
  {...restWithoutClass}
>
  {children}
</table>`}
        />
      </div>
    ),
  }];

  return (
    <ComponentDocsPage
      sectionTitles={sections.map((s) => s.title)}
    >
      <Header
        componentName="Table"
        sourceCodeUrl="https://github.com/adamzerner/rfui/blob/master/components/atoms/table.tsx"
      >
        <Example>{sections[0].example}</Example>
        <Notes>{notes}</Notes>
      </Header>
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
          <Card width="full" class="mb-4">{section.example}</Card>
          {section.exampleCode}
        </section>
      ))}
      <Props>
        {props.map((prop) => {
          const { notes, ...propWithoutNotes } = prop;

          return notes
            ? (
              <Prop prop={prop}>
                {notes}
              </Prop>
            )
            : <Prop prop={propWithoutNotes}></Prop>;
        })}
      </Props>
    </ComponentDocsPage>
  );
};
