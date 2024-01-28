import { H1 } from "@/components/atoms/h1.tsx";
import { Text } from "@/components/atoms/text.tsx";

export default () => {
  return (
    <div class="max-w-prose text-lg">
      <H1>Page not found</H1>
      <Text>
        <p>The page you tried to access does not exist on rfui.com.</p>
      </Text>
    </div>
  );
};
