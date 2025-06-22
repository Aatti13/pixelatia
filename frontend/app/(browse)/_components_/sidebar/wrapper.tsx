"use client"

import { useSidebar } from "@/store/use-sidebar";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";
import { ToggleSkeleton } from "./toggle";
import { RecommendedSkeleton } from "./recommended";

interface WrapperProps {
  children: React.ReactNode;
};

export const Wrapper = ({children,}: WrapperProps)=>{

  const [isClient, setIsClient] = useState(false)
  const { collapsed } = useSidebar((state)=>state)

  useEffect(()=>{
    setIsClient(true);
  }, []);

  if(!isClient) {
    return (
      <aside className="text-white mt-5 fixed left-0 flex flex-col w-[70px] lg:w-60 bg-[var(--nav-clr)] h-full border-r border-[#2d2e35] z-50">
        <ToggleSkeleton />
        <RecommendedSkeleton />
      </aside>
    )
  }
  return (
    <aside className={cn("text-white fixed left-0 flex flex-col w-60 bg-[var(--nav-clr)] h-full border-r border-[#2d2e35] z-50",
    collapsed && "w-[70px]")}>
      {children}
    </aside>
  )
}