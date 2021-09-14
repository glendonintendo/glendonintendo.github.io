import {
  Box,
  Image,
} from "@chakra-ui/react";

import { getProject } from "../../utils/getProjectData";

function ProjectCard({
  projectKey,
  title,
  image,
  setProjectModalData,
  onOpen,
}) {
  const handleProjectClick = () => {
    setProjectModalData(getProject(projectKey));
    onOpen();
  };

  return (
    <Box
      rounded="5px"
      overflow="hidden"
      boxShadow="sm"
      onClick={handleProjectClick}
    >
      <Image
        src={require(`../../assets/${image}`)?.default}
        alt={title}
        objectFit="cover"
        objectPosition="50% 0%"
        h="200px"
        w="100%"
      />
    </Box>
  );
}

export default ProjectCard;
