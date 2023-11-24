import { Link } from "@/components/atoms/link.tsx";
import { Examples } from "@/islands/demo/examples.tsx";
import { PasswordInput } from "@/islands/molecules/password-input.tsx";

export default () => {
  return (
    <div class="flex flex-col gap-8">
      <div>
        <div class="text-2xl mb-3">Source code</div>
        <Link href="https://github.com/adamzerner/rfui/blob/master/routes/molecules/password-input.tsx">
          https://github.com/adamzerner/rfui/blob/master/routes/molecules/password-input.tsx
        </Link>
      </div>
      <Examples title="TODO">
        <div class="flex gap-3">
          <PasswordInput />
        </div>
      </Examples>
    </div>
  );
};
