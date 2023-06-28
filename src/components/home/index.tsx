import { Center, Grid, GridItem, Skeleton } from "@chakra-ui/react";
import AnimeCard from "../AnimeCard";
import { useEffect, useState } from "react";
import {
  GetAniListResults,
  GetAniListArgs,
  GET_ANI_LIST,
  Anime,
} from "../../lib/queries";
import { useQuery } from "@apollo/client";

interface Props {
  currentYear: number;
}

const LoggedInHomeContent = ({ currentYear }: Props) => {
  const [topAnime, setTopAnime] = useState<Anime[]>([]);
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
  );
};

export default LoggedInHomeContent;
