import { Link } from "@/components/atoms/link.tsx";
import { Flex } from "@/components/helpers/flex.tsx";
import { Stack } from "@/components/helpers/stack.tsx";

export default () => {
  return (
    <Flex class="mt-9">
      <Stack class="gap-8">
        <div>
          <div class="font-bold text-neutral-700 mb-4">Atoms</div>
          <Stack class="gap-2">
            <Link underline="hover" href="/atoms/badge">Badge</Link>
            <Link underline="hover" href="/atoms/button">Button</Link>
            <Link underline="hover" href="/atoms/checkbox">Checkbox</Link>
            <Link underline="hover" href="/atoms/highlight">Highlight</Link>
            <Link underline="hover" href="/atoms/input">Input</Link>
            <Link underline="hover" href="/atoms/link">Link</Link>
            <Link underline="hover" href="/atoms/radio-button">
              RadioButton
            </Link>
            <Link underline="hover" href="/atoms/select">Select</Link>
            <Link underline="hover" href="/atoms/table">Table</Link>
            <Link underline="hover" href="/atoms/textarea">Textarea</Link>
          </Stack>
        </div>
        <div>
          <div class="font-bold text-neutral-700 mb-4">Molecules</div>
          <Stack class="gap-2">
            <Link underline="hover" href="/molecules/card">Card</Link>
            <Link underline="hover" href="/molecules/form-field">
              FormField
            </Link>
            <Link underline="hover" href="/molecules/password-input">
              PasswordInput
            </Link>
            <Link underline="hover" href="/molecules/stepper">Stepper</Link>
          </Stack>
        </div>
        <div>
          <div class="font-bold text-neutral-700 mb-4">Organisms</div>
          <Stack class="gap-2">
          </Stack>
        </div>
        <div>
          <div class="font-bold text-neutral-700 mb-4">Helpers</div>
          <Stack class="gap-2s">
            <Link underline="hover" href="/helpers/flex">Flex</Link>
            <Link underline="hover" href="/helpers/stack">Stack</Link>
          </Stack>
        </div>
        <div>
          <div class="font-bold text-neutral-700 mb-4">Icons</div>
          <Stack class="gap-2">
            <Link underline="hover" href="/icons/new-tab-icon">NewTabIcon</Link>
          </Stack>
        </div>
      </Stack>
    </Flex>
  );
};
