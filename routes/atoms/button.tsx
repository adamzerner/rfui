import { Button } from "@/components/atoms/button.tsx";
import { Examples } from "@/islands/demo/examples.tsx";

export default () => {
  return (
    <Examples>
      <Button kind="primary">
        submit
      </Button>
      <Button kind="secondary">submit</Button>
      <Button kind="tertiary">submit</Button>
    </Examples>
  );
};
