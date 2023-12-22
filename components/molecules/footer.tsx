import { Link } from "@/components/atoms/link.tsx";
import { Container, ContainerType } from "@/components/helpers/container.tsx";
import { Flex } from "@/components/helpers/flex.tsx";
import { Stack } from "@/components/helpers/stack.tsx";
import type { ComponentChild, JSX } from "preact";

export type FooterType = {
  size?: ContainerType["size"];
  background?: "neutral" | "none";
  children: ComponentChild;
} & Omit<JSX.HTMLAttributes<HTMLElement>, "size">;

/** *
 * @function Footer
 *
 * UX guidelines: https://www.nngroup.com/articles/footers/
 *
 * @see {@link https://rfui.deno.dev/molecules/footer}
 *
 * @example
 * <Footer></Footer>
 */
export const Footer = (
  {
    size,
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

export const FooterHeading = ({ children }: { children: ComponentChild }) => {
  return <div class="text-xl font-bold mb-3 text-neutral-200">{children}</div>;
};

export const FooterItem = (
  { href, children }: { href: string; children: ComponentChild },
) => {
  return <Link href={href} class="text-lg" underline="hover">{children}</Link>;
};
