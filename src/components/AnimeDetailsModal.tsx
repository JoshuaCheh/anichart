import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  Stack,
  Text,
  Box,
  Card,
  CardBody,
  Flex,
  Heading,
  Image,
} from "@chakra-ui/react";
import { Anime } from "../lib/queries";
import { stripHtml } from "string-strip-html";

interface props {
  anime: Anime;
  isOpen: boolean;
  onClose: () => void;
}

const AnimeDetailsModal = ({ anime, isOpen, onClose }: props) => {
  return (
    <Modal
      isOpen={isOpen}
      onClose={() => {
        onClose();
      }}
      size={{ sm: "lg", md: "3xl" }}
    >
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>
          <Flex justifyContent={"space-between"} alignItems={"center"}>
            <Box>
              <Heading
                size="md"
                maxWidth={{ sm: "sm", md: "xl" }}
                noOfLines={[1]}
              >
                {anime.title.english || anime.title.romaji}
              </Heading>
            </Box>
            <Card bg={"brand.moonstone"}>
              <CardBody>
                <Heading size="md" color={"brand.white"}>
                  {anime.meanScore}
                </Heading>
              </CardBody>
            </Card>
          </Flex>
        </ModalHeader>
        <ModalBody>
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
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default AnimeDetailsModal;
