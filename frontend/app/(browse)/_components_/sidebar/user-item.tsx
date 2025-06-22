"use client";

import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { useSidebar } from "@/store/use-sidebar";
import { Skeleton } from "@/components/ui/skeleton";
import Link from "next/link";
import { UserAvatar } from "@/components/user-avatar";
import { LiveBadge } from "@/components/live-badge";

interface UserItemProps {
  username: string;
  imageURL: string;
  isLive?: boolean;
};

export const UserItem = ({
  username,
  imageURL,
  isLive,
}: UserItemProps) => {

  const pathname = usePathname();

  const { collapsed } = useSidebar((state) => state);
  const href = `/${username}`;
  const isActive = pathname === href;
  return (
    <Button
    asChild  
    variant={ isActive ? "default" : "dashboard"}
    className={cn(
      "w-full h-12",
      collapsed ? "justify-center" : "justify-start",
      isActive
    )}
    >
      <Link href={href}>
        <div className={cn(
          "flex items-center w-full gap-x-4",
          collapsed && "justify-center"
        )}>
          <UserAvatar
            username={username}
            imageURL={imageURL}
            isLive={true}
          />
          {!collapsed && (
            <p className="truncate">
              {username}
            </p>
          )}
          {!collapsed && isLive && (
            <LiveBadge className="ml-auto"/>
          )}
        </div>
      </Link>
      {/* Add user item details here */}
    </Button>
  )
}

export const UserItemSkeleton = () => {
  return (
    <li className="flex items-center gpa-x-4 px-3 py-2">
      <Skeleton className="min-h-[32px] min-w-[32px] rounded-full" />
      <div className="flex-1">
        <Skeleton className="h-6"/>
      </div>
    </li>
  )
}