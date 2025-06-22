import { isFollowingUser } from '@/lib/follow-service';
import { getUserByUsername } from '@/lib/user-service';
import { notFound } from 'next/navigation';
import React from 'react'
import { Actions } from './_components/actions';

interface UserPageProps {
  params: {
    username: string;
  };
};

const UserPage = async ({ params }:UserPageProps) => {

  const user = await getUserByUsername(params.username);
  if(!user) {
    notFound(); // If user is not found, return a 404 page
  }

  const isFollowing = await isFollowingUser(user.id);

  return (
    <div className='text-white flex flex-col gap-y-4'>
      <p>Username: {user.username}</p>
      <p>User ID: {user.id}</p>
      <p>Is Following: {`${isFollowingUser}`}</p>
      <Actions isFollowing={isFollowing}/>
    </div>
  )
}

export default UserPage
