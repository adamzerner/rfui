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
        <FormField label="Name" type="text" />
      </Examples>
      <Examples title="Helper text">
        <FormField
          label="Name"
          type="text"
          helperText="Your first and last name"
        />
      </Examples>
      <Examples title="Invalid">
        <FormField
          label="Name"
          type="text"
          invalid
        />
      </Examples>
      <Examples title="Error text">
        <FormField
          label="Name"
          type="text"
          invalid
          errorText="Invalid name"
        />
      </Examples>
      <Examples title="Helper and error text">
        <FormField
          label="Name"
          type="text"
          helperText="Your first and last name"
          invalid
          errorText="Invalid name"
        />
      </Examples>
      <Examples title="Required">
        <Stack class="gap-5">
          <FormField
            label="Name"
            type="text"
            required
            requiredIndicator="text"
          />
          <FormField
            label="Name"
            type="text"
            required
            requiredIndicator="asterisk"
          />
        </Stack>
      </Examples>
      <Examples title="Optional">
        <Stack class="gap-5">
          <FormField
            label="Name"
            type="text"
            optionalIndicator="text"
          />
          <FormField
            label="Name"
            type="text"
            optionalIndicator="asterisk"
          />
        </Stack>
      </Examples>
      <Examples title="Size">
        <Stack class="gap-5">
          <FormField
            label="Name"
            type="text"
            size="sm"
            required
            requiredIndicator="text"
            helperText="First and last name"
          />
          <FormField
            label="Name"
            type="text"
            size="md"
            required
            requiredIndicator="text"
            helperText="First and last name"
          />
          <FormField
            label="Name"
            type="text"
            size="lg"
            required
            requiredIndicator="text"
            helperText="First and last name"
          />
        </Stack>
      </Examples>
      <Examples title="Width">
        <Stack class="gap-5">
          <FormField
            label="Name on card"
            type="text"
            class="w-14"
          />
          <FormField
            label="Card number"
            type="text"
            class="w-14"
          />
          <FormField
            label="Expiry date"
            type="text"
            class="w-10"
          />
          <FormField
            label="CVC"
            type="text"
            class="w-10"
          />
        </Stack>
      </Examples>
      <Examples title="Type">
        <Stack class="gap-5">
          <FormField label="Name" type="text" />
          <FormField label="Email" type="email" />
          <FormField label="Age" type="number" />
          <FormField label="Password" type="password" value="foobar" />
          <FormField label="Birthday" type="date" />
          <FormField label="Appointment" type="datetime-local" />
          <FormField label="Bed time" type="time" />
          <FormField label="Profile photo" type="file" />
          <FormField label="Mood" type="range" />
          <FormField label="Favorite color" type="color" />
        </Stack>
      </Examples>
    </Stack>
  );
};
