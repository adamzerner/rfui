import { PageProps } from "$fresh/server.ts";
import { Footer } from "@/components/docs-site/footer.tsx";
import { Navbar } from "@/components/docs-site/navbar.tsx";
import { Container } from "@/components/helpers/container.tsx";

export default ({ Component, route }: PageProps) => {
  return (
    <>
      <Navbar route={route} />
      <Container size="xl" class="mt-8 mb-6 font-sans min-h-[200px]">
        <Component />
      </Container>
      <Footer />
    </>
  );
};
