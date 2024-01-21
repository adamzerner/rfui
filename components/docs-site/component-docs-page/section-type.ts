import { JSX } from "preact";

export type SectionType = {
  title: string;
  description?: string | JSX.Element;
  example: JSX.Element;
  exampleCode: JSX.Element;
};
