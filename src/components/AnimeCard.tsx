import {
  Box,
  Card,
  CardBody,
  CardHeader,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import { Anime } from "../lib/queries";
import { stripHtml } from "string-strip-html";

interface Props {
  anime: Anime;
}

const AnimeCard = ({ anime }: Props) => {
  return (
    <Card>
      <CardHeader>
        <Flex justifyContent={"space-between"}>
          <Box>
            <Heading size="md" maxWidth={"xl"} noOfLines={[1]}>
              {anime.title.english || anime.title.romaji}
            </Heading>
          </Box>
          <Heading size="md">{anime.meanScore}</Heading>
        </Flex>
      </CardHeader>

      <CardBody>
        <Stack direction={"row"}>
          <Box boxSize="sm">
            <Image src={anime.coverImage.large} alt={anime.title.romaji} />
          </Box>
          <Box boxSize="sm">
            <Stack direction={"column"}>
              <Text noOfLines={[15]} overflow={"auto"}>
                {stripHtml(anime.description).result}
              </Text>
            </Stack>
          </Box>
        </Stack>
      </CardBody>
    </Card>
  );
};

export default AnimeCard;
