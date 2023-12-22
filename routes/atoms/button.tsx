import { Button } from "@/components/atoms/button.tsx";
import { CodeBlock } from "@/components/atoms/code-block.tsx";
import { Link } from "@/components/atoms/link.tsx";
import { Stack } from "@/components/helpers/stack.tsx";
import { ComponentDocsPage } from "@/islands/demo/component-docs-page.tsx";

export default () => {
  const sections = [{
    title: "Basic",
    example: () => <Button>Example</Button>,
    exampleCode: () => (
      <CodeBlock
        class="mt-4"
        language="tsx"
        code={`<Button>Example</Button>`}
      />
    ),
  }];
  const props = [{
    name: "variant",
    required: false,
    type:
      '"primary" | "secondary" | "tertiary" | "danger-primary" | "danger-secondary" | "danger-tertiary"',
    default: '"secondary"',
    notes: null,
  }, {
    name: "size",
    required: false,
    type: '"sm" | "md" | "lg" | "block"',
    default: '"md"',
    notes: null,
  }, {
    name: "rounded",
    required: false,
    type: '"square" | "sm" | "lg" | "full"',
    default: '"sm"',
    notes: null,
  }, {
    name: "isLoading",
    required: false,
    type: "boolean",
    default: "false",
    notes: null,
  }, {
    name: "loadingContent",
    required: false,
    type: "string | JSX.Element",
    default: null,
    notes: null,
  }, {
    name: "icon",
    required: false,
    type: "JSX.Element",
    default: null,
    notes: (
      <Stack class="gap-3">
        <p>
          An icon that will be placed to the left of the button's text. Placing
          it to the left as opposed to the right is a{" "}
          <Link href="https://ux.stackexchange.com/q/56023/39046">
            best practice
          </Link>.
        </p>
        <p>
          Consider{" "}
          <Link href="https://uxmyths.com/post/715009009/myth-icons-enhance-usability">
            Myth #13: Icons enhance usability
          </Link>{" "}
          before using a standalone icon, or even before using an icon at all.
        </p>
      </Stack>
    ),
  }, {
    name: "_rightIcon",
    required: false,
    type: "JSX.Element",
    default: null,
    notes: (
      <div>
        An icon that will be placed to the right of the button's text.{" "}
        <Link href="https://ux.stackexchange.com/q/56023/39046">
          Typically not a good idea
        </Link>, but useful for something like "Next →".
      </div>
    ),
  }, {
    name: "children",
    required: true,
    type: "ComponentChild",
    default: null,
    notes: null,
  }];

  return (
    <ComponentDocsPage
      componentName="Button"
      sourceCodeUrl="https://github.com/adamzerner/rfui/blob/master/components/atoms/button.tsx"
      sections={sections}
      props={props}
    />
  );
};

// export default () => {
//   return (
//     <Stack class="gap-8">
//       <Examples title="Variant">
//         <Flex class="gap-3">
//           <Button variant="primary">
//             Submit
//           </Button>
//           <Button variant="secondary">Submit</Button>
//           <Button variant="tertiary">Submit</Button>
//         </Flex>
//       </Examples>
//       <Examples title="Danger variants">
//         <Flex class="gap-3">
//           <Button variant="danger-primary">
//             Submit
//           </Button>
//           <Button variant="danger-secondary">
//             Submit
//           </Button>
//           <Button variant="danger-tertiary">
//             Submit
//           </Button>
//         </Flex>
//       </Examples>
//       <Examples title="Size">
//         <Flex class="gap-3">
//           <Button variant="primary" size="sm">
//             Submit
//           </Button>
//           <Button variant="secondary" size="sm">Submit</Button>
//           <Button variant="tertiary" size="sm">Submit</Button>
//         </Flex>
//         <Flex class="gap-3">
//           <Button variant="primary" size="md">
//             Submit
//           </Button>
//           <Button variant="secondary" size="md">Submit</Button>
//           <Button variant="tertiary" size="md">Submit</Button>
//         </Flex>
//         <Flex class="gap-3">
//           <Button variant="primary" size="lg">
//             Submit
//           </Button>
//           <Button variant="secondary" size="lg">Submit</Button>
//           <Button variant="tertiary" size="lg">Submit</Button>
//         </Flex>
//         <Stack class="gap-3 w-full">
//           <Button variant="primary" size="block">Submit</Button>
//           <Button variant="secondary" size="block">Submit</Button>
//         </Stack>
//       </Examples>
//       <Examples title="Rounded">
//         <Flex class="gap-3">
//           <Button variant="primary" rounded="square">
//             Submit
//           </Button>
//           <Button variant="secondary" rounded="square">Submit</Button>
//           <Button variant="tertiary" rounded="square">Submit</Button>
//         </Flex>
//         <Flex class="gap-3">
//           <Button variant="primary" rounded="sm">
//             Submit
//           </Button>
//           <Button variant="secondary" rounded="sm">Submit</Button>
//           <Button variant="tertiary" rounded="sm">Submit</Button>
//         </Flex>
//         <Flex class="gap-3">
//           <Button variant="primary" rounded="lg">
//             Submit
//           </Button>
//           <Button variant="secondary" rounded="lg">Submit</Button>
//           <Button variant="tertiary" rounded="lg">Submit</Button>
//         </Flex>
//         <Flex class="gap-3">
//           <Button variant="primary" rounded="full">
//             Submit
//           </Button>
//           <Button variant="secondary" rounded="full">Submit</Button>
//           <Button variant="tertiary" rounded="full">Submit</Button>
//         </Flex>
//       </Examples>
//       <Examples title="Icon">
//         <Flex class="gap-3">
//           <Button variant="primary" icon={<span>←</span>}>
//             Previous
//           </Button>
//           <Button variant="secondary" icon={<span>←</span>}>Previous</Button>
//         </Flex>
//         <Flex class="gap-3">
//           <Button variant="primary" _rightIcon={<span>→</span>}>
//             Next
//           </Button>
//           <Button variant="secondary" _rightIcon={<span>→</span>}>Next</Button>
//         </Flex>
//       </Examples>
//       <Examples title="Disabled">
//         <Flex class="gap-3">
//           <Button disabled={true} variant="primary">
//             Submit
//           </Button>
//           <Button disabled={true} variant="secondary">Submit</Button>
//           <Button disabled={true} variant="tertiary">Submit</Button>
//         </Flex>
//       </Examples>
//       <Examples title="Loading">
//         <Flex class="gap-3">
//           <Button variant="primary" isLoading loadingContent="Submitting...">
//             Submit
//           </Button>
//           <Button variant="secondary" isLoading loadingContent="Submitting...">
//             Submit
//           </Button>
//           <Button variant="tertiary" isLoading loadingContent="Submitting...">
//             Submit
//           </Button>
//         </Flex>
//       </Examples>
//     </Stack>
//   );
// };
