import { getChildren } from "@/utilities/get-children.ts";
import {
  cloneElement,
  ComponentChild,
  ComponentProps,
  toChildArray,
} from "preact";
import {
  RadioButton,
  RadioButtonType,
} from "../../components/atoms/radio-button.tsx";
import { Stack } from "../../components/helpers/stack.tsx";

export type RadioButtonGroupType = {
  name?: string;
  onChange?: (newSelectedVal: RadioButtonType["value"]) => void;
  children: ComponentChild;
};

export type RadioButtonGroupItemType = {
  name?: string;
  value?: RadioButtonType["value"];
  radioButtonRest?: Omit<RadioButtonType, "size" | "name" | "value">;
  children: ComponentChild;
} & ComponentProps<"label">;

/** *
 * @function RadioButtonGroup
 *
 * @see {@link https://rfui.deno.dev/molecules/radio-button-group}
 *
 * @example
 * <RadioButtonGroup name="plan">
 *   <RadioButtonGroupItem value="free">
 *     Free
 *   </RadioButtonGroupItem>
 *   <RadioButtonGroupItem value="basic">
 *     Basic
 *   </RadioButtonGroupItem>
 *   <RadioButtonGroupItem value="premium">
 *     Premium
 *   </RadioButtonGroupItem>
 * </RadioButtonGroup>
 */

export const RadioButtonGroup = (
  { name, children, onChange }: RadioButtonGroupType,
) => {
  const theChildren = toChildArray(getChildren(children));

  return (
    <Stack class="gap-3">
      {theChildren
        // deno-lint-ignore no-explicit-any
        .map((child: any) =>
          cloneElement(child, {
            name,
            onClick: () => {
              if (onChange) {
                onChange(child.props.value);
              }
            },
          })
        )}
    </Stack>
  );
};

export const RadioButtonGroupItem = (
  { name, value, radioButtonRest, children, ...rest }: RadioButtonGroupItemType,
) => {
  const { class: restClass, ...restWithoutClass } = rest;

  return (
    <label
      class={`flex gap-3 items-center cursor-pointer ${restClass}`}
      {...restWithoutClass}
    >
      <RadioButton
        name={name}
        value={value}
        {...radioButtonRest}
      />
      <div>
        {children}
      </div>
    </label>
  );
};