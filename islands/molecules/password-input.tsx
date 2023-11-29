import { Input } from "@/components/atoms/input.tsx";
import { JSX } from "preact";
import { useState } from "preact/hooks";

/** *
 * @function PasswordInput
 *
 * @param defaultVisibility `"hidden"` or `"shown"`. Consider the factors at play here, including:
 * 1. Usability: Seeing * as you type instead of characters like "a" and "b" can hurt usability.
 * 2. Actual security: In public places, ***** can prevent malicious onlookers from stealing your password.
 * 3. Perceived security: Some users expect to see * as they type their password and might question how secure your website is if they see their password in plaintext by default instead.
 *
 * Related reading:
 * - https://www.nngroup.com/articles/stop-password-masking
 * - https://www.lukew.com/ff/entry.asp?1653
 * - https://ux.stackexchange.com/q/144503/39046
 *
 * @example
 * <PasswordInput name="password" />
 */
export const PasswordInput = (
  {
    size = "md",
    rounded = "sm",
    invalid = false,
    defaultVisibility = "hidden",
    ...rest
  }: {
    size?: "sm" | "md" | "lg";
    rounded?: "square" | "sm" | "lg" | "full";
    invalid?: boolean;
    defaultVisibility?: "hidden" | "shown";
  } & Omit<JSX.HTMLAttributes<HTMLDivElement>, "size">,
) => {
  const [shouldShow, setShouldShow] = useState(
    defaultVisibility === "hidden" ? false : true,
  );
  const toggleShouldShow = () => {
    setShouldShow((v) => !v);
  };
  const buttonClass = (() => {
    let s = "bg-neutral-50 px-1";

    if (size === "lg") {
      s += " text-md";
    } else if (size === "md") {
      s += " text-sm";
    } else if (size === "sm") {
      s += " text-xs";
    }

    if (rounded === "square") {
      s += " rounded-none";
    } else if (rounded === "sm") {
      s += " rounded";
    } else if (rounded === "lg") {
      s += " rounded-lg";
    } else if (rounded === "full") {
      s += " rounded-full";
    }

    if (invalid) {
      s += " bg-supporting-red-50 text-supporting-red-900";
    }

    return s;
  })();

  return (
    <div class="flex gap-1 items-stretch" {...rest}>
      <Input
        type={shouldShow ? "text" : "password"}
        size={size}
        rounded={rounded}
        invalid={invalid}
      />
      <button
        type="button"
        onClick={toggleShouldShow}
        class={buttonClass}
        style={{ minWidth: 45 }}
      >
        {shouldShow ? "Hide" : "Show"}
      </button>
    </div>
  );
};
