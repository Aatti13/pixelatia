"use client"

import { useSidebar } from '@/store/use-sidebar'
import React from 'react'
import { ArrowLeftFromLineIcon, ArrowRightFromLineIcon } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Hint } from '@/components/hint'
import { Skeleton } from '@/components/ui/skeleton'


export const Toggle = () => {
  
  const {
    collapsed,
    onExpand,
    onCollapse
  } = useSidebar((state)=>state);

  const label = collapsed? "Expand" : "Collapse";
  return (
    <>
      {collapsed && (
        <div className='hidden lg:flex w-full items-center justify-center pt-3 mb-4'>
          <Hint label={label} side="right" asChild>
          <Button variant={"arrow"} onClick={onExpand}>
            <ArrowRightFromLineIcon className='mr-2'/>
          </Button>
          </Hint>
        </div>
      )}
      {!collapsed && (
        <div className="p-3 pl-6 mb-2 flex items-center w-full justify-between">
          <p className=' text-white font-semibold'>
            For You
          </p>
          <Hint label={label} side="right" asChild>
            <Button className='bg-transparent cursor-pointer h-auto p-2 ml-2'
            onClick={onCollapse}>
            <ArrowLeftFromLineIcon className='h-4 w-4'/>
            </Button>
          </Hint>
        </div>
      )}
    </>
  );
}

export const ToggleSkeleton = () => {
  return (
    <div className="p3 pl-6 mb-2 hidden lg:flex items-center justify-between w-full">
      <Skeleton className='h-6 w-[100px]'/>
      <Skeleton className='h-6 w-6'/>
    </div>
  )
}