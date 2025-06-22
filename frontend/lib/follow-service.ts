import { db } from "@/lib/db";
import { getSelf } from "@/lib/auth-service";

export const isFollowingUser = async (id: string) => {
  try{
    const self = await getSelf();
    if (!self) {
      return false; // User is not authenticated
    }
    const otherUser = await db.user.findUnique({
      where: { id },
    });

    if(!otherUser) {
      throw new Error("User not found");
    }

    if(otherUser.id === self.id) {
      return true; // User cannot follow themselves
    }

    const existingFollow = await db.follow.findFirst({
      where: {
        followerId: self.id,
        followingId: otherUser.id,
      },
    });

    return !!existingFollow; 

  }catch (error) {
    console.error("Error checking following status:", error);
    return false;
  }
}

const followUser = async (id:string) =>{
  try{
    const otherUser = await db.user.findUnique({
      where: { id },
    });

    if(!otherUser) {
      throw new Error("User not found");
    }

    if(otherUser.id === (await getSelf()).id) {
      throw new Error("Cannot follow yourself");
    }

    const existingFollow = await db.follow.findFirst({
      where: {
        followerId: (await getSelf()).id,
        followingId: otherUser.id,
      },
    });

    if(existingFollow) {
      throw new Error("Already following this user");
    }

    const follow = await db.follow.create({
      data: {
        followerId: (await getSelf()).id,
        followingId: otherUser.id,
      },
      include: {
        follower: true,
        following: true,
      }
    })
  }catch(error) {
    console.error("Error following user:", error);
    throw new Error("Failed to follow user");
  }
}