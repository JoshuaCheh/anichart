import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  InputGroup,
  InputLeftElement,
  Icon,
  ModalFooter,
  Button,
  Input,
  Stack,
  Text,
} from "@chakra-ui/react";
import { BsFillPersonFill } from "react-icons/bs";
import { MdTitle } from "react-icons/md";
import { UserDetails } from "../lib/types";
import { useState } from "react";

interface props {
  isOpen: boolean;
  onClose: (inputDetails: UserDetails) => void;
}

const WelcomeModal = ({ isOpen, onClose }: props) => {
  const [pageIndex, setPageIndex] = useState(0);
  const [username, setUserName] = useState("");
  const [jobTitle, setJobTitle] = useState("");

  return (
    <Modal
      isOpen={isOpen}
      onClose={() => {
        onClose({
          username,
          jobTitle,
        });
      }}
      closeOnOverlayClick={false}
    >
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Welcome</ModalHeader>
        <ModalBody>
          {pageIndex === 0 ? (
            <>
              <Text>Please enter your name:</Text>
              <InputGroup>
                <InputLeftElement>
                  <Icon as={BsFillPersonFill} />
                </InputLeftElement>
                <Input
                  placeholder="Username"
                  value={username}
                  onChange={(event) => {
                    setUserName(event.target.value);
                  }}
                />
              </InputGroup>
            </>
          ) : (
            <>
              <Text>Please enter your job title:</Text>
              <InputGroup>
                <InputLeftElement>
                  <Icon as={MdTitle} />
                </InputLeftElement>
                <Input
                  placeholder="Job Title"
                  value={jobTitle}
                  onChange={(event) => {
                    setJobTitle(event.target.value);
                  }}
                />
              </InputGroup>{" "}
            </>
          )}
        </ModalBody>

        <ModalFooter>
          {pageIndex === 0 ? (
            <Button
              variant="outline"
              onClick={() => {
                setPageIndex(1);
              }}
            >
              Next
            </Button>
          ) : (
            <Stack gap={"2"} direction={"row"}>
              <Button
                variant="outline"
                onClick={() => {
                  setPageIndex(0);
                }}
              >
                Back
              </Button>
              <Button
                isDisabled={!username || !jobTitle}
                colorScheme="blue"
                mr={3}
                onClick={() => {
                  onClose({
                    username,
                    jobTitle,
                  });
                }}
              >
                Submit
              </Button>
            </Stack>
          )}
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default WelcomeModal;
