import {
  Box,
  Image,
  Badge,
  Text,
  Stack,
  LinkBox,
  LinkOverlay,
  useColorMode,
} from "@chakra-ui/react";

function ProjectCard({ title, deployedUrl, githubUrl, image }) {
  const { colorMode } = useColorMode();
  const bgColor = { light: "gray.200", dark: "gray.700" };

  return (
    <Box
      w="400px"
      rounded="20px"
      overflow="hidden"
      boxShadow="sm"
      bg={bgColor[colorMode]}
    >
      <Image
        src={require(`../../assets/${image}`)?.default}
        alt="Course Cover"
      />
      <Box p={5}>
        <Stack isInline align="baseline">
          <Badge variant="solid" variantColor="teal" rounded="full" px={2}>
            React
          </Badge>
          <Badge variant="solid" variantColor="teal" rounded="full" px={2}>
            Chakra UI
          </Badge>
        </Stack>
        <Text as="h2" fontWeight="semibold" fontSize="xl" my={2}>
          {title}
        </Text>
        <Text isTruncated fontWeight="light" fontSize="md">
          Adipisicing ea pariatur ullamco deserunt amet
          <br /> consequat reprehenderit in duis est velit tempor.
          <br /> Ipsum ea ad duis sint aliquip in ullamco in dolor <br />
          reprehenderit duis ullamco. Irure tempor ullamco voluptate irure quis
          quis magna sint enim velit esse. Culpa excepteur reprehenderit sint ex
          incididunt reprehenderit deserunt nisi ullamco magna. Officia eiusmod
          ipsum laboris enim irure eu elit. Labore ex esse pariatur aliquip
          proident ipsum deserunt culpa eiusmod elit reprehenderit labore
          commodo pariatur. Consequat duis velit proident qui ad elit mollit
          culpa veniam.
        </Text>

        <Box textAlign="center">
          <LinkBox>
          <LinkOverlay href={githubUrl} isExternal />
            GitHub Repo
          </LinkBox>
          <LinkBox>
            <LinkOverlay href={deployedUrl} isExternal />
            Deployed App
          </LinkBox>
        </Box>
      </Box>
    </Box>
  );
}

export default ProjectCard;
