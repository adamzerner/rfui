import { Input } from "@/components/atoms/input.tsx";
import type { JSX } from "preact";

/*

TODO:
- Width
- Type

*/
/** *
 * @function FormField
 *
 * @param requiredIndicator See https://ux.stackexchange.com/q/840/39046 for a discussion.
 *
 * @example
 * <FormField type="text" label="Name" />
 */
export const FormField = (
  {
    label,
    type,
    required = false,
    requiredIndicator = "none",
    optionalIndicator = "none",
    size = "md",
    rounded = "sm",
    invalid = false,
    errorText,
    inputRest,
    helperText,
  }: {
    label: string;
    type?: JSX.HTMLAttributes<HTMLInputElement>["type"];
    required?: boolean;
    requiredIndicator?: "text" | "asterisk" | "none";
    optionalIndicator?: "text" | "asterisk" | "none";
    size?: "sm" | "md" | "lg";
    rounded?: "square" | "sm" | "lg" | "full";
    invalid?: boolean;
    errorText?: string;
    inputRest?: Omit<JSX.HTMLAttributes<HTMLInputElement>, "size">;
    helperText?: string;
  },
) => {
  const id = crypto.randomUUID();
  const [smallFontClass, normalFontClass] = (() => {
    switch (size) {
      case "sm":
        return ["text-xs", "text-sm"];
      case "md":
        return ["text-sm", "text-base"];
      case "lg":
        return ["text-base", "text-lg"];
    }
  })();

  return (
    <div>
      <label for={id} class={`mb-1 ${normalFontClass}`}>
        {label}{" "}
        {required && requiredIndicator === "text" && (
          <span class={`text-neutral-500 ${smallFontClass}`}>
            (required)
          </span>
        )}
        {required && requiredIndicator === "asterisk" && <sup>*</sup>}
        {!required && optionalIndicator === "text" && (
          <span class={`text-neutral-500 ${smallFontClass}`}>(optional)</span>
        )}
        {!required && optionalIndicator === "asterisk" && <sup>*</sup>}
      </label>
      <div class={`${smallFontClass} text-neutral-500 mb-1`}>{helperText}</div>
      {invalid && errorText && (
        <div class={`${smallFontClass} text-supporting-red-500 mb-1`}>
          🛑 {errorText}
        </div>
      )}
      <Input
        id={id}
        type={type}
        required={required}
        size={size}
        rounded={rounded}
        invalid={invalid}
        class="block"
        {...inputRest}
      />
    </div>
  );
};
