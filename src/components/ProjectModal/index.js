import { FiExternalLink } from "react-icons/fi";
import {
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Image,
  Stack,
  Text,
  Flex,
  LinkBox,
  LinkOverlay,
  Box,
  Badge,
  Icon,
} from "@chakra-ui/react";

function ProjectModal({ project, isOpen, onClose }) {
  if (!project) return <></>;

  return (
    <Modal isOpen={isOpen} onClose={onClose} size="lg">
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>{project.title}</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Image
            src={require(`../../assets/${project.image}`)?.default}
            alt={project.title}
            objectFit="cover"
            objectPosition="50% 0%"
            h="200px"
            w="100%"
          />
          <Box p={5}>
            <Stack isInline align="baseline">
              {project.badges.map((badge) => (
                <Badge
                  variant="solid"
                  variantColor="teal"
                  rounded="full"
                  px={2}
                >
                  {badge}
                </Badge>
              ))}
            </Stack>
            <Text fontWeight="light" fontSize="md" my="10px">
              {project.description}
            </Text>

            <Flex justify="space-around">
              <LinkBox>
                <LinkOverlay href={project.githubUrl} isExternal />
                Go To Repo <Icon as={FiExternalLink} />
              </LinkBox>
              <LinkBox>
                <LinkOverlay href={project.deployedUrl} isExternal />
                Deployed App <Icon as={FiExternalLink} />
              </LinkBox>
            </Flex>
          </Box>
        </ModalBody>

        <ModalFooter>
          <Button colorScheme="blue" mr={3} onClick={onClose}>
            Close
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}

export default ProjectModal;
