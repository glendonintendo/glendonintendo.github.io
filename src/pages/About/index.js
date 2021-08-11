import { Flex, Stack, Image, Text } from "@chakra-ui/react";

function About() {
  return (
    <Flex justify="center" align="center" my="5vh">
      <Image
        src={require("../../assets/profile-pic.jpg")?.default}
        alt="profile of Glen"
        borderRadius="50%"
        boxSize="500px"
        objectFit="cover"
        objectPosition="50% 20%"
        mx="20px"
      />

      <Stack w="40%" fontSize="24px" borderLeft="2px solid black" pl="10px">
        <Text as="h2" fontWeight="semibold" fontSize="30px">
          Hello, I'm Glen
        </Text>
        <Text>
          I am a full stack web developer currently based in Austin, TX.
        </Text>
        <Text>
          I develop powerful, single-page, progressive web applications using
          the MongoDB, Express, React, Node (MERN) tech stack.
        </Text>
        <Text>
          I want to work with you to create beautiful, responsive applications
          that both fit your organization's needs and exceed your expectations.
        </Text>
      </Stack>
    </Flex>
  );
}

export default About;
