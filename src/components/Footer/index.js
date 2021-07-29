import { Flex, Box, Text, LinkBox, LinkOverlay, Icon } from "@chakra-ui/react";
import { FaInstagram, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

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
      <Flex w="100vw" padding="5vw 0" justify="center" wrap="wrap">
        <Text w="100vw" align="center">Want to Connect?</Text>
        <Flex justify="space-around">
          {media.map((medium, i) => (
            <LinkBox>
              <Icon as={medium.icon}></Icon>
              <LinkOverlay href={medium.url} isExternal>
                {medium.label}
              </LinkOverlay>
            </LinkBox>
          ))}
        </Flex>
      </Flex>

      <Flex as="footer" h="5vw" align="center" justify="center">
        <Text>Created and developed with ❤️ by Glen Eggers</Text>
      </Flex>
    </>
  );
}

export default Footer;
