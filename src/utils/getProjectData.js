const projects = {
  "sorting-visualizer": {
    key: "sorting-visualizer",
    title: "Sorting Visualizer",
    deployedUrl: "https://glendonintendo.github.io/sorting-visualizer/",
    githubUrl: "https://github.com/glendonintendo/sorting-visualizer",
    image: "sorting-visualizer.png",
    badges: ["React", "Chakra UI"],
    description:
      "The Sorting Visualizer is a learning tool for Computer Science gurus and novices alike! By manipulating the intuitive controls, users can choose between six different sorts, start and stop the animation, slow the animation speed, and much more! The Sorting Visualizer if a fully front-end application with no shortage of options and applications for use.",
  },
  "shop-shop": {
    key: "shop-shop",
    title: "Shop-Shop",
    deployedUrl: "https://secret-dusk-57501.herokuapp.com/",
    githubUrl: "https://github.com/glendonintendo/shop-shop",
    image: "shop-shop.png",
    badges: ["React", "GraphQL", "MongoDB", "Redux", "Stripe"],
    description:
      "At Shop-Shop you can order when you want, when you want, and at a decent price! With this ecommerce clone, users can browse, add items to their cart, and even check out! This full-stack application utilizes the latest technologies, such as React and GraphQL, to deliver a highly functional application at great speed.",
  },
  "deep-thoughts": {
    key: "deep-thoughts",
    title: "Deep Thoughts",
    deployedUrl: "https://warm-depths-82390.herokuapp.com/",
    githubUrl: "https://github.com/glendonintendo/deep-thoughts",
    image: "deep-thoughts-homepage.png",
    badges: ["React", "GraphQL", "MongoDB"],
    description:
      "Ever had a thought that you just needed to get out there? Deep thoughts is a platform for your big ideas. This easy to use social media web application allows you to connect with other intellectuals, post thoughts, reply to other people's thoughts, and much more! Come join the discourse.",
  },
  "music-market": {
    key: "music-market",
    title: "Music Market",
    deployedUrl: "https://stark-citadel-98109.herokuapp.com/",
    githubUrl: "https://github.com/glendonintendo/music-market",
    image: "music-market.png",
    badges: ["Handlebars", "SQL", "Axios", "Jest"],
    description:
      "Are you a music retailer or craftsperson who wants to expand your reach? Or maybe you are a music enthusiast who wants to expand their ever growing collection of antique string instruments. Music market is a marketplace for all music related products. This refined ecommerce application allows merchants and musicians alike to connect and do commerce.",
  },
  "budget-tracker": {
    key: "budget-tracker",
    title: "Budget Tracker",
    deployedUrl: "https://warm-thicket-03703.herokuapp.com/",
    githubUrl: "https://github.com/glendonintendo/budget-tracker",
    image: "budget-tracker.png",
    badges: ["MongoDB", "IndexedDB", "PWA"],
    description:
      "A budget visualizer application for all your financial planning needs! The Budget Tracker utilizes IndexedDB and MongoDB to provide online and offline persistence of your budget data. It also is downloadable as a desktop or phone application so you can budget on the go and at your convenience.",
  },
  "note-taker": {
    key: "note-taker",
    title: "Note Taker",
    deployedUrl: "https://young-sierra-98103.herokuapp.com/",
    githubUrl: "https://github.com/glendonintendo/note-taker",
    image: "note-taker.png",
    badges: ["JavaScript", "Jest", "Bootstrap"],
    description:
      "Note Taker is, simply put, a web application for you to take notes. No need to worry about losing where you left off; Note Taker has data persistence so you can take notes and rest assured will be able to find them when you need them.",
  },
  "tech-blog": {
    key: "tech-blog",
    title: "Tech Blog",
    deployedUrl: "https://sheltered-springs-07581.herokuapp.com/",
    githubUrl: "https://github.com/glendonintendo/tech-blog",
    image: "tech-blog-dashboard.png",
    badges: ["Handlebars", "SQL", "Jest"],
    description:
      "Tech Blog is a application for techies to connect and share tech related content. Users can create posts, edit and delete their own posts, and respond to posts. It is a one-stop-shop for all your tech news.",
  },
  "national-park-finder": {
    key: "national-park-finder",
    title: "National Park Finder",
    deployedUrl: "https://glendonintendo.github.io/national-park-finder/",
    githubUrl: "https://github.com/glendonintendo/national-park-finder",
    image: "national-park-finder.png",
    badges: ["JavaScipt", "jQuery", "MomentJS"],
    description:
      "Want to experience the most amazing parks in the United States? The National Park Finder tool can help you plan your next trip by helping you search for National Parks and updating you with relevant information for the parks you are interested in.",
  },
};

export const getAllProjects = () => {
  return Object.values(projects);
}

export const getProject = (key) => {
  return projects[key];
}