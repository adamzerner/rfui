import { ComponentChild } from "preact";
import { useState } from "preact/hooks";
import { Checkbox, CheckboxType } from "../atoms/checkbox.tsx";
import { Flex } from "../helpers/flex.tsx";
import { Stack } from "../helpers/stack.tsx";

export type CheckboxCardGroupType = {
  padding?: "sm" | "md" | "lg";
  rounded?: "square" | "sm" | "lg";
  children: ComponentChild;
};

export type CheckboxCardGroupItemType = {
  defaultIsChecked?: boolean;
  onChange?: (isChecked: boolean) => void;
  checkboxRest?: Omit<CheckboxType, "size">;
  children: ComponentChild;
};

/** *
 * @function CheckboxCardGroup
 *
 * @see {@link https://rfui.deno.dev/molecules/checkbox-card-group}
 *
 * @example
 * <CheckboxCardGroup>
 *   <CheckboxCardGroupItem>One</CheckboxCardGroupItem>
 *   <CheckboxCardGroupItem>Two</CheckboxCardGroupItem>
 *   <CheckboxCardGroupItem>Three</CheckboxCardGroupItem>
 * </CheckboxCardGroup>
 */
export const CheckboxCardGroup = (
  { padding = "md", rounded = "sm", children }: CheckboxCardGroupType,
) => {
  const id = crypto.randomUUID();
  let containerClass = `checkbox-card-group-${id}`;

  containerClass += ` gap-${padding === "sm" ? 2 : padding === "md" ? 3 : 4}`;

  return (
    <>
      <style>
        {`
        .checkbox-card-group-${id} .checkbox-card-group-item {
          padding: var(--spacing-${
          padding === "sm" ? 3 : padding === "md" ? 5 : 7
        });
          border-radius: var(--spacing-${
          rounded === "square" ? 0 : rounded === "sm" ? 1 : 2
        });
        }

        .checkbox-card-group-${id} .rfui-checkbox {
          width: var(--spacing-${
          padding === "sm" ? 4 : padding === "md" ? 5 : 6
        });
          height: var(--spacing-${
          padding === "sm" ? 4 : padding === "md" ? 5 : 6
        });
        }

        .checkbox-card-group-${id} .checkbox-card-group-item {
          gap: var(--spacing-${
          padding === "sm" ? 3 : padding === "md" ? 4 : 5
        });
        }
      `}
      </style>
      <Stack class={containerClass}>
        {children}
      </Stack>
    </>
  );
};

export const CheckboxCardGroupItem = (
  { defaultIsChecked = false, onChange, checkboxRest, children }:
    CheckboxCardGroupItemType,
) => {
  const [isChecked, setIsChecked] = useState<boolean>(defaultIsChecked);
  const handleClick = () => {
    if (onChange) {
      onChange(!isChecked);
    }

    setIsChecked(!isChecked);
  };
  let containerClass =
    "checkbox-card-group-item border p-5 rounded items-center cursor-pointer";

  containerClass += isChecked
    ? " border-2 border-neutral-500"
    : " border-2 border-neutral-100";

  return (
    <Flex
      class={containerClass}
      onClick={handleClick}
    >
      <Checkbox checked={isChecked} {...checkboxRest} />
      <div>
        {children}
      </div>
    </Flex>
  );
};
