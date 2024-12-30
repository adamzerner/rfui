import { JSX } from "preact";

export type ExamplesSectionType = {
  title: string;
  description?: string | JSX.Element;
  example: JSX.Element;
  exampleCode: JSX.Element;
};
