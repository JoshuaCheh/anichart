"use client";

import {
  Box,
  Card,
  Center,
  Container,
  Flex,
  Grid,
  GridItem,
  Heading,
  Skeleton,
  Spinner,
  Stack,
  Text,
  Wrap,
} from "@chakra-ui/react";
import WelcomeModal from "../components/WelcomeModal";
import { useEffect, useState } from "react";
import { UserDetails } from "../lib/types";
import { useSession } from "next-auth/react";
import { useQuery } from "@apollo/client";
import {
  Anime,
  GET_ANI_LIST,
  GetAniListArgs,
  GetAniListResults,
} from "../lib/queries";
import AnimeCard from "../components/AnimeCard";
import { Colors } from "../lib/theme/colors";
import NavBar from "../components/NavBar";

const Home = () => {
  const currentYear = new Date().getFullYear();
  const [welcomeModalOpen, setWelcomeModalOpen] = useState(true);
  const [topAnime, setTopAnime] = useState<Anime[]>([]);
  const [userDetails, setUserDetails] = useState<UserDetails | null>(null);
  const { status } = useSession();

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
      <WelcomeModal
        isOpen={welcomeModalOpen}
        onClose={(inputDetails) => {
          setUserDetails(inputDetails);
          setWelcomeModalOpen(false);
        }}
      />
      <Box>
        <Center>
          <Heading size="lg" textAlign={"center"} width={"max"} paddingY={"8"}>
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
  );
};

export default Home;
