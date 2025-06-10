import { Webhook } from "svix";
import { headers } from "next/headers";
import { WebhookEvent } from "@clerk/nextjs/server";

import { db } from "@/lib/db";

export async function POST(req: Request) {
  const WEBHOOK_SECRET = process.env.CLERK_WEBHOOK_SECRET;

  if(!WEBHOOK_SECRET) {
    throw new Error('Pease add CLERK_WEBHOOK_SECRET from Clerk Dashboard to .env or .env.local')
  }

  const headerPayLoad = await headers();
  const svix_id = headerPayLoad.get("svix-id");
  const svix_timestamp = headerPayLoad.get("svix-timestamp");
  const svix_signature = headerPayLoad.get("svix-signature");

  if(!svix_id || !svix_timestamp || !svix_signature) {
    return new Response("Error occurred -- no svix headers", {
      status: 400
    })
  }

  const payload = await req.json();
  const body = JSON.stringify(payload);

  const webhook = new Webhook(WEBHOOK_SECRET);

  let event: WebhookEvent

  try{
    event = webhook.verify(body, {
      "svix-id": svix_id as string,
      "svix-timestamp": svix_timestamp as string,
      "svix-signature": svix_signature as string
    }) as WebhookEvent
  }catch(error) {
    console.error(`Error Verifying webhook: ${error}`);
    return new Response('Error Occurred', {
      status: 400
    })
  }

  const eventType = event.type
  
  if(eventType === "user.created") {
    await db.user.create({
      data: {
        externalUserId: payload.data.id,
        username: payload.data.username,
        imageURL: payload.data.image_url
      }
    })
  }

  if(eventType === "user.updated") {
    const currentUser = await db.user.findUnique({
      where: {
        externalUserId: payload.data.id
      }
    });

    if(!currentUser) {
      return new Response("User Not Found", {status: 404});
    }

    await db.user.update({
      where: {
        externalUserId: payload.data.id
      },
      data: {
        username: payload.data.username,
        imageURL: payload.data.image_url
      }
    });
  }

  if(eventType === "user.deleted") {
    await db.user.delete({
      where: {
        externalUserId: payload.data.id,
      },
    });
  }

  return new Response('Webhook received', { status: 200 })
}