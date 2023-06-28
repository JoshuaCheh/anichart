import {
  Box,
  Card,
  CardBody,
  CardHeader,
  Fade,
  Flex,
  Heading,
  Image,
  LinkOverlay,
  Stack,
  Text,
} from "@chakra-ui/react";
import { Anime } from "../lib/queries";

import { useState } from "react";
import AnimeDetailsModal from "./AnimeDetailsModal";

interface Props {
  anime: Anime;
}

const AnimeCard = ({ anime }: Props) => {
  const [detailsModalOpen, setDetailsModalOpen] = useState(false);
  const [onHoverCss, setOnHoverCss] = useState({});

  return (
    <Box>
      <Box
        onClick={() => {
          setDetailsModalOpen(true);
        }}
        style={{
          cursor: "pointer",
        }}
        bg={"gray.500"}
      >
        <Image
          style={onHoverCss}
          src={anime.coverImage.large}
          alt={anime.title.romaji}
          onMouseEnter={() =>
            setOnHoverCss({
              opacity: 0.4,
              transition: "opacity 0.3s",
            })
          }
          onMouseOut={() => setOnHoverCss({})}
        />
      </Box>
      <AnimeDetailsModal
        anime={anime}
        isOpen={detailsModalOpen}
        onClose={() => {
          setDetailsModalOpen(false);
        }}
      />
    </Box>
  );
};

export default AnimeCard;
