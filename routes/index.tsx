import { Link } from "@/components/atoms/link.tsx";

export default () => {
  return (
    <div class="flex flex-col gap-5">
      <div>
        <div>Atoms</div>
        <ul class="list-disc list-inside">
          <li>
            <Link href="/atoms/badge">Badge</Link>
          </li>
          <li>
            <Link href="/atoms/button">Button</Link>
          </li>
          <li>
            <Link href="/atoms/input">Input</Link>
          </li>
          <li>
            <Link href="/atoms/link">Link</Link>
          </li>
        </ul>
      </div>
      <div>
        <div>Molecules</div>
        <ul class="list-disc list-inside">
          <li>
            <Link href="/molecules/password-input">PasswordInput</Link>
          </li>
        </ul>
      </div>
      <div>
        <div>Organisms</div>
        <ul>
        </ul>
      </div>
      <div>
        <div>Helpers</div>
        <ul class="list-disc list-inside">
          <li>
            <Link href="/helpers/flex">Flex</Link>
          </li>
        </ul>
      </div>
      <div>
        <div>Icons</div>
        <ul class="list-disc list-inside">
          <li>
            <Link href="/icons/new-tab-icon">NewTabIcon</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};
