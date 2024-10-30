"use client";
import { SignInButton, UserProfile } from "@clerk/nextjs";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main>
      <h1>Home</h1>
      <SignInButton/>
    </main>
  );
}
