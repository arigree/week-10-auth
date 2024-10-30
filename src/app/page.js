"use client";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main>
      <h1>Home</h1>
      <SignedOut>
        <SignInButton></SignInButton>
      </SignedOut>
      <SignedIn>
        <UserButton></UserButton>
      </SignedIn>
    </main>
  );
}
