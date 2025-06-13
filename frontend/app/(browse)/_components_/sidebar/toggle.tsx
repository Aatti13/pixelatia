"use client"

import { useSidebar } from '@/store/use-sidebar'
import React from 'react'
import { ArrowLeftFromLineIcon, ArrowRightFromLineIcon } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Hint } from '@/components/hint'


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
        <div className='hidden: lg:flex w-full items center justify-center pt-3 mb-4 '>
          <Hint label={label} side="right" asChild>
          <Button variant={"arrow"} onClick={onExpand}>
            <ArrowRightFromLineIcon className='mr-2'/>
          </Button>
          </Hint>
        </div>
      )}
      {!collapsed && (
        <div className="pr-3 pl-6 mt-3 mb-2 flex items-center w-full">
          <p className=' text-white font-semibold'>
            For You
          </p>
          <Hint label={label} side="left" asChild>
            <Button className='bg-transparent cursor-pointer h-auto p-2 ml-2'
            onClick={onCollapse}>
            <ArrowLeftFromLineIcon className='h-4 w-4'/>
            </Button>
          </Hint>
        </div>
      )}
      Toggle
    </>
  );
}
