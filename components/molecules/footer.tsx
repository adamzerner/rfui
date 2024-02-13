import type { ComponentChild, JSX } from "preact";
import { Link } from "../atoms/link.tsx";
import { Container, ContainerType } from "../helpers/container.tsx";
import { Flex } from "../helpers/flex.tsx";
import { Stack } from "../helpers/stack.tsx";

export type FooterType = {
  size?: ContainerType["size"];
  background?: "neutral" | "none";
  children: ComponentChild;
} & Omit<JSX.IntrinsicElements["footer"], "size">;

/** *
 * @function Footer
 *
 * UX guidelines: https://www.nngroup.com/articles/footers/
 *
 * @see {@link https://rfui.deno.dev/molecules/footer}
 *
 * @example
 * <Footer>
 *  <FooterColumn>
 *    <FooterHeading>Contact</FooterHeading>
 *    <FooterItem href="/email">Email</FooterItem>
 *    <FooterItem href="/phone">Phone</FooterItem>
 *  </FooterColumn>
 * </Footer>
 */
export const Footer = (
  {
    size = "md",
    background = "neutral",
    children,
    ...rest
  }: FooterType,
) => {
  const { class: restClass, ...restWithoutClass } = rest;
  let containerClass = "w-full py-8 md:py-10 mt-10 md:mt-12";

  containerClass += " " + (() => {
    switch (background) {
      case "neutral":
        return "bg-neutral-700 text-neutral-50";
      case "none":
        return "border-t border-t-neutral-100";
    }
  })();

  if (restClass) {
    containerClass += ` ${restClass}`;
  }

  return (
    <footer class={containerClass} {...restWithoutClass}>
      <Container size={size}>
        <Flex class="w-full gap-9 md:gap-10 flex-col md:flex-row">
          {children}
        </Flex>
      </Container>
    </footer>
  );
};

export const FooterColumn = ({ children }: { children: ComponentChild }) => {
  return <Stack class="gap-5">{children}</Stack>;
};

export const FooterHeading = (
  { background = "neutral", children }: {
    background?: "neutral" | "none";
    children: ComponentChild;
  },
) => {
  const textColor = background === "neutral"
    ? "text-neutral-200"
    : "text-neutral-500";

  return <div class={`text-xl font-bold mb-3 ${textColor}`}>{children}</div>;
};

export const FooterItem = (
  { href, children }: { href: string; children: ComponentChild },
) => {
  return <Link href={href} class="text-lg" underline="hover">{children}</Link>;
};
