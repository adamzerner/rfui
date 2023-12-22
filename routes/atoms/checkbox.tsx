import { Checkbox } from "@/components/atoms/checkbox.tsx";
import { ComponentDocsPage } from "@/islands/demo/component-docs-page.tsx";

export default () => {
  const sections = [{
    title: "Basic",
    example: () => <Checkbox />,
    exampleCode: () => <Checkbox />,
  }];
  const props = [{
    name: "type",
    required: false,
    type: '"neutral" | "info" | "success" | "warning" | "danger"',
    default: '"neutral"',
    notes: null,
  }, {
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
    name: "children",
    required: true,
    type: "ComponentChild",
    default: null,
    notes: null,
  }];

  return (
    <ComponentDocsPage
      componentName="Checkbox"
      sourceCodeUrl="https://github.com/adamzerner/rfui/blob/master/components/atoms/checkbox.tsx"
      sections={sections}
      props={props}
    />
  );
};

// import { Checkbox } from "@/components/atoms/checkbox.tsx";
// import { Link } from "@/components/atoms/link.tsx";
// import { Stack } from "@/components/helpers/stack.tsx";
// import { Examples } from "@/islands/demo/examples.tsx";

// export default () => {
//   return (
//     <Stack class="gap-8">
//       <div>
//         <div class="text-2xl mb-3">Source code</div>
//         <Link href="https://github.com/adamzerner/rfui/blob/master/routes/atoms/checkbox.tsx">
//           https://github.com/adamzerner/rfui/blob/master/routes/atoms/checkbox.tsx
//         </Link>
//       </div>
//       <Examples title="Size">
//         <Stack class="gap-5">
//           <Checkbox size="sm" />
//           <Checkbox size="md" />
//           <Checkbox size="lg" />
//         </Stack>
//       </Examples>
//       <Examples title="Disabled">
//         <Checkbox disabled />
//       </Examples>
//       <Examples title="Invalid">
//         <Checkbox invalid />
//       </Examples>
//     </Stack>
//   );
// };
