import { useState } from "react";
import { Grid, useDisclosure } from "@chakra-ui/react";

import ProjectCard from "../../components/ProjectCard";
import ProjectModal from "../../components/ProjectModal";
import { getAllProjects } from "../../utils/getProjectData";

function Portfolio() {
  const [projects] = useState(getAllProjects());
  const [projectModalData, setProjectModalData] = useState();
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Grid templateColumns="repeat(3, 1fr)" mx="auto" w="90%" gap="25px">
        {projects.map((project) => (
          <ProjectCard
            projectKey={project.key}
            title={project.title}
            deployedUrl={project.deployedUrl}
            githubUrl={project.githubUrl}
            image={project.image}
            key={project.title}
            description={project.description}
            badges={project.badges}
            setProjectModalData={setProjectModalData}
            onOpen={onOpen}
          ></ProjectCard>
        ))}
      </Grid>

      <ProjectModal
        isOpen={isOpen}
        onClose={onClose}
        project={projectModalData}
      ></ProjectModal>
    </>
  );
}

export default Portfolio;
