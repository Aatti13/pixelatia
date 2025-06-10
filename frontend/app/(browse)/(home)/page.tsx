import { UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <div>
      <UserButton afterSignOutUrl="/"/>
      <h1 className="text-red-500">Pixelatia</h1>
    </div>
  );
}
