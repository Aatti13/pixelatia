"use client";
import { Button } from "@/components/ui/button";
import { useTransition } from "react";
import { onFollow } from "@/actions/follow";

interface ActionsProps {
  isFollowing: boolean;
};

export const Actions = ({isFollowing}:ActionsProps)=>{

  const [isPending, startTransition] = useTransition();

  const onClick = ()=>{
    startTransition(()=>{
      onFollow("12345"); // Replace "12345" with the actual user ID you want to follow
    });
  }
  return (
    <Button disabled={isFollowing || isPending} onClick={onClick} variant={"login"}>
      Follow
    </Button>
  )
}