import type { JSX } from "preact";
import { PasswordInput } from "../../islands/molecules/password-input.tsx";
import { Input } from "../atoms/input.tsx";
import { Flex } from "../helpers/flex.tsx";
import { XCircleIcon } from "../icons/x-circle-icon.tsx";

export type FormFieldType = {
  label: string;
  name?: JSX.HTMLAttributes<HTMLInputElement>["name"];
  value?: JSX.HTMLAttributes<HTMLInputElement>["value"];
  type?: JSX.HTMLAttributes<HTMLInputElement>["type"] | "rfui-password-input";
  required?: boolean;
  requiredIndicator?: "text" | "asterisk" | "none";
  optionalIndicator?: "text" | "asterisk" | "none";
  helperText?: string;
  size?: "sm" | "md" | "lg";
  rounded?: "square" | "sm" | "lg" | "full";
  invalid?: boolean;
  errorText?: string;
  inputRest?: Omit<
    JSX.HTMLAttributes<HTMLInputElement>,
    "name" | "value" | "type" | "required" | "size" | "rounded" | "invalid"
  >;
} & Omit<JSX.HTMLAttributes<HTMLDivElement>, "size">;

/** *
 * @function FormField
 *
 * @see {@link https://rfui.deno.dev/molecules/form-field}
 *
 * @param requiredIndicator See https://ux.stackexchange.com/q/840/39046 for a discussion.
 *
 * @example
 * <FormField label="Name" />
 */
export const FormField = (
  {
    label,
    name,
    value,
    type,
    required = false,
    requiredIndicator = "none",
    optionalIndicator = "none",
    helperText,
    size = "md",
    rounded,
    invalid = false,
    errorText,
    inputRest,
    ...rest
  }: FormFieldType,
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
    <div {...rest}>
      <label for={id} class={`mb-1 block ${normalFontClass}`}>
        {label}{" "}
        {required && requiredIndicator === "text" && (
          <span class={`text-neutral-700 ${smallFontClass}`}>
            (required)
          </span>
        )}
        {required && requiredIndicator === "asterisk" && <sup>*</sup>}
        {!required && optionalIndicator === "text" && (
          <span class={`text-neutral-700 ${smallFontClass}`}>(optional)</span>
        )}
        {!required && optionalIndicator === "asterisk" && <sup>*</sup>}
      </label>
      <div class={`${smallFontClass} text-neutral-700 mb-1`}>{helperText}</div>
      {invalid && errorText && (
        <Flex
          class={`${smallFontClass} text-supporting-red-700 mb-1 gap-1 items-center`}
        >
          <XCircleIcon className={size === "sm" ? "w-4 h-4" : null} />{" "}
          {errorText}
        </Flex>
      )}
      {type === "rfui-password-input"
        ? (
          <PasswordInput
            id={id}
            name={name}
            value={value}
            required={required}
            size={size}
            rounded={rounded}
            invalid={invalid}
            class={`block w-full ${inputRest?.class}`}
            {...inputRest}
          />
        )
        : (
          <Input
            id={id}
            name={name}
            value={value}
            type={type}
            required={required}
            size={size}
            rounded={rounded}
            invalid={invalid}
            class={`block w-full ${inputRest?.class}`}
            {...inputRest}
          />
        )}
    </div>
  );
};
