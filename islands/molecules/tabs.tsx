// deno-lint-ignore-file no-explicit-any
import type { ComponentChild, JSX } from "preact";
import { useState } from "preact/hooks";
import { Flex } from "../../components/helpers/flex.tsx";
import { getChildren } from "../../utilities/get-children.ts";

export type TabsType = {
  fullWidth?: boolean;
  children: ComponentChild;
} & JSX.IntrinsicElements["div"];

/** *
 * @function Tabs
 *
 * @see {@link https://rfui.deno.dev/molecules/tabs}
 *
 * @example
 * <Tabs>
 *   <TabSection tabName="First">One</TabSection>
 *   <TabSection tabName="Second">Two</TabSection>
 *   <TabSection tabName="Third">Three</TabSection>
 * </Tabs>
 */
export const Tabs = (
  { fullWidth = false, children, ...rest }: TabsType,
) => {
  const tabNames = getTabNames(children);
  const [activeTab, setActiveTab] = useState<string>(tabNames[0]);
  const activeTabSection = getActiveTabSection(children, activeTab);

  return (
    <div {...rest}>
      <Flex class="border-b border-b-neutral-500">
        {tabNames.map((tabName) => (
          <Tab
            tabName={tabName}
            activeTab={activeTab}
            onClick={() => {
              setActiveTab(tabName);
            }}
            fullWidth={fullWidth}
          />
        ))}
      </Flex>
      <div class="mt-6">{activeTabSection}</div>
    </div>
  );
};

const getTabNames = (_children: any) => {
  const children = getChildren(_children);

  if (!Array.isArray(children)) {
    return [children.props.tabName];
  }

  return children.map((child) => child.props.tabName);
};

const getActiveTabSection = (_children: any, tabName: string) => {
  const children = getChildren(_children);

  if (!Array.isArray(children)) {
    return children;
  }

  return children.find((child) => child.props.tabName === tabName);
};

const Tab = (
  { tabName, activeTab, onClick, fullWidth }: {
    tabName: string;
    activeTab: string;
    onClick: () => void;
    fullWidth: boolean;
  },
) => {
  const isActive = tabName === activeTab;
  let containerClass = "rfui-tab px-5 text-center py-4 cursor-pointer";

  if (isActive) {
    containerClass += " border-b text-neutral-900";
  } else {
    containerClass += " text-neutral-700";
  }

  if (fullWidth) {
    containerClass += " w-full";
  }

  return <div class={containerClass} onClick={onClick}>{tabName}</div>;
};

export const TabSection = (
  { tabName, children }: { tabName: string; children: ComponentChild },
) => {
  return <>{children}</>;
};
