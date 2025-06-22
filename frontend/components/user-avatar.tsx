import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { Skeleton } from "@/components/ui/skeleton";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { LiveBadge } from "@/components/live-badge";


const avatarSizes = cva(
  "",
  {
    variants: {
      size: {
        default: "h-8 w-8",
        lg: "h-14 w-14",
        xl: "h-20 w-20",
      },
    },
    defaultVariants : {
      size: "default",
    },
  },
);

interface UserAvatarProps extends VariantProps<typeof avatarSizes> {
  username?: string;
  imageURL?: string;
  isLive?: boolean;
  showBadge?: boolean;
}

export const UserAvatar = ({
  username,
  imageURL,
  isLive,
  showBadge,
  size,
}: UserAvatarProps)=>{

  const canShowBadge = showBadge && isLive;

  return (
    <div className="relative">
      <Avatar className={cn(
        isLive && "",
        !isLive && "ring-2 ring-rose-500",
        avatarSizes({ size }),
      )}>
        <AvatarImage src={imageURL} className="object-cover"/>
        <AvatarFallback>  
        {username ? username[0] : ""}
        {username ? username[username.length-1] : ""}
        </AvatarFallback>
      </Avatar>
      {canShowBadge && (
        <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2">
          <LiveBadge />
        </div>
      )}
    </div>
  );
}

interface UserAvatarSkeletonProps extends VariantProps<typeof avatarSizes> {};

export const UserAvatarSkeleton = ({size,}: UserAvatarSkeletonProps) => {
  return (
    <Skeleton className={cn(
      "rounded-full",
      avatarSizes({size}),
    )}/>  
  );
};