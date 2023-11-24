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

  return (
    <div>
      <Input type={shouldShow ? "text" : "password"} />
      <Button size="sm" class="ml-1" onClick={toggleShouldShow}>
        {shouldShow ? "Hide" : "Show"}
      </Button>
    </div>
  );
};
