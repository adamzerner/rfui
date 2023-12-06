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
  }: {
    label: string;
    type?: JSX.HTMLAttributes<HTMLInputElement>["type"];
    size?: "sm" | "md" | "lg";
    rounded?: "square" | "sm" | "lg" | "full";
    invalid?: boolean;
    inputRest?: Omit<JSX.HTMLAttributes<HTMLInputElement>, "size">;
  },
) => {
  return (
    <div>
      <label>
        {label}
        <Input
          type={type}
          size={size}
          rounded={rounded}
          invalid={invalid}
          class="block"
          {...inputRest}
        />
      </label>
    </div>
  );
};
