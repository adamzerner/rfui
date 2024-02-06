// deno-lint-ignore-file no-explicit-any
import { ComponentChild, JSX, toChildArray } from "preact";
import { useState } from "preact/hooks";
import { Flex } from "../../components/helpers/flex.tsx";

export type TabsType = {
  fullWidth?: boolean;
  children: ComponentChild;
} & JSX.HTMLAttributes<HTMLDivElement>;

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

const getTabNames = (children: ComponentChild) => {
  const childrenArray: any[] = toChildArray(children);

  if (childrenArray.length === 1) {
    return [childrenArray[0].props.tabName];
  }

  return childrenArray.map((child) => child.props.tabName);
};

const getActiveTabSection = (children: ComponentChild, tabName: string) => {
  const childrenArray: any[] = toChildArray(children);

  if (childrenArray.length === 1) {
    return children;
  }

  return childrenArray.find((child) => child.props.tabName === tabName);
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
