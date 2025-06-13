"use client"

import { useSidebar } from "@/store/use-sidebar";
import { cn } from "@/lib/utils";

interface WrapperProps {
  children: React.ReactNode;
};

export const Wrapper = ({children,}: WrapperProps)=>{

  const { collapsed } = useSidebar((state)=>state)
  return (
    <aside className={cn("text-white fixed left-0 flex flex-col w-60 bg-[var(--nav-clr)] h-full border-r border-[#2d2e35] z-50",
    collapsed && "w-[70px]")}>
      {children}
    </aside>
  )
}