import { Link } from "@/components/atoms/link.tsx";
import { Stack } from "@/components/helpers/stack.tsx";
import { FormField } from "@/components/molecules/form-field.tsx";
import { Examples } from "@/islands/demo/examples.tsx";

export default () => {
  return (
    <Stack class="gap-8">
      <div>
        <div class="text-2xl mb-3">Source code</div>
        <Link href="https://github.com/adamzerner/rfui/blob/master/routes/molecules/form-field.tsx">
          https://github.com/adamzerner/rfui/blob/master/routes/molecules/form-field.tsx
        </Link>
      </div>
      <Examples title="Default">
        <FormField type="text" label="Name" />
      </Examples>
      <Examples title="Helper text">
        <FormField
          type="text"
          label="Name"
          helperText="Your first and last name"
        />
      </Examples>
      <Examples title="Invalid">
        <FormField
          type="text"
          label="Name"
          invalid
        />
      </Examples>
      <Examples title="Error text">
        <FormField
          type="text"
          label="Name"
          invalid
          errorText="Invalid name"
        />
      </Examples>
      <Examples title="Helper and error text">
        <FormField
          type="text"
          label="Name"
          helperText="Your first and last name"
          invalid
          errorText="Invalid name"
        />
      </Examples>
      <Examples title="Required">
        <Stack class="gap-5">
          <FormField
            type="text"
            label="Name"
            required
            requiredIndicator="text"
          />
          <FormField
            type="text"
            label="Name"
            required
            requiredIndicator="asterisk"
          />
        </Stack>
      </Examples>
      <Examples title="Optional">
        <Stack class="gap-5">
          <FormField
            type="text"
            label="Name"
            optionalIndicator="text"
          />
          <FormField
            type="text"
            label="Name"
            optionalIndicator="asterisk"
          />
        </Stack>
      </Examples>
      <Examples title="Size">
        <Stack class="gap-5">
          <FormField
            type="text"
            label="Name"
            size="sm"
            required
            requiredIndicator="text"
            helperText="First and last name"
          />
          <FormField
            type="text"
            label="Name"
            size="md"
            required
            requiredIndicator="text"
            helperText="First and last name"
          />
          <FormField
            type="text"
            label="Name"
            size="lg"
            required
            requiredIndicator="text"
            helperText="First and last name"
          />
        </Stack>
      </Examples>
    </Stack>
  );
};
