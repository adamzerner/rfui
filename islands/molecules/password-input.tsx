import { JSX } from "preact";
import { useState } from "preact/hooks";
import { Input, InputType } from "../../components/atoms/input.tsx";
import { Flex } from "../../components/helpers/flex.tsx";

export type PasswordInputType = {
  defaultVisibility?: "hidden" | "shown";
  containerProps?: Omit<JSX.IntrinsicElements["div"], "size">;
} & InputType;

/** *
 * @function PasswordInput
 *
 * Related reading:
 * - https://www.nngroup.com/articles/stop-password-masking
 * - https://www.lukew.com/ff/entry.asp?1653
 * - https://ux.stackexchange.com/q/144503/39046
 *
 * @see {@link https://rfui.deno.dev/molecules/password-input}
 *
 * @param defaultVisibility `"hidden"` or `"shown"`. Consider the factors at play here, including:
 * 1. Usability: Seeing * as you type instead of characters like "a" and "b" can hurt usability.
 * 2. Actual security: In public places, ***** can prevent malicious onlookers from stealing your password.
 * 3. Perceived security: Some users expect to see * as they type their password and might question how secure your website is if they see their password in plaintext by default instead.
 *
 * @example
 * <PasswordInput name="password" />
 */
export const PasswordInput = (
  {
    defaultVisibility = "hidden",
    containerProps,
    ...inputProps
  }: PasswordInputType,
) => {
  const [shouldShow, setShouldShow] = useState(
    defaultVisibility === "hidden" ? false : true,
  );
  const toggleShouldShow = () => {
    setShouldShow((v) => !v);
  };
  const buttonClass = (() => {
    let s = "bg-neutral-50 px-2";

    if ("size" in inputProps) {
      if (inputProps.size === "lg") {
        s += " text-md";
      } else if (inputProps.size === "md") {
        s += " text-sm";
      } else if (inputProps.size === "sm") {
        s += " text-xs";
      }
    }

    if ("rounded" in inputProps) {
      if (inputProps.rounded === "square") {
        s += " rounded-none";
      } else if (inputProps.rounded === "sm") {
        s += " rounded";
      } else if (inputProps.rounded === "lg") {
        s += " rounded-lg";
      } else if (inputProps.rounded === "full") {
        s += " rounded-full";
      } else {
        s += " rfui-rounded-default";
      }
    }

    if ("invalid" in inputProps) {
      if (inputProps.invalid) {
        s += " bg-supporting-red-50 text-supporting-red-900";
      }
    }

    return s;
  })();

  return (
    <Flex class="gap-2 items-stretch" {...containerProps}>
      <Input
        type={shouldShow ? "text" : "password"}
        {...inputProps}
      />
      <button
        type="button"
        onClick={toggleShouldShow}
        class={buttonClass}
      >
        {shouldShow ? "Hide" : "Show"}
      </button>
    </Flex>
  );
};
