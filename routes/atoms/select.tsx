import { CodeBlock } from "@/components/atoms/code-block.tsx";
import { InlineCode } from "@/components/atoms/inline-code.tsx";
import { Select } from "@/components/atoms/select.tsx";
import { Stack } from "@/components/helpers/stack.tsx";
import { ComponentDocsPage } from "@/islands/demo/component-docs-page.tsx";

export default () => {
  const sections = [{
    title: "Basic",
    example: () => (
      <Select>
        <option value="foo">foo</option>
        <option value="bar">bar</option>
        <option value="baz">baz</option>
      </Select>
    ),
    exampleCode: () => (
      <CodeBlock
        class="mt-4"
        language="tsx"
        code={`<Select>
  <option value="foo">foo</option>
  <option value="bar">bar</option>
  <option value="baz">baz</option>
</Select>`}
      />
    ),
  }, {
    title: "Size",
    description: (
      <div>
        Set <InlineCode>size</InlineCode> to either{" "}
        <InlineCode>"sm"</InlineCode>, <InlineCode>"md"</InlineCode> or{" "}
        <InlineCode>"lg"</InlineCode>. Defaults to{" "}
        <InlineCode>"md"</InlineCode>.
      </div>
    ),
    example: () => (
      <Stack class="gap-5 w-fit">
        <Select size="sm">
          <option value="foo">foo</option>
          <option value="bar">bar</option>
          <option value="baz">baz</option>
        </Select>
        <Select size="md">
          <option value="foo">foo</option>
          <option value="bar">bar</option>
          <option value="baz">baz</option>
        </Select>
        <Select size="lg">
          <option value="foo">foo</option>
          <option value="bar">bar</option>
          <option value="baz">baz</option>
        </Select>
      </Stack>
    ),
    exampleCode: () => (
      <CodeBlock
        class="mt-4"
        language="tsx"
        code={`<Stack class="gap-5 w-fit">
  <Select size="sm">
    <option value="foo">foo</option>
    <option value="bar">bar</option>
    <option value="baz">baz</option>
  </Select>
  <Select size="md">
    <option value="foo">foo</option>
    <option value="bar">bar</option>
    <option value="baz">baz</option>
  </Select>
  <Select size="lg">
    <option value="foo">foo</option>
    <option value="bar">bar</option>
    <option value="baz">baz</option>
  </Select>
</Stack>`}
      />
    ),
  }, {
    title: "Rounded",
    description: (
      <div>
        Set <InlineCode>rounded</InlineCode> to either{" "}
        <InlineCode>"square"</InlineCode>, <InlineCode>"sm"</InlineCode>, or
        {" "}
        <InlineCode>"lg"</InlineCode>. Defaults to{" "}
        <InlineCode>"sm"</InlineCode>.
      </div>
    ),
    example: () => (
      <Stack class="gap-5 w-fit">
        <Select rounded="square">
          <option value="foo">foo</option>
          <option value="bar">bar</option>
          <option value="baz">baz</option>
        </Select>
        <Select rounded="sm">
          <option value="foo">foo</option>
          <option value="bar">bar</option>
          <option value="baz">baz</option>
        </Select>
        <Select rounded="lg">
          <option value="foo">foo</option>
          <option value="bar">bar</option>
          <option value="baz">baz</option>
        </Select>
      </Stack>
    ),
    exampleCode: () => (
      <CodeBlock
        class="mt-4"
        language="tsx"
        code={`<Stack class="gap-5 w-fit">
  <Select rounded="square">
    <option value="foo">foo</option>
    <option value="bar">bar</option>
    <option value="baz">baz</option>
  </Select>
  <Select rounded="sm">
    <option value="foo">foo</option>
    <option value="bar">bar</option>
    <option value="baz">baz</option>
  </Select>
  <Select rounded="lg">
    <option value="foo">foo</option>
    <option value="bar">bar</option>
    <option value="baz">baz</option>
  </Select>
</Stack>`}
      />
    ),
  }, {
    title: "Disabled",
    description: (
      <div>
        Set <InlineCode>disabled</InlineCode> to either{" "}
        <InlineCode>true</InlineCode> or{" "}
        <InlineCode>false</InlineCode>. Defaults to{" "}
        <InlineCode>false</InlineCode>.
      </div>
    ),
    example: () => (
      <Select disabled>
        <option value="foo">foo</option>
        <option value="bar">bar</option>
        <option value="baz">baz</option>
      </Select>
    ),
    exampleCode: () => (
      <CodeBlock
        class="mt-4"
        language="tsx"
        code={`<Select disabled>
  <option value="foo">foo</option>
  <option value="bar">bar</option>
  <option value="baz">baz</option>
</Select>`}
      />
    ),
  }, {
    title: "Invalid",
    description: (
      <div>
        Set <InlineCode>invalid</InlineCode> to either{" "}
        <InlineCode>true</InlineCode> or{" "}
        <InlineCode>false</InlineCode>. Defaults to{" "}
        <InlineCode>false</InlineCode>.
      </div>
    ),
    example: () => (
      <Select invalid>
        <option value="foo">foo</option>
        <option value="bar">bar</option>
        <option value="baz">baz</option>
      </Select>
    ),
    exampleCode: () => (
      <CodeBlock
        class="mt-4"
        language="tsx"
        code={`<Select invalid>
  <option value="foo">foo</option>
  <option value="bar">bar</option>
  <option value="baz">baz</option>
</Select>`}
      />
    ),
  }];
  const props = [{
    name: "size",
    required: false,
    type: '"sm" | "md" | "lg"',
    default: '"md"',
    notes: null,
  }, {
    name: "rounded",
    required: false,
    type: '"square" | "sm" | "lg" | "full"',
    default: '"sm"',
    notes: null,
  }, {
    name: "disabled",
    required: false,
    type: "boolean",
    default: "false",
    notes: null,
  }, {
    name: "invalid",
    required: false,
    type: "boolean",
    default: "false",
    notes: null,
  }];

  return (
    <ComponentDocsPage
      componentName="Select"
      sourceCodeUrl="https://github.com/adamzerner/rfui/blob/master/components/atoms/select.tsx"
      sections={sections}
      props={props}
    />
  );
};
