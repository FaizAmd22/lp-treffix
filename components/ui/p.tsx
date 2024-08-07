import { cn } from "@/lib/utils";

type TypographyPProps = {
  children: React.ReactNode;
  className?: string;
};

export function P({ children, className }: TypographyPProps) {
  return (
    <p className={cn("leading-7 [&:not(:first-child)]:mt-3", className)}>
      {children}
    </p>
  );
}
