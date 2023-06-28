"use client";

import { Box, Center, Grid, Skeleton } from "@chakra-ui/react";
import WelcomeModal from "../components/WelcomeModal";
import { useState } from "react";
import { UserDetails } from "../lib/types";
import { useSession } from "next-auth/react";
import NavBar from "../components/NavBar";
import HomePageHeader from "../components/home/HomePageHeader";
import LoginModal from "../components/LoginModal";
import LoggedInHomeContent from "../components/home";

const Home = () => {
  const { status } = useSession();

  const currentYear = new Date().getFullYear();

  const [welcomeModalOpen, setWelcomeModalOpen] = useState(true);

  const [userDetails, setUserDetails] = useState<UserDetails | null>(null);

  return (
    <>
      <NavBar userDetails={userDetails} />
      {status === "authenticated" ? (
        <>
          <WelcomeModal
            isOpen={welcomeModalOpen}
            onClose={(inputDetails) => {
              setUserDetails(inputDetails);
              setWelcomeModalOpen(false);
            }}
          />
          <Box>
            <HomePageHeader currentYear={currentYear} />
            <LoggedInHomeContent currentYear={currentYear} />
          </Box>
        </>
      ) : (
        <Box>
          <LoginModal />
          <HomePageHeader currentYear={currentYear} />
          <Center>
            <Grid
              templateColumns={{
                sm: "repeat(2, 1fr)",
                md: "repeat(3, 1fr)",
                xl: "repeat(5, 1fr)",
              }}
              gap={6}
            >
              <>
                <Skeleton height={326} width={230} />
                <Skeleton height={326} width={230} />
                <Skeleton height={326} width={230} />
              </>
            </Grid>{" "}
          </Center>
        </Box>
      )}
    </>
  );
};

export default Home;
