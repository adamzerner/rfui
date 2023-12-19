import { ComponentChild, JSX } from "preact";

export type TextareaType = {
  rounded?: "square" | "sm" | "lg";
  invalid?: boolean;
  children?: ComponentChild;
} & JSX.HTMLAttributes<HTMLTextAreaElement>;

/** *
 * @function Textarea
 *
 * @see {@link https://rfui.deno.dev/atoms/textarea}
 *
 * @example
 * <Textarea></Textarea>
 */
export const Textarea = (
  {
    rounded = "sm",
    invalid = false,
    children,
    ...rest
  }: TextareaType,
) => {
  let className =
    "border border-neutral-500 px-2 py-1 focus:outline-none focus:border-neutral-900 focus:shadow-sm";

  className += " " + (() => {
    switch (rounded) {
      case "square":
        return "rounded-none";
      case "sm":
        return "rounded";
      case "lg":
        return "rounded-lg";
    }
  })();

  if (rest.disabled) {
    className += " cursor-not-allowed bg-neutral-50";
  }

  if (rest.readOnly || rest.readonly) {
    className += " cursor-not-allowed";
  }

  if (invalid) {
    className +=
      " border-supporting-red-300 bg-supporting-red-50 text-supporting-red-900 focus:border-supporting-red-700";
  }

  if (rest.class) {
    className += ` ${rest.class}`;
  }

  return (
    <textarea
      {...rest}
      class={className}
    >
      {children}
    </textarea>
  );
};
