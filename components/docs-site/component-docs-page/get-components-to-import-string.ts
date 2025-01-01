export const getComponentsToImportString = (componentsToImport: string[]) =>
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
