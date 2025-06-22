import { cn } from "@/lib/utils";

interface LiveBadgeProps {
  className?: string;
}

export const LiveBadge = ({ className, }: LiveBadgeProps) => {
  return (
    <div
      className={cn(
        "bg-rose-500 text-center p-0.5 px-2 rounded-md  uppercase text-[8px] font-semibold tracking-wide",
        className
      )}
    >
      Live
    </div>
  );
};