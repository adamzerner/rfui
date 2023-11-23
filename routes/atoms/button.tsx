import { Button } from "@/components/atoms/button.tsx";
import { Examples } from "@/islands/demo/examples.tsx";

export default () => {
  return (
    <Examples githubUrl="https://github.com/adamzerner/rfui/blob/master/routes/atoms/button.tsx">
      <Button kind="primary">
        submit
      </Button>
      <Button kind="secondary">submit</Button>
      <Button kind="tertiary">submit</Button>
    </Examples>
  );
};
