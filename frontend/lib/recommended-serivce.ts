import { db } from "./db";
import { getSelf } from "@/lib/auth-service";

export const getRecommended = async ()=>{
  let userID;

  try{
    const self = await getSelf();
    userID = self?.id;
  }catch {
    userID = null;
  }

  let users = [];
  if(userID) {

    users = await db.user.findMany({
      where: {
        NOT: {
          id: userID
        }
      },
      orderBy: {
        createdAt: "desc"
      }
    });
  }else{
    users = await db.user.findMany({
      orderBy: {
        createdAt: "desc"
      },
      take: 5// Limit to 10 users if not authenticated
    });
  }
  return users;
}