"use client";

import { Button } from "@chakra-ui/react";
import { signIn, signOut } from "next-auth/react";

export const LoginButton = () => {
  return <Button onClick={() => signIn()}>Sign in</Button>;
};

export const LogoutButton = () => {
  return <Button onClick={() => signOut()}>Sign Out</Button>;
};
