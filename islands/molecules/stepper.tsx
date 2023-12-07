import { Flex } from "@/components/helpers/flex.tsx";
import { JSX } from "preact";
import { useState } from "preact/hooks";

/*

TODO:
- Min and max size + disabled

*/
/** *
 * @function Stepper
 *
 * @example
 * <Stepper />
 */
export const Stepper = (
  {
    size = "md",
    rounded = "sm",
    startingValue = 0,
    name,
    ...rest
  }: {
    size?: "sm" | "md" | "lg";
    rounded?: "square" | "sm" | "lg" | "full";
    startingValue?: number;
    name?: string;
  } & Omit<JSX.HTMLAttributes<HTMLDivElement>, "size">,
) => {
  const [value, setValue] = useState(startingValue);
  const increment = () => {
    setValue((v) => v + 1);
  };
  const decrement = () => {
    setValue((v) => v - 1);
  };
  let buttonClass =
    "border border-neutral-500 text-neutral-500 hover:text-neutral-700 hover:border-neutral-700";
  let leftButtonClass = "";
  let rightButtonClass = "";
  let divClass =
    "border-y border-neutral-500 flex justify-center items-center bg-neutral-50";

  switch (size) {
    case "sm":
      buttonClass += " w-7 h-7 text-lg";
      divClass += " w-7 h-7";
      break;
    case "md":
      buttonClass += " w-8 h-8 text-2xl";
      divClass += " w-8 h-8 text-xl";
      break;
    case "lg":
      buttonClass += " w-9 h-9 text-3xl";
      divClass += " w-9 h-9 text-2xl";
      break;
  }

  switch (rounded) {
    case "sm":
      leftButtonClass += " rounded-l-sm";
      rightButtonClass += " rounded-r-sm";
      break;
    case "lg":
      leftButtonClass += " rounded-l-lg";
      rightButtonClass += " rounded-r-lg";
      break;
    case "full":
      leftButtonClass += " rounded-l-full";
      rightButtonClass += " rounded-r-full";
      break;
  }

  return (
    <Flex {...rest}>
      {name &&
        <input type="hidden" name={name} value={value} />}
      <button
        type="button"
        onClick={decrement}
        class={`${buttonClass} ${leftButtonClass}`}
      >
        ﹣
      </button>
      <div class={divClass}>{value}</div>
      <button
        type="button"
        onClick={increment}
        class={`${buttonClass} ${rightButtonClass}`}
      >
        +
      </button>
    </Flex>
  );
};
