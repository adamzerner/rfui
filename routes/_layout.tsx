import { PageProps } from "$fresh/server.ts";
import { Footer } from "@/components/docs-site/footer.tsx";
import { VerticalNavbar } from "@/components/docs-site/vertical-navbar.tsx";
import { Container } from "@/components/helpers/container.tsx";
import { Flex } from "@/components/helpers/flex.tsx";

export default ({ Component, route }: PageProps) => {
  return (
    <>
      <Flex>
        <VerticalNavbar route={route} />
        <Container size="2xl" class="grow font-sans">
          <Component />
        </Container>
      </Flex>
      <Footer />
    </>
  );

  // return (
  //   <Stack class="min-h-screen">
  //     <Navbar route={route} />
  //     <Container size="2xl" class="mb-6 mt-8 grow font-sans">
  //       <Component />
  //     </Container>
  //     <Footer />
  //   </Stack>
  // );
};
