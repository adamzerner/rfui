import { Button } from "@/components/atoms/button.tsx";
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
    if (size === "lg") {
      return "text-lg";
    } else if (size === "md") {
      return "text-md py-1";
    } else if (size === "sm") {
      return "text-sm";
    }
  })();

  return (
    <div class="flex gap-1 items-center">
      <Input
        type={shouldShow ? "text" : "password"}
        size={size}
        rounded={rounded}
        invalid={invalid}
      />
      <Button
        class={buttonClass}
        onClick={toggleShouldShow}
        rounded={rounded}
        variant={invalid ? "danger-tertiary" : "tertiary"}
      >
        {shouldShow ? "Hide" : "Show"}
      </Button>
    </div>
  );
};
