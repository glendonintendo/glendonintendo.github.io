import { Flex } from "@chakra-ui/react";

import ProjectCard from "../../components/ProjectCard";

function Portfolio() {
  const projects = [
    {
      title: "Sorting Visualizer",
      deployedUrl: "https://glendonintendo.github.io/sorting-visualizer/",
      githubUrl: "https://github.com/glendonintendo/sorting-visualizer",
      image: "sorting-visualizer.png",
      badges: ["React", "Chakra UI"],
      description:
        "The Sorting Visualizer is a learning tool for Computer Science gurus and novices alike! By manipulating the intuitive controls, users can choose between six different sorts, start and stop the animation, slow the animation speed, and much more! The Sorting Visualizer if a fully front-end application with no shortage of options and applications for use.",
    },
    {
      title: "Shop-Shop",
      deployedUrl: "https://secret-dusk-57501.herokuapp.com/",
      githubUrl: "https://github.com/glendonintendo/shop-shop",
      image: "shop-shop.png",
      badges: ["React", "GraphQL", "MongoDB", "Redux", "Stripe"],
      description:
        "At Shop-Shop you can order when you want, when you want, and at a decent price! With this ecommerce clone, users can browse, add items to their cart, and even check out! This full-stack application utilizes the latest technologies, such as React and GraphQL, to deliver a highly functional application at great speed.",
    },
    {
      title: "Deep Thoughts",
      deployedUrl: "https://warm-depths-82390.herokuapp.com/",
      githubUrl: "https://github.com/glendonintendo/deep-thoughts",
      image: "deep-thoughts-homepage.png",
      badges: ["React", "GraphQL", "MongoDB"],
      description:
        "Ever had a thought that you just needed to get out there? Deep thoughts is a platform for your big ideas. This easy to use social media web application allows you to connect with other intellectuals, post thoughts, reply to other people's thoughts, and much more! Come join the discourse.",
    },
    {
      title: "Music Market",
      deployedUrl: "https://stark-citadel-98109.herokuapp.com/",
      githubUrl: "https://github.com/glendonintendo/music-market",
      image: "music-market.png",
      badges: ["Handlebars", "SQL", "Axios", "Jest"],
      description:
        "Are you a music retailer or craftsperson who wants to expand your reach? Or maybe you are a music enthusiast who wants to expand their ever growing collection of antique string instruments. Music market is a marketplace for all music related products. This refined ecommerce application allows merchants and musicians alike to connect and do commerce.",
    },
    {
      title: "Budget Tracker",
      deployedUrl: "https://warm-thicket-03703.herokuapp.com/",
      githubUrl: "https://github.com/glendonintendo/budget-tracker",
      image: "budget-tracker.png",
      badges: ["MongoDB"],
      description: "",
    },
    {
      title: "Note Taker",
      deployedUrl: "https://young-sierra-98103.herokuapp.com/",
      githubUrl: "https://github.com/glendonintendo/note-taker",
      image: "note-taker.png",
      badges: ["JavaScript", "Jest", "Bootstrap"],
      description: "",
    },
    {
      title: "Tech Blog",
      deployedUrl: "https://sheltered-springs-07581.herokuapp.com/",
      githubUrl: "https://github.com/glendonintendo/tech-blog",
      image: "tech-blog-dashboard.png",
      badges: ["Handlebars", "SQL", "Jest"],
      description: "",
    },
    {
      title: "Pizza Hunt",
      deployedUrl: "https://young-hollows-44139.herokuapp.com/",
      githubUrl: "https://github.com/glendonintendo/pizza-hunt",
      image: "pizza-hunt.png",
      badges: ["MongoDB", "IndexedDB"],
      description: "",
    },
    {
      title: "National Park Finder",
      deployedUrl: "https://glendonintendo.github.io/national-park-finder/",
      githubUrl: "https://github.com/glendonintendo/national-park-finder",
      image: "national-park-finder.png",
      badges: ["JavaScipt", "jQuery", "MomentJS"],
      description: "",
    },
  ];

  return (
    <Flex wrap="wrap" justify="space-around" w="90%" mx="auto">
      {projects.map((project) => (
        <ProjectCard
          title={project.title}
          deployedUrl={project.deployedUrl}
          githubUrl={project.githubUrl}
          image={project.image}
          key={project.title}
          description={project.description}
          badges={project.badges}
        ></ProjectCard>
      ))}
    </Flex>
  );
}

export default Portfolio;
