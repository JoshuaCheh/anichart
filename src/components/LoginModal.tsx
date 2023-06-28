import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  Center,
  Heading,
  ModalBody,
  Button,
} from "@chakra-ui/react";
import { signIn } from "next-auth/react";

const LoginModal = () => {
  return (
    <Modal isOpen={true} onClose={() => {}} size={{ sm: "lg", md: "3xl" }}>
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
  );
};

export default LoginModal;
