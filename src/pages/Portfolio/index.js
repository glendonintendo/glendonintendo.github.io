import { Flex } from "@chakra-ui/react";

import ProjectCard from "../../components/ProjectCard";

function Portfolio() {
  const projects = [
    {
      title: "Deep Thoughts",
      deployedUrl: "https://warm-depths-82390.herokuapp.com/",
      githubUrl: "https://github.com/glendonintendo/deep-thoughts",
      image: "deep-thoughts-homepage.png",
    },
    {
      title: "Music Market",
      deployedUrl: "https://stark-citadel-98109.herokuapp.com/",
      githubUrl: "https://github.com/glendonintendo/music-market",
      image: "music-market.png",
    },
    {
      title: "Budget Tracker",
      deployedUrl: "https://warm-thicket-03703.herokuapp.com/",
      githubUrl: "https://github.com/glendonintendo/budget-tracker",
      image: "budget-tracker.png",
    },
    {
      title: "Note Taker",
      deployedUrl: "https://young-sierra-98103.herokuapp.com/",
      githubUrl: "https://github.com/glendonintendo/note-taker",
      image: "note-taker.png",
    },
    {
      title: "Tech Blog",
      deployedUrl: "https://sheltered-springs-07581.herokuapp.com/",
      githubUrl: "https://github.com/glendonintendo/tech-blog",
      image: "tech-blog-dashboard.png",
    },
    {
      title: "Pizza Hunt",
      deployedUrl: "https://young-hollows-44139.herokuapp.com/",
      githubUrl: "https://github.com/glendonintendo/pizza-hunt",
      image: "pizza-hunt.png",
    },
    {
      title: "National Park Finder",
      deployedUrl: "https://glendonintendo.github.io/national-park-finder/",
      githubUrl: "https://github.com/glendonintendo/national-park-finder",
      image: "national-park-finder.png",
    },
  ];

  return (
    <Flex wrap="wrap">
      {projects.map((project) => (
        <ProjectCard
          title={project.title}
          deployedUrl={project.deployedUrl}
          githubUrl={project.githubUrl}
          image={project.image}
          key={project.title}
        ></ProjectCard>
      ))}
    </Flex>
  );
}

export default Portfolio;
