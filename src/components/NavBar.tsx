import { Flex, Heading, Stack, Text } from "@chakra-ui/react";
import { UserDetails } from "../lib/types";

interface Props {
  userDetails: UserDetails | null;
}

const NavBar = ({ userDetails }: Props) => {
  return (
    <Flex
      bg={"brand.moonstone"}
      paddingY={4}
      paddingX={10}
      alignItems={"center"}
      justifyContent={"space-between"}
    >
      <Heading color={"brand.white"}>The ANIME List</Heading>
      {userDetails ? (
        <Stack direction={"row"} gap={8}>
          <Stack direction={"row"} gap={2} alignItems={"center"}>
            <Text size={"md"} fontWeight={"bold"}>
              Username:
            </Text>
            <Text size={"md"}>{userDetails.username}</Text>
          </Stack>
          <Stack direction={"row"} gap={2}>
            <Text size={"md"} fontWeight={"bold"}>
              Title:
            </Text>
            <Text size={"md"}>{userDetails.jobTitle} </Text>
          </Stack>
        </Stack>
      ) : (
        <></>
      )}
    </Flex>
  );
};

export default NavBar;
