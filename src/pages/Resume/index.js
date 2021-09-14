import { Flex, Link, Text, Stack } from "@chakra-ui/react";

function Resume() {
  return (
    <Flex p="5vh 5vw" fontSize="20px" align="center" bgColor="primary.500">
      <Stack w="50%" textAlign="right" mr="20px" spacing="5">
        <Text>
          For a full list of my skills, proficiencies, and experience take a
          look at my resume.
        </Text>
        <Link
          href={require("../../assets/web-dev-resume.pdf")?.default}
          isExternal
        >
          Click here to download!
        </Link>
      </Stack>

      <Stack w="50%" ml="20px">
        <Text as="h2" fontWeight="semibold">
          Languages
        </Text>
        <Text>JavaScript ES6+, HMTL5, CSS3, SQL, NoSQL, GraphQL, Python</Text>
        <Text as="h2" fontWeight="semibold">
          Frameworks
        </Text>
        <Text>MongoDB, Express, Node, React, Next, Jest</Text>
        <Text as="h2" fontWeight="semibold">
          Other Tools
        </Text>
        <Text>
          MySQL, jQuery, Bootstrap, ChakraUI, Foundations, Git (Github),
          Handlebars, Webpack, Redux, GitHub, Heroku, JSON
        </Text>
        <Text as="h2" fontWeight="semibold">
          Paradigms
        </Text>
        <Text>
          RESTful and non-RESTful APIs, Object-Oriented Programming, Test-Driven
          Development, UX/UI
        </Text>
      </Stack>
    </Flex>
  );
}

export default Resume;
