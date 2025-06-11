import { SignInButton, UserButton } from "@clerk/nextjs";
import { currentUser } from "@clerk/nextjs/server";

import { Button } from "@/components/ui/button";
import { UserIcon } from "lucide-react";
import Link from "next/link";

export const Actions = async () => {

  const user = await currentUser();
  return (
    <div>
      {!user && (
        <SignInButton>
          <Button variant={"login"}>
            Login
          </Button>
        </SignInButton>
      )}
      {!!user && (
        <div className="flex items-center">
          <Button variant={"dashboard"} className="mr-9 ml-5">
            <Link href={`/u/${user.username}`} className="flex items-center justify-around space-x-3">
              <span className="hidden lg:block">Dashboard</span>
              <UserIcon className="h-5 w-5 lg:ml-1"/>
            </Link>
          </Button>
          <UserButton afterSignOutUrl="/"/>
        </div>
      )}
    </div>
  );
}

export default Actions;