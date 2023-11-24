import { Button } from "@/components/atoms/button.tsx";
import { Input } from "@/components/atoms/input.tsx";

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
  return (
    <div>
      <Input />
      <Button>Show</Button>
    </div>
  );
};
