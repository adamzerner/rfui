import { PageProps } from "$fresh/server.ts";
import { VerticalNavbar } from "@/components/docs-site/vertical-navbar.tsx";
import { Container } from "@/components/helpers/container.tsx";

export default ({ Component, route }: PageProps) => {
  return (
    <section class="sm:flex">
      <VerticalNavbar route={route} />
      <Container size="2xl" class="grow pb-8 font-sans">
        <Component />
      </Container>
    </section>
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
