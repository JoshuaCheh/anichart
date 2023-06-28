"use client";

import {
  Box,
  Button,
  Center,
  Grid,
  GridItem,
  Heading,
  Modal,
  ModalBody,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Skeleton,
} from "@chakra-ui/react";
import WelcomeModal from "../components/WelcomeModal";
import { useEffect, useState } from "react";
import { UserDetails } from "../lib/types";
import { signIn, useSession } from "next-auth/react";
import { useQuery } from "@apollo/client";
import {
  Anime,
  GET_ANI_LIST,
  GetAniListArgs,
  GetAniListResults,
} from "../lib/queries";
import AnimeCard from "../components/AnimeCard";
import NavBar from "../components/NavBar";

const Home = () => {
  const { status } = useSession();

  const currentYear = new Date().getFullYear();

  const [welcomeModalOpen, setWelcomeModalOpen] = useState(true);
  const [topAnime, setTopAnime] = useState<Anime[]>([]);
  const [userDetails, setUserDetails] = useState<UserDetails | null>(null);

  const { data, loading } = useQuery<GetAniListResults, GetAniListArgs>(
    GET_ANI_LIST,
    {
      variables: {
        seasonYear: currentYear,
      },
    }
  );

  useEffect(() => {
    if (data && !loading) {
      const animeList = data?.Page?.media;
      setTopAnime(animeList);
    }
  }, [data, loading]);

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
            <Center>
              <Heading
                size="lg"
                textAlign={"center"}
                width={"max"}
                paddingY={"8"}
              >
                Top Anime for {currentYear} from AniList
              </Heading>
            </Center>
            <Center>
              <Grid
                templateColumns={{
                  sm: "repeat(2, 1fr)",
                  md: "repeat(3, 1fr)",
                  xl: "repeat(5, 1fr)",
                }}
                gap={6}
              >
                {topAnime && !loading ? (
                  topAnime.map((anime) => (
                    <GridItem key={anime.id}>
                      <AnimeCard anime={anime} />
                    </GridItem>
                  ))
                ) : (
                  <>
                    <Skeleton height={326} width={230} />
                    <Skeleton height={326} width={230} />
                    <Skeleton height={326} width={230} />
                  </>
                )}
              </Grid>
            </Center>
          </Box>
        </>
      ) : (
        <Box>
          <Modal
            isOpen={true}
            onClose={() => {}}
            size={{ sm: "lg", md: "3xl" }}
          >
            <ModalOverlay />
            <ModalContent>
              <ModalHeader>
                <Center>
                  <Heading
                    size="lg"
                    textAlign={"center"}
                    width={"max"}
                    paddingY={"8"}
                  >
                    Welcome! To view content please login.
                  </Heading>
                </Center>
              </ModalHeader>
              <ModalBody>
                <Center>
                  <Button
                    width={"md"}
                    bg={"brand.moonstone"}
                    onClick={() => signIn()}
                  >
                    Login
                  </Button>
                </Center>
              </ModalBody>
            </ModalContent>
          </Modal>
          <Center>
            <Heading
              size="lg"
              textAlign={"center"}
              width={"max"}
              paddingY={"8"}
            >
              Top Anime for {currentYear} from AniList
            </Heading>
          </Center>
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
