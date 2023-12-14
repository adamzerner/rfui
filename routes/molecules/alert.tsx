import { Link } from "@/components/atoms/link.tsx";
import { Stack } from "@/components/helpers/stack.tsx";
import { Examples } from "@/islands/demo/examples.tsx";
import { Alert, AlertBody, AlertHeader } from "@/islands/molecules/alert.tsx";

export default () => {
  return (
    <Stack class="gap-8">
      <div>
        <div class="text-2xl mb-3">Source code</div>
        <Link href="https://github.com/adamzerner/rfui/blob/master/routes/molecules/alert.tsx">
          https://github.com/adamzerner/rfui/blob/master/routes/molecules/alert.tsx
        </Link>
      </div>
      <Examples title="Default">
        <Alert>
          Example
        </Alert>
      </Examples>
      <Examples title="AlertHeader and AlertBody">
        <Alert>
          <AlertHeader>Success</AlertHeader>
          <AlertBody>Your profile has been saved.</AlertBody>
        </Alert>
      </Examples>
      <Examples title="Variant">
        <Stack class="gap-5 w-full">
          <Alert variant="success">
            <AlertHeader>Success</AlertHeader>
            <AlertBody>Your profile has been saved.</AlertBody>
          </Alert>
          <Alert variant="info">
            <AlertHeader>Note</AlertHeader>
            <AlertBody>Your account has been updated.</AlertBody>
          </Alert>
          <Alert variant="warning">
            <AlertHeader>Warning</AlertHeader>
            <AlertBody>Your plan is set to expire.</AlertBody>
          </Alert>
          <Alert variant="danger">
            <AlertHeader>Danger</AlertHeader>
            <AlertBody>Your payment method is inactive.</AlertBody>
          </Alert>
          <Alert variant="neutral">
            <AlertHeader>Note</AlertHeader>
            <AlertBody>Your account has been updated.</AlertBody>
          </Alert>
        </Stack>
      </Examples>
      <Examples title="Dismissable">
        <Stack class="gap-5 w-full">
          <Alert isDismissable variant="success">
            <AlertHeader>Success</AlertHeader>
            <AlertBody>Your profile has been saved.</AlertBody>
          </Alert>
          <Alert isDismissable variant="info">
            <AlertHeader>Note</AlertHeader>
            <AlertBody>Your account has been updated.</AlertBody>
          </Alert>
          <Alert isDismissable variant="warning">
            <AlertHeader>Warning</AlertHeader>
            <AlertBody>Your plan is set to expire.</AlertBody>
          </Alert>
          <Alert isDismissable variant="danger">
            <AlertHeader>Danger</AlertHeader>
            <AlertBody>Your payment method is inactive.</AlertBody>
          </Alert>
          <Alert isDismissable variant="neutral">
            <AlertHeader>Note</AlertHeader>
            <AlertBody>Your account has been updated.</AlertBody>
          </Alert>
        </Stack>
      </Examples>
    </Stack>
  );
};
