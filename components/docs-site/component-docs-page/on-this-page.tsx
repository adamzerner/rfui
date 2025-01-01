import {
  LinkItemType,
  NavigationLinks,
} from "@/components/molecules/navigation-links.tsx";
import { titleToHref } from "@/utilities/title-to-href.ts";

type OnThisPageType = {
  exampleTitles: string[];
  propsTableTitles: string[];
};

export const OnThisPage = (
  { exampleTitles, propsTableTitles }: OnThisPageType,
) => {
  const linkItems: LinkItemType[] = [
    { name: "On this page", isHeader: true },
    { name: "Overview", href: "#overview", inPage: true },
    {
      name: "Examples",
      children: exampleTitles.map((title) => ({
        name: title,
        href: `#example-${titleToHref(title)}`,
        inPage: true,
      })),
    },
    {
      name: "Props",
      children: propsTableTitles.map((title, i) => ({
        name: title,
        href: i === 0 ? "#props" : `#props-${titleToHref(title)}`,
        inPage: true,
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
