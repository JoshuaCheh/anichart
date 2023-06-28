import { Flex, Heading, Stack, Text } from "@chakra-ui/react";
import { UserDetails } from "../lib/types";
import { LogoutButton } from "./AuthButtons";
import { useSession } from "next-auth/react";

interface Props {
  userDetails: UserDetails | null;
}

const NavBar = ({ userDetails }: Props) => {
  const { status } = useSession();

  return (
    <Flex
      bg={"brand.moonstone"}
      paddingY={4}
      paddingX={10}
      alignItems={"center"}
      justifyContent={"space-between"}
    >
      <Heading color={"brand.white"}>The ANIME List</Heading>
      <Stack direction={"row"} gap={2} alignItems={"center"}>
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
        {status === "authenticated" ? <LogoutButton /> : <></>}
      </Stack>
    </Flex>
  );
};

export default NavBar;
