import {
  Box,
  Flex,
  Image,
  Badge,
  Text,
  Stack,
  LinkBox,
  LinkOverlay,
  useColorMode,
} from "@chakra-ui/react";

function ProjectCard({
  title,
  deployedUrl,
  githubUrl,
  image,
  description,
  badges,
}) {
  const { colorMode } = useColorMode();
  const bgColor = { light: "gray.200", dark: "gray.700" };

  return (
    <Box
      rounded="5px"
      overflow="hidden"
      boxShadow="sm"
      bg={bgColor[colorMode]}
    >
      <Image
        src={require(`../../assets/${image}`)?.default}
        alt={title}
        objectFit="cover"
        objectPosition="50% 0%"
        h="200px"
        w="100%"
      />
      <Box p={5}>
        <Stack isInline align="baseline">
          {badges.map((badge) => (
            <Badge variant="solid" variantColor="teal" rounded="full" px={2}>
              {badge}
            </Badge>
          ))}
        </Stack>
        <Text as="h2" fontWeight="semibold" fontSize="xl" my={2}>
          {title}
        </Text>
        <Text noOfLines={4} fontWeight="light" fontSize="md">
          {description}
        </Text>

        <Flex justify="space-around">
          <LinkBox>
            <LinkOverlay href={githubUrl} isExternal />
            GitHub Repo
          </LinkBox>
          <LinkBox>
            <LinkOverlay href={deployedUrl} isExternal />
            Deployed App
          </LinkBox>
        </Flex>
      </Box>
    </Box>
  );
}

export default ProjectCard;
