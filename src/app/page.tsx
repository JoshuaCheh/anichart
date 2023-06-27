"use client";

import {
  Box,
  Card,
  Center,
  Container,
  Flex,
  Heading,
  Skeleton,
  Spinner,
  Stack,
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
    <Box paddingY={"16"}>
      <WelcomeModal
        isOpen={welcomeModalOpen}
        onClose={(inputDetails) => {
          setUserDetails(inputDetails);
          setWelcomeModalOpen(false);
        }}
      />
      <Center>
        <Heading as="h2" textAlign={"center"} width={"max"}>
          Top Anime for {currentYear} from AniList
        </Heading>
      </Center>
      <Center>
        {topAnime && !loading ? (
          <Stack>
            {topAnime.map((anime) => (
              <AnimeCard key={anime.id} anime={anime} />
            ))}
          </Stack>
        ) : (
          <Spinner />
        )}
      </Center>
    </Box>
  );
};

export default Home;
