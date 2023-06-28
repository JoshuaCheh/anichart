import { Center, Heading } from "@chakra-ui/react";

interface Props {
  currentYear: number;
}

const HomePageHeader = ({ currentYear }: Props) => {
  return (
    <Center>
      <Heading size="lg" textAlign={"center"} width={"max"} paddingY={"8"}>
        Top Anime for {currentYear} from AniList
      </Heading>
    </Center>
  );
};

export default HomePageHeader;
