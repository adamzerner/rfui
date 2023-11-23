import { ComponentChild } from "preact";

export const Examples = (
  { githubUrl, children }: { githubUrl: string; children: ComponentChild },
) => {
  return (
    <div>
      <div class="mb-12">
        <a
          href={githubUrl}
          class="underline"
          rel="noopener noreferrer"
          target="_blank"
        >
          {githubUrl}
        </a>
      </div>
      <div class="flex flex-col gap-8 items-start">{children}</div>
    </div>
  );
};
