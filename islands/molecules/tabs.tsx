import type { ComponentChild } from "preact";
import { Flex } from "../helpers/flex.tsx";

export type TabsType = {
  tabNames: string[];
  children: ComponentChild;
};

/*

TODO:
- UI of tabs
- UI of tab section
- Switching between tabs

*/

/** *
 * @function Tabs
 *
 * @see {@link https://rfui.deno.dev/molecules/tabs}
 *
 * @example
 * <Tabs />
 */
export const Tabs = (
  { tabNames, children }: TabsType,
) => {
  return (
    <div>
      <Flex>
        {tabNames.map((tabName) => (
          <Tab tabName={tabName} isActive={tabName === "First"} />
        ))}
      </Flex>
      <div class="mt-6">{children}</div>
    </div>
  );
};

const Tab = ({ tabName, isActive }: { tabName: string; isActive: boolean }) => {
  let containerClass =
    "border-b w-full text-center pb-4 cursor-pointer border-neutral-500";

  if (isActive) {
    containerClass += " border-b-2";
  }

  return <div class={containerClass}>{tabName}</div>;
};

export const TabSection = () => {
};
