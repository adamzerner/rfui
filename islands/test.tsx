import { Badge } from "@/components/atoms/badge.tsx";

export const Test = () => {
  return (
    <div>
      <Badge
        onClick={() => {
          console.log("here");
        }}
      >
        Example
      </Badge>
    </div>
  );
};
