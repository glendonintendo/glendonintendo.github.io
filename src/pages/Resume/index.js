import { Flex, Link, Text, Stack } from "@chakra-ui/react";

function Resume() {
  return (
    <Flex m="5vh auto" w="80%" fontSize="20px" align="center">
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
        <Text>MongoDB, Express, Node, React, Jest</Text>
        <Text as="h2" fontWeight="semibold">
          Other Tools
        </Text>
        <Text>
          MySQL, jQuery, Bootstrap, UIKit, Foundations, Git (Github),
          Handlebars, Webpack, RESTful and non-RESTful APIs
        </Text>
      </Stack>
    </Flex>
  );
}

export default Resume;
