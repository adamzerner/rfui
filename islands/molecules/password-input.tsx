import { Input } from "@/components/atoms/input.tsx";
import { useState } from "preact/hooks";

/** *
 * @function PasswordInput
 * *
 * @example
 * <Input type="text" />
 */
export const PasswordInput = (
  {
    size = "md",
    rounded = "sm",
    invalid = false,
  }: {
    size?: "sm" | "md" | "lg";
    rounded?: "square" | "sm" | "lg" | "full";
    invalid?: boolean;
  },
) => {
  const [shouldShow, setShouldShow] = useState(false);
  const toggleShouldShow = () => {
    setShouldShow((v) => !v);
  };
  const buttonClass = (() => {
    let s = `bg-${invalid ? "supporting-red" : "neutral"}-50 px-1`;

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

    return s;
  })();

  return (
    <div class="flex gap-1 items-stretch">
      <Input
        type={shouldShow ? "text" : "password"}
        size={size}
        rounded={rounded}
        invalid={invalid}
      />
      <button onClick={toggleShouldShow} class={buttonClass}>
        {shouldShow ? "Hide" : "Show"}
      </button>
    </div>
  );
};
