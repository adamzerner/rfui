import { PageProps } from "$fresh/server.ts";
import { Footer } from "@/components/docs-site/footer.tsx";
import { Navbar } from "@/components/docs-site/navbar.tsx";
import { Container } from "@/components/helpers/container.tsx";
import { Stack } from "@/components/helpers/stack.tsx";

export default ({ Component, route }: PageProps) => {
  return (
    <Stack class="min-h-screen">
      <Navbar route={route} />
      <Container size="xl" class="mb-6 mt-8 grow font-sans">
        <Component />
      </Container>
      <Footer />
    </Stack>
  );
};
