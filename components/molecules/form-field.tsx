import type { ComponentProps } from "preact";
import { PasswordInput } from "../../islands/molecules/password-input.tsx";
import { Checkbox } from "../atoms/checkbox.tsx";
import { Input } from "../atoms/input.tsx";
import { Switch } from "../atoms/switch.tsx";
import { Textarea } from "../atoms/textarea.tsx";
import { Flex } from "../helpers/flex.tsx";
import { XCircleIcon } from "../icons/x-circle-icon.tsx";

export type FormFieldType = {
  label: string;
  name?: ComponentProps<"input">["name"];
  value?: ComponentProps<"input">["value"];
  type?:
    | ComponentProps<"input">["type"]
    | "switch"
    | "rfui-password-input"
    | "textarea";
  required?: boolean;
  requiredIndicator?: "text" | "asterisk" | "none";
  optionalIndicator?: "text" | "asterisk" | "none";
  helperText?: string;
  size?: "sm" | "md" | "lg";
  rounded?: "square" | "sm" | "lg" | "full";
  invalid?: boolean;
  errorText?: string;
  inputRest?: Omit<
    ComponentProps<"input">,
    "name" | "value" | "type" | "required" | "size" | "rounded" | "invalid"
  >;
  textareaRest?: Omit<
    ComponentProps<"textarea">,
    "id" | "name" | "value" | "required" | "invalid"
  >;
} & Omit<ComponentProps<"div">, "size">;

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
    textareaRest,
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
          <XCircleIcon class={size === "sm" ? "w-4 h-4" : undefined} />{" "}
          {errorText}
        </Flex>
      )}
      {type === "checkbox"
        ? (
          <Checkbox
            id={id}
            name={name}
            value={value}
            required={required}
            size={size}
            invalid={invalid}
            class={`mt-1 ${inputRest?.class}`}
            {...inputRest}
          />
        )
        : type === "switch"
        ? (
          <Switch
            id={id}
            name={name}
            value={value}
            required={required}
            class={`mt-1 ${inputRest?.class}`}
            {...inputRest}
          />
        )
        : type === "rfui-password-input"
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
        : type === "textarea"
        ? (
          <Textarea
            id={id}
            name={name}
            value={value}
            required={required}
            invalid={invalid}
            class={`block w-full ${textareaRest?.class}`}
            {...textareaRest}
          >
          </Textarea>
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
