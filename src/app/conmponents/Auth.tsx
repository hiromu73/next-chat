import React from "react";
import { SignedIn, SignedOut, UserButton, RedirectToSignIn } from "@clerk/nextjs";

const Auth = () => {
  return (
    <>
      <SignedIn>
        <UserButton />
      </SignedIn>
      <SignedOut>
        <RedirectToSignIn />
      </SignedOut>
    </>
  );
};

export default Auth;
