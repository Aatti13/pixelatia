import React from 'react'

import { Wrapper } from './wrapper';
import { Toggle, ToggleSkeleton } from './toggle';
import { Recommended, RecommendedSkeleton } from './recommended';

import { getRecommended } from '@/lib/recommended-serivce';

export const Sidebar = async () => {
  // Fetch Followed Users
  // Fetch Recommended Users
  const recommended = await getRecommended();
  return (
    <Wrapper>
      <Toggle />
      <div className="space-y-4 pt-4 lg:pt-0">
      <Recommended data={recommended} />
      </div>
    </Wrapper>
  )
}

export const SidebarSkeleton = () => {
  return (
    <aside className='fixed left-0 flex flex-col w-[70px] lg:w-60 h-full border-r border-[#2d2e35] z-50'>
      <ToggleSkeleton />
      <RecommendedSkeleton />
    </aside>
  )
}
