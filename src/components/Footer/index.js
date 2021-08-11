import { Flex, Box, Text, LinkBox, LinkOverlay, Icon } from "@chakra-ui/react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

function Footer() {
  const media = [
    {
      label: "github.com/glendonintendo",
      url: "https://github.com/glendonintendo/",
      icon: FaGithub,
    },
    {
      label: "linkedin.com/in/gleneggers/",
      url: "https://www.linkedin.com/in/gleneggers/",
      icon: FaLinkedin,
    },
  ];

  return (
    <>
      <Box w="100vw" padding="5vw 0 2vw 0">
        <Text w="100vw" align="center" fontWeight="semibold" fontSize="24px">
          Want to Connect?
        </Text>
        <Flex justify="center" fontSize="20px" w="60%" mx="auto">
          {media.map((medium, i) => (
            <LinkBox mx="20px">
              <Icon as={medium.icon}></Icon>
              <LinkOverlay href={medium.url} isExternal>
                {medium.label}
              </LinkOverlay>
            </LinkBox>
          ))}
        </Flex>
      </Box>

      <Flex as="footer" h="5vw" align="center" justify="center">
        <Text>Created and developed with ❤️ by Glen Eggers</Text>
      </Flex>
    </>
  );
}

export default Footer;
