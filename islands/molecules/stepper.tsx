import { Flex } from "@/components/helpers/flex.tsx";
import { JSX } from "preact";
import { useState } from "preact/hooks";

/** *
 * @function Stepper
 *
 * @example
 * <Stepper />
 */
export const Stepper = (
  {
    size = "md",
    startingValue = 0,
    ...rest
  }: {
    size?: "sm" | "md" | "lg";
    startingValue?: number;
  } & Omit<JSX.HTMLAttributes<HTMLDivElement>, "size">,
) => {
  const [value, setValue] = useState(startingValue);
  const increment = () => {
    setValue((v) => v + 1);
  };
  const decrement = () => {
    setValue((v) => v - 1);
  };
  let buttonClass = "border";
  let divClass = "border-y text-center";

  switch (size) {
    case "sm":
      buttonClass += " w-7 h-7";
      divClass += " w-7 h-7";
      break;
    case "md":
      buttonClass += " w-8 h-8";
      divClass += " w-8 h-8";
      break;
    case "lg":
      buttonClass += " w-9 h-9";
      divClass += " w-9 h-9";
      break;
  }

  return (
    <Flex {...rest}>
      <button
        type="button"
        onClick={decrement}
        class={buttonClass}
      >
        -
      </button>
      <div class={`${divClass} flex justify-center items-center`}>{value}</div>
      <button type="button" onClick={increment} class={buttonClass}>
        +
      </button>
    </Flex>
  );
};
