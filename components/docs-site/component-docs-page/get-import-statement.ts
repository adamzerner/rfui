import { PropsTableType } from "./props-tables.tsx";

export const getImportStatement = (
  componentName: string,
  propsTables: PropsTableType[],
) => {
  const componentsToImport = [
    componentName,
    ...propsTables.filter((p) => p.title).map((p) => p.title as string),
  ];
  const componentsToImportString = getComponentsToImportString(
    componentsToImport,
  );

  return `import { ${componentsToImportString}} from "rfui";`;
};

const getComponentsToImportString = (componentsToImport: string[]) =>
  componentsToImport.length >= 3
    ? handleThreeOrMore(componentsToImport)
    : componentsToImport.join(",") + " ";

const handleThreeOrMore = (componentsToImport: string[]) =>
  componentsToImport
    .map((c, i) =>
      i === 0
        ? `\n  ${c}`
        : i === componentsToImport.length - 1
        ? `  ${c}\n`
        : `  ${c}`
    )
    .join(`, \n`);
