import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <div>
      <div>This is a screen for Authenticated users only.</div>
      <div>
        <UserButton />
      </div>
    </div>
  );
}
