"use client";

import { Heading, Stack } from "@chakra-ui/react";
import WelcomeModal from "../components/WelcomeModal";
import { useState } from "react";
import { UserDetails } from "../lib/types";
import { useSession } from "next-auth/react";

const Home = () => {
  const [welcomeModalOpen, setWelcomeModalOpen] = useState(true);
  const [userDetails, setUserDetails] = useState<UserDetails | null>(null);
  const { status } = useSession();

  return (
    <Stack direction={"column"} width={"max"} paddingX={"36"} paddingY={"16"}>
      <Heading as="h2" textAlign={"center"} width={"max"}>
        Ani Chart
      </Heading>

      <WelcomeModal
        isOpen={welcomeModalOpen}
        onClose={(inputDetails) => {
          setUserDetails(inputDetails);
          setWelcomeModalOpen(false);
        }}
      />
    </Stack>
  );
};

export default Home;
