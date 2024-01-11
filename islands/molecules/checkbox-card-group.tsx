import { ComponentChild } from "preact";
import { useState } from "preact/hooks";
import { Checkbox } from "../atoms/checkbox.tsx";
import { Flex } from "../helpers/flex.tsx";
import { Stack } from "../helpers/stack.tsx";

export type CheckboxCardGroupType = {
  children: ComponentChild;
};

export type CheckboxCardGroupItemType = {
  children: ComponentChild;
};

/** *
 * @function CheckboxCardGroup
 *
 * @see {@link https://rfui.deno.dev/molecules/checkbox-card-group}
 *
 * @example
 * <CheckboxCardGroup />
 */
export const CheckboxCardGroup = ({ children }: CheckboxCardGroupType) => {
  return (
    <Stack class="gap-3">
      {children}
    </Stack>
  );
};

export const CheckboxCardGroupItem = (
  { children }: CheckboxCardGroupItemType,
) => {
  const [isChecked, setIsChecked] = useState<boolean>(false);
  const toggleIsChecked = () => {
    setIsChecked((v) => !v);
  };
  let containerClass = "border p-5 rounded gap-5 items-center cursor-pointer";

  containerClass += isChecked
    ? " border-2 border-neutral-500"
    : " border-1 border-neutral-100 my-px";

  return (
    <Flex
      class={containerClass}
      onClick={toggleIsChecked}
    >
      <Checkbox checked={isChecked} />
      <div>
        {children}
      </div>
    </Flex>
  );
};
