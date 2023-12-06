import { Input } from "@/components/atoms/input.tsx";
import type { JSX } from "preact";

/** *
 * @function FormField
 * *
 * @example
 * <FormField type="text" label="Name" />
 */
export const FormField = (
  {
    label,
    type,
    size = "md",
    rounded = "sm",
    invalid = false,
    inputRest,
    helperText,
  }: {
    label: string;
    type?: JSX.HTMLAttributes<HTMLInputElement>["type"];
    size?: "sm" | "md" | "lg";
    rounded?: "square" | "sm" | "lg" | "full";
    invalid?: boolean;
    inputRest?: Omit<JSX.HTMLAttributes<HTMLInputElement>, "size">;
    helperText?: string;
  },
) => {
  const id = crypto.randomUUID();

  return (
    <div>
      <label for={id} class="mb-2">
        {label}
      </label>
      <div class="text-sm text-neutral-500 mb-1">{helperText}</div>
      <Input
        id={id}
        type={type}
        size={size}
        rounded={rounded}
        invalid={invalid}
        class="block"
        {...inputRest}
      />
    </div>
  );
};
