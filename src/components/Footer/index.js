import {
  Box,
  Text,
  LinkBox,
  LinkOverlay,
  Icon,
  HStack,
} from "@chakra-ui/react";
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
    <Box padding="2vw 0 2vw 0">
      <Text align="center" fontWeight="bold" fontSize="24px">
        Want to Connect?
      </Text>
      <HStack justify="center" fontSize="20px" w="60%" mx="auto">
        {media.map((medium, i) => (
          <LinkBox mx="20px">
            <HStack>
              <Icon as={medium.icon}></Icon>
              <LinkOverlay href={medium.url} isExternal>
                {medium.label}
              </LinkOverlay>
            </HStack>
          </LinkBox>
        ))}
      </HStack>
    </Box>
  );
}

export default Footer;
