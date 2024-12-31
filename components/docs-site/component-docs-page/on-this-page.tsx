import {
  LinkItemType,
  NavigationLinks,
} from "@/components/molecules/navigation-links.tsx";
import { titleToHref } from "@/utilities/title-to-href.ts";

type OnThisPageType = {
  examplesSectionTitles: string[];
  propsTableTitles: string[];
};

export const OnThisPage = (
  { examplesSectionTitles, propsTableTitles }: OnThisPageType,
) => {
  const linkItems: LinkItemType[] = [
    { name: "On this page", isHeader: true, children: [] },
    { name: "Overview", href: "#overview", inPage: true, children: [] },
    {
      name: "Examples",
      children: examplesSectionTitles.map((examplesSectionTitle) => ({
        name: examplesSectionTitle,
        href: `#example-${titleToHref(examplesSectionTitle)}`,
        inPage: true,
        children: [],
      })),
    },
    {
      name: "Props",
      children: propsTableTitles.map((propsTableTitle, i) => ({
        name: propsTableTitle,
        href: i === 0 ? "#props" : `#props-${titleToHref(propsTableTitle)}`,
        inPage: true,
        children: [],
      })),
    },
  ];

  return (
    <NavigationLinks
      linkItems={linkItems}
      class="sticky top-6 max-h-[90vh] max-w-[200px] overflow-y-auto"
    />
  );
};
